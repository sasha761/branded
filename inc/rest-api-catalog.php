<?php
function get_product_category_by_slug($category_slug) {
  $category = get_term_by('slug', $category_slug, 'product_cat');
  if ($category) {
    return $category;
  } else { 
    return null;
  }
}

add_action( 'rest_api_init', function () {
  $namespace = '/api/archive';

  register_rest_route( $namespace, '/get_sidebar', [
    'methods' => 'GET',
    'callback' => 'get_catalog_sidebar',
    'permission_callback' => '__return_true',
    'args' => [
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
      'slug' => [
        'required' => false,
      ],
    ],
  ]);

  register_rest_route( $namespace, '/get_filters', [
    'methods' => 'GET',
    'callback' => 'get_catalog_filters',
    'permission_callback' => '__return_true',
    'args' => [
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
      'slug' => [
        'required' => false,
      ],
      'is_brand' => [
        'required' => false,
        'default'  => false,
      ],
    ],
  ]);

  register_rest_route( $namespace, '/get_products', [
    'methods' => 'GET',
    'callback' => 'get_products',
    'permission_callback' => '__return_true',
    'args'     => [
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
      'url' => [
        'required' => true,
      ],
      'slug' => [
        'required' => false,
      ],
      'page' => [
        'required' => false,
        'default'  => 1,
      ],
      'offset' => [
        'required' => false,
      ]
    ],
  ]);
});

function rest_api_catalog_get_cache_version() {
  $version = wp_cache_get('catalog_cache_version', 'rest_api_meta');

  if ($version === false) {
    $version = 1;
    wp_cache_set('catalog_cache_version', $version, 'rest_api_meta');
  }

  return (string) $version;
}

function rest_api_catalog_build_cache_key($endpoint, array $context = []) {
  $payload = [
    'version' => rest_api_catalog_get_cache_version(),
    'endpoint' => $endpoint,
    'context' => $context,
  ];

  return 'rest_api:' . md5(wp_json_encode($payload));
}

function rest_api_catalog_normalize_url($url) {
  $url = is_string($url) ? trim($url) : '';
  if ($url === '') {
    return '';
  }

  $parts = wp_parse_url($url);
  if ($parts === false) {
    return $url;
  }

  $path = trim((string) ($parts['path'] ?? ''), '/');
  $query_params = [];

  if (!empty($parts['query'])) {
    parse_str($parts['query'], $query_params);
    ksort($query_params);
  }

  return $path . (!empty($query_params) ? '?' . http_build_query($query_params) : '');
}

function rest_api_catalog_resolve_lang($lang = '') {
  $lang = sanitize_key((string) $lang);
  $langs = function_exists('get_cache_langs') ? get_cache_langs() : ['ru'];

  if ($lang !== '' && in_array($lang, $langs, true)) {
    return $lang;
  }

  $current_lang = sanitize_key((string) apply_filters('wpml_current_language', null));
  if ($current_lang !== '' && in_array($current_lang, $langs, true)) {
    return $current_lang;
  }

  return $langs[0] ?? 'ru';
}

function clear_catalog_cache(...$args) {
  wp_cache_set('catalog_cache_version', microtime(true), 'rest_api_meta');
}

function clear_catalog_cache_on_product_terms($object_id, $terms, $tt_ids, $taxonomy) {
  if (get_post_type($object_id) !== 'product') {
    return;
  }

  if ($taxonomy !== 'product_cat' && strpos($taxonomy, 'pa_') !== 0) {
    return;
  }

  clear_catalog_cache();
}

function clear_catalog_cache_on_term_change(...$args) {
  foreach ($args as $arg) {
    if (is_string($arg) && ($arg === 'product_cat' || strpos($arg, 'pa_') === 0)) {
      clear_catalog_cache();
      return;
    }
  }
}

add_action('save_post_product', 'clear_catalog_cache');
add_action('save_post_product_variation', 'clear_catalog_cache');
add_action('woocommerce_update_product', 'clear_catalog_cache');
add_action('woocommerce_update_product_variation', 'clear_catalog_cache');
add_action('woocommerce_product_set_stock_status', 'clear_catalog_cache');
add_action('woocommerce_variation_set_stock_status', 'clear_catalog_cache');
add_action('woocommerce_attribute_added', 'clear_catalog_cache');
add_action('woocommerce_attribute_updated', 'clear_catalog_cache');
add_action('woocommerce_attribute_deleted', 'clear_catalog_cache');
add_action('set_object_terms', 'clear_catalog_cache_on_product_terms', 10, 4);
add_action('created_term', 'clear_catalog_cache_on_term_change', 10, 4);
add_action('edited_term', 'clear_catalog_cache_on_term_change', 10, 4);
add_action('delete_term', 'clear_catalog_cache_on_term_change', 10, 5);

function get_products(WP_REST_Request $request) {
  $number_posts = 16;

  $url = (string) $request->get_param('url');
  $slug = sanitize_title((string) $request->get_param('slug'));
  $lang = rest_api_catalog_resolve_lang($request->get_param('lang'));

  $query_params = [];
  $query_string = parse_url($url, PHP_URL_QUERY);
  if ($query_string) {
    parse_str($query_string, $query_params);
  }

  $url_path = trim((string) parse_url($url, PHP_URL_PATH), '/');
  $url_parts = $url_path === '' ? [] : explode('/', $url_path);

  $page = absint($request->get_param('page') ?: ($query_params['page'] ?? 1));
  $page = max(1, $page);

  $offset_param = $request->get_param('offset');
  $offset = is_numeric($offset_param) ? (int) $offset_param : (($page - 1) * $number_posts);

  $cache_key = rest_api_catalog_build_cache_key('get_products', [
    'lang' => $lang,
    'url' => rest_api_catalog_normalize_url($url),
    'slug' => $slug,
    'page' => $page,
    'offset' => $offset,
  ]);

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

  $brand_index = array_search('brand', $url_parts, true);
  $brand_slug_from_url = $brand_index !== false ? ($url_parts[$brand_index + 1] ?? null) : null;

  $args = [];
  $tax_query = [];

  if ($brand_index !== false) {
    $brand_slug = $slug ?: $brand_slug_from_url;

    if (!empty($brand_slug) && function_exists('icl_object_id')) {
      $brand_term = get_term_by('slug', $brand_slug, 'pa_brand');
      if ($brand_term) {
        $translated_brand_id = apply_filters('wpml_object_id', $brand_term->term_id, 'pa_brand', true, $lang);
        $translated_brand = get_term($translated_brand_id, 'pa_brand');
        if ($translated_brand) {
          $brand_slug = $translated_brand->slug;
        }
      }
    }

    if (!empty($brand_slug)) {
      $tax_query[] = [
        'taxonomy' => 'pa_brand',
        'field'    => 'slug',
        'terms'    => $brand_slug,
        'operator' => 'IN',
      ];

    }
  }

  $meta_key = '_stock_status';
  $order = 'ASC';
  $orderby = [
    'meta_value' => 'ASC', // Сначала "instock", затем "outofstock"
    'date' => 'DESC', // Затем сортировка по дате (самые новые товары)
  ];

  if (!empty($query_params['orderby'])) {
    switch ($query_params['orderby']) {
      case 'popularity':
        $meta_key = 'total_sales';
        $order = 'desc';
        $orderby = 'meta_value_num date';
        break;
      case 'price':
        $meta_key = '_price';
        $order = 'asc';
        $orderby = 'meta_value_num date';
        break;
      case 'price-asc':
        $meta_key = '_price';
        $order = 'asc';
        $orderby = 'meta_value_num date';
        break;  
      case 'price-desc':
        $meta_key = '_price';
        $order = 'desc';
        $orderby = 'meta_value_num date';
        break;
      case 'date':
        $meta_key = '';
        $order = 'desc';
        $orderby = 'date';
        break;
      case 'rating':
        $meta_key = '_wc_average_rating';
        $order = 'desc';
        $orderby = 'meta_value_num date';
        break;
      default:
        $meta_key = '_stock_status';
        $order = 'ASC';
        $orderby = [
          'meta_value' => 'ASC', // Сначала "instock", затем "outofstock"
          'date' => 'DESC', // Затем сортировка по дате (самые новые товары)
        ];
    }
  }

  $number_posts = 16;

  $args = [
    'post_type'      => 'product',
    'post_status'    => 'publish',
    'posts_per_page' => $number_posts,
    'paged'          => $page,
    'orderby'        => $orderby,
    'order'          => $order,
    'meta_key'       => $meta_key,
    'offset'         => $offset,
    'suppress_filters' => false,
  ];

  $response = [];

  if ($brand_index !== false && !empty($brand_slug)) {
    $brand_term_obj = get_term_by('slug', $brand_slug, 'pa_brand');
    if ($brand_term_obj && !is_wp_error($brand_term_obj)) {
      $response['brand'] = [
        'name'        => $brand_term_obj->name,
        'description' => term_description($brand_term_obj->term_id, 'pa_brand') ?: '',
      ];
    }
  }

  if (!empty($slug)) {
    $category = get_term_by('slug', $slug, 'product_cat');
    if ($category && function_exists('icl_object_id')) {
      $translated_category_id = apply_filters('wpml_object_id', $category->term_id, 'product_cat', true, $lang);
      if ($translated_category_id) {
        $translated_category = get_term($translated_category_id, 'product_cat');
        $args['product_cat'] = $translated_category ? $translated_category->slug : $slug;

        $response['product_cat'] = $slug ? get_category_details_by_slug($slug) : null;
      }
    }
  }

  if (!empty($query_params)) {
    foreach ($query_params as $key => $value) {

      if ($key !== 'orderby' && $key !== 'page' && $key !== 's' && !empty($value)) {
        $tax_query[] = [
          'taxonomy' => 'pa_' . $key,
          'field'    => 'slug',
          'terms'    => $value,
          'operator' => 'IN',
        ];
      }
      if ($key === 's' && !empty($value)) {
        $args['s'] = sanitize_text_field($value);
      }
    }
  }

  if (!empty($tax_query)) {
    $args['tax_query'] = array_merge(['relation' => 'AND'], $tax_query);
  }

  // if (function_exists('icl_object_id')) {
  //   $args['lang'] = $lang;
  // }
  
  add_filter('post_search_columns', function($search_columns) {
      return ['post_title'];
  });

  $query = new WP_Query($args);
  $posts = $query->posts;

  if (!empty($posts)) {
    $response['products_count'] = $query->found_posts;

    foreach ($posts as $key => $post) {
      $post_id = function_exists('icl_object_id') ? apply_filters('wpml_object_id', $post->ID, 'product', true, $lang) : $post->ID;
      $product = wc_get_product($post_id);
      $response['products'][$key] = get_product_short_info($product, $post_id);
    }
  } 

  wp_cache_set($cache_key, $response, 'rest_api', 10 * MINUTE_IN_SECONDS);

  return $response;
}

function get_catalog_filters(WP_REST_Request $request) {
  $lang = rest_api_catalog_resolve_lang($request->get_param('lang'));
  $slug = sanitize_title((string) $request->get_param('slug'));
  $is_brand = filter_var($request->get_param('is_brand'), FILTER_VALIDATE_BOOLEAN);

  $cache_key = rest_api_catalog_build_cache_key('get_catalog_filters', [
    'lang' => $lang,
    'slug' => $slug,
    'is_brand' => $is_brand,
  ]);

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

  $category_id = null;
  if (!empty($slug)) {
    $category = get_term_by('slug', $slug, 'product_cat');
    if ($category && function_exists('icl_object_id')) {
      $category_id = apply_filters('wpml_object_id', $category->term_id, 'product_cat', true, $lang);
    } elseif ($category) {
      $category_id = $category->term_id;
    }
  }

  // Получаем ID товаров в категории для подсчёта
  $product_args = [
    'post_type'      => 'product',
    'post_status'    => 'publish',
    'posts_per_page' => -1,
    'fields'         => 'ids',
    'suppress_filters' => false,
  ];

  if ($category_id) {
    $product_args['tax_query'] = [
      [
        'taxonomy' => 'product_cat',
        'field'    => 'term_id',
        'terms'    => $category_id,
      ],
    ];
  }

  $product_ids = get_posts($product_args);

  // Атрибуты для фильтрации
  $filter_taxonomies = wc_get_attribute_taxonomies();
  $filters = [];

  foreach ($filter_taxonomies as $taxonomy) {
    if ($is_brand && $taxonomy->attribute_name === 'brand') continue;

    $taxonomy_name = wc_attribute_taxonomy_name($taxonomy->attribute_name);

    $terms = get_terms([
      'taxonomy'   => $taxonomy_name,
      'hide_empty' => true,
    ]);

    if (empty($terms) || is_wp_error($terms)) continue;

    // Если указана категория — считаем только товары в ней
    $filter_options = [];
    foreach ($terms as $term) {
      $count = $term->count;

      if (!empty($product_ids)) {
        $count = 0;
        foreach ($product_ids as $pid) {
          if (has_term($term->term_id, $taxonomy_name, $pid)) {
            $count++;
          }
        }
      }

      if ($count === 0) continue;

      // WPML перевод термина
      if (function_exists('icl_object_id')) {
        $translated_term_id = apply_filters('wpml_object_id', $term->term_id, $taxonomy_name, true, $lang);
        if ($translated_term_id && $translated_term_id !== $term->term_id) {
          $translated_term = get_term($translated_term_id, $taxonomy_name);
          if ($translated_term && !is_wp_error($translated_term)) {
            $term = $translated_term;
          }
        }
      }

      $filter_options[] = [
        'slug'  => $term->slug,
        'name'  => $term->name,
        'count' => $count,
      ];
    }

    if (!empty($filter_options)) {
      $filters[] = [
        'attribute' => $taxonomy->attribute_name,
        'label'     => $taxonomy->attribute_label,
        'options'   => $filter_options,
      ];
    }
  }

  // Ценовой диапазон
  $price_range = ['min' => 0, 'max' => 0];
  if (!empty($product_ids)) {
    global $wpdb;
    $ids_placeholder = implode(',', array_map('intval', $product_ids));
    $price_range = $wpdb->get_row(
      "SELECT MIN(CAST(meta_value AS DECIMAL(10,2))) as min, MAX(CAST(meta_value AS DECIMAL(10,2))) as max
       FROM {$wpdb->postmeta}
       WHERE post_id IN ({$ids_placeholder})
       AND meta_key = '_price'
       AND meta_value != ''",
      ARRAY_A
    );
    $price_range['min'] = floatval($price_range['min'] ?? 0);
    $price_range['max'] = floatval($price_range['max'] ?? 0);
  }

  // Варианты сортировки
  $sort_options = [
    ['value' => 'default',    'label' => __('По умолчанию', 'branded')],
    ['value' => 'popularity', 'label' => __('По популярности', 'branded')],
    ['value' => 'date',       'label' => __('По новизне', 'branded')],
    ['value' => 'price-asc',  'label' => __('Цена: по возрастанию', 'branded')],
    ['value' => 'price-desc', 'label' => __('Цена: по убыванию', 'branded')],
    ['value' => 'rating',     'label' => __('По рейтингу', 'branded')],
  ];

  $response = [
    'filters'      => $filters,
    'price_range'  => $price_range,
    'sort_options'  => $sort_options,
    'products_count' => count($product_ids),
  ];

  wp_cache_set($cache_key, $response, 'rest_api', 30 * MINUTE_IN_SECONDS);

  return $response;
}

function get_catalog_sidebar(WP_REST_Request $request) {
  $lang = rest_api_catalog_resolve_lang($request->get_param('lang'));
  $current_slug = sanitize_title((string) $request->get_param('slug'));

  $cache_key = rest_api_catalog_build_cache_key('get_catalog_sidebar', [
    'lang' => $lang,
    'slug' => $current_slug,
  ]);

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

  // Корневые ID категорий (как в woocommerce.php)
  $root_ids = [16, 17, 18];

  // Определяем активную корневую категорию
  $active_root_id = null;
  if (!empty($current_slug)) {
    $current_term = get_term_by('slug', $current_slug, 'product_cat');
    if (!$current_term && function_exists('icl_object_id')) {
      global $wpdb;
      $term_id = $wpdb->get_var($wpdb->prepare(
        "SELECT t.term_id FROM {$wpdb->terms} t
         INNER JOIN {$wpdb->term_taxonomy} tt ON t.term_id = tt.term_id
         WHERE t.slug = %s AND tt.taxonomy = 'product_cat'
         LIMIT 1",
        $current_slug
      ));
      if ($term_id) $current_term = get_term($term_id, 'product_cat');
    }

    if ($current_term) {
      $ancestors = get_ancestors($current_term->term_id, 'product_cat', 'taxonomy');
      if (!empty($ancestors)) {
        $active_root_id = end($ancestors);
      } else {
        $active_root_id = $current_term->term_id;
      }
    }
  }

  $sidebar = [];

  foreach ($root_ids as $root_id) {
    // WPML: переводим ID корневой категории
    if (function_exists('icl_object_id')) {
      $translated_root_id = apply_filters('wpml_object_id', $root_id, 'product_cat', true, $lang);
      if ($translated_root_id) $root_id = $translated_root_id;
    }

    $root_term = get_term($root_id, 'product_cat');
    if (!$root_term || is_wp_error($root_term)) continue;

    $children = get_terms([
      'taxonomy'     => 'product_cat',
      'hide_empty'   => true,
      'hierarchical' => true,
      'parent'       => $root_id,
    ]);

    $children_data = [];
    if (!empty($children) && !is_wp_error($children)) {
      foreach ($children as $child) {
        $children_data[] = [
          'term_id' => $child->term_id,
          'name'    => $child->name,
          'slug'    => $child->slug,
          'url'     => get_term_link($child),
          'count'   => $child->count,
        ];
      }
    }

    $sidebar[] = [
      'id'        => $root_id,
      'label'     => $root_term->name,
      'slug'      => $root_term->slug,
      'url'       => get_term_link($root_term),
      'is_active' => ($active_root_id === $root_id),
      'children'  => $children_data,
    ];
  }

  wp_cache_set($cache_key, $sidebar, 'rest_api', HOUR_IN_SECONDS);

  return $sidebar;
}
