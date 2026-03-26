<?php

add_action('rest_api_init', function () {
  $namespace = '/api/seo';

  register_rest_route($namespace, '/get_seo', [
    'methods'  => 'POST',
    'callback' => 'get_seo_data',
    'permission_callback' => '__return_true',
    'args' => [
      'url' => [
        'required' => true,
      ],
      'type' => [
        'required' => true,
      ],
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
    ],
  ]);

  register_rest_route($namespace, '/get_breadcrumbs', [
    'methods'  => 'POST',
    'callback' => 'get_breadcrumbs_data',
    'permission_callback' => '__return_true',
    'args' => [
      'url' => [
        'required' => true,
      ],
      'type' => [
        'required' => true,
      ],
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
    ],
  ]);
});

function rest_api_seo_get_cache_version() {
  $version = wp_cache_get('seo_cache_version', 'rest_api_meta');

  if ($version === false) {
    $version = 1;
    wp_cache_set('seo_cache_version', $version, 'rest_api_meta');
  }

  return (string) $version;
}

function rest_api_seo_build_cache_key($endpoint, array $context = []) {
  $payload = [
    'version' => rest_api_seo_get_cache_version(),
    'endpoint' => $endpoint,
    'context' => $context,
  ];

  return 'rest_api:' . md5(wp_json_encode($payload));
}

function rest_api_seo_normalize_url($url) {
  $url = is_string($url) ? trim($url) : '';
  if ($url === '') {
    return '';
  }

  $parts = wp_parse_url($url);
  if ($parts === false) {
    return trim($url, '/');
  }

  return trim((string) ($parts['path'] ?? $url), '/');
}

function rest_api_seo_resolve_lang($lang = '') {
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

function rest_api_seo_switch_language($lang) {
  global $sitepress;

  if (isset($sitepress) && method_exists($sitepress, 'switch_lang')) {
    $sitepress->switch_lang($lang);
    return;
  }

  do_action('wpml_switch_language', $lang);
}

function rest_api_seo_with_language($lang, callable $callback) {
  if (!function_exists('icl_object_id')) {
    return $callback();
  }

  $previous_lang = sanitize_key((string) apply_filters('wpml_current_language', null));
  $restore_lang = $previous_lang !== '' ? $previous_lang : null;

  if ($lang !== '' && $lang !== $restore_lang) {
    rest_api_seo_switch_language($lang);
  }

  try {
    return $callback();
  } finally {
    if ($restore_lang !== null && $lang !== '' && $lang !== $restore_lang) {
      rest_api_seo_switch_language($restore_lang);
    }
  }
}

function clear_seo_cache(...$args) {
  wp_cache_set('seo_cache_version', microtime(true), 'rest_api_meta');
}

function clear_seo_cache_on_product_terms($object_id, $terms, $tt_ids, $taxonomy) {
  if (get_post_type($object_id) !== 'product') {
    return;
  }

  if ($taxonomy !== 'product_cat' && $taxonomy !== 'pa_brand') {
    return;
  }

  clear_seo_cache();
}

function clear_seo_cache_on_term_change(...$args) {
  foreach ($args as $arg) {
    if ($arg === 'product_cat' || $arg === 'pa_brand') {
      clear_seo_cache();
      return;
    }
  }
}

function clear_seo_cache_on_option_change($option, $old_value, $value) {
  if (in_array($option, ['wpseo_titles', 'blogname', 'page_on_front'], true)) {
    clear_seo_cache();
  }
}

add_action('save_post_page', 'clear_seo_cache');
add_action('save_post_product', 'clear_seo_cache');
add_action('save_post_product_variation', 'clear_seo_cache');
add_action('woocommerce_update_product', 'clear_seo_cache');
add_action('woocommerce_update_product_variation', 'clear_seo_cache');
add_action('woocommerce_product_set_stock_status', 'clear_seo_cache');
add_action('woocommerce_variation_set_stock_status', 'clear_seo_cache');
add_action('set_object_terms', 'clear_seo_cache_on_product_terms', 10, 4);
add_action('created_term', 'clear_seo_cache_on_term_change', 10, 4);
add_action('edited_term', 'clear_seo_cache_on_term_change', 10, 4);
add_action('delete_term', 'clear_seo_cache_on_term_change', 10, 5);
add_action('updated_option', 'clear_seo_cache_on_option_change', 10, 3);
add_action('edit_attachment', 'clear_seo_cache');
add_action('delete_attachment', 'clear_seo_cache', 10, 2);

function clean_url_slug($url) {
  $url = trim($url, '/');
  $url = preg_replace('#^(uk|en|ru)/#', '', $url);
  $url = preg_replace('#^(product-category|product|pa_brand|brand)/?\s*#', '', $url);
  $url = trim($url, '/');
  $parts = explode('/', $url);

  return end($parts);
}

function find_term_by_slug_any_lang($slug, $taxonomy) {
  $term = get_term_by('slug', $slug, $taxonomy);
  if ($term) {
    return $term;
  }

  if (function_exists('icl_object_id')) {
    global $wpdb;
    $term_id = $wpdb->get_var($wpdb->prepare(
      "SELECT t.term_id FROM {$wpdb->terms} t
       INNER JOIN {$wpdb->term_taxonomy} tt ON t.term_id = tt.term_id
       WHERE t.slug = %s AND tt.taxonomy = %s
       LIMIT 1",
      $slug,
      $taxonomy
    ));

    if ($term_id) {
      return get_term($term_id, $taxonomy);
    }
  }

  return null;
}

function resolve_post_id_from_request($url, $type, $lang) {
  switch ($type) {
    case 'product':
      $product_slug = clean_url_slug($url);
      if (function_exists('icl_object_id')) {
        global $sitepress;
        if ($sitepress) {
          $sitepress->switch_lang('all');
        }
      }

      $post = get_page_by_path($product_slug, OBJECT, 'product');

      if (function_exists('icl_object_id') && isset($sitepress)) {
        $sitepress->switch_lang($lang);
      }

      if ($post) {
        return function_exists('icl_object_id')
          ? apply_filters('wpml_object_id', $post->ID, 'product', true, $lang)
          : $post->ID;
      }

      return null;

    case 'page':
      $path_parts = explode('/', trim($url, '/'));
      $language_codes = ['en', 'uk', 'ru'];
      if (in_array($path_parts[0], $language_codes, true)) {
        array_shift($path_parts);
      }
      $slug = implode('/', $path_parts);

      if (function_exists('icl_object_id')) {
        global $sitepress;
        if ($sitepress) {
          $sitepress->switch_lang('all');
        }
      }

      $page = get_page_by_path($slug, OBJECT, 'page');

      if (function_exists('icl_object_id') && isset($sitepress)) {
        $sitepress->switch_lang($lang);
      }

      if ($page) {
        return function_exists('icl_object_id')
          ? apply_filters('wpml_object_id', $page->ID, 'page', true, $lang)
          : $page->ID;
      }

      return null;

    case 'category':
      $category_slug = clean_url_slug($url);
      $term = find_term_by_slug_any_lang($category_slug, 'product_cat');
      if ($term && function_exists('icl_object_id')) {
        $translated_id = apply_filters('wpml_object_id', $term->term_id, 'product_cat', true, $lang);
        return $translated_id ? 'term_' . $translated_id : null;
      }

      return $term ? 'term_' . $term->term_id : null;

    case 'brand':
      $brand_slug = clean_url_slug($url);
      $term = find_term_by_slug_any_lang($brand_slug, 'pa_brand');
      if ($term && function_exists('icl_object_id')) {
        $translated_id = apply_filters('wpml_object_id', $term->term_id, 'pa_brand', true, $lang);
        return $translated_id ? 'brand_' . $translated_id : null;
      }

      return $term ? 'brand_' . $term->term_id : null;

    case 'home':
      $front_page_id = get_option('page_on_front');
      if ($front_page_id && function_exists('icl_object_id')) {
        return apply_filters('wpml_object_id', $front_page_id, 'page', true, $lang);
      }

      return $front_page_id ?: null;

    default:
      return null;
  }
}

function get_yoast_meta_for_post($post_id) {
  $post = get_post($post_id);
  $post_type = $post ? $post->post_type : 'post';
  $yoast_titles = get_option('wpseo_titles', []);

  $meta = [
    'title'            => get_post_meta($post_id, '_yoast_wpseo_title', true),
    'description'      => get_post_meta($post_id, '_yoast_wpseo_metadesc', true),
    'canonical'        => get_post_meta($post_id, '_yoast_wpseo_canonical', true),
    'og_title'         => get_post_meta($post_id, '_yoast_wpseo_opengraph-title', true),
    'og_description'   => get_post_meta($post_id, '_yoast_wpseo_opengraph-description', true),
    'og_image'         => get_post_meta($post_id, '_yoast_wpseo_opengraph-image', true),
    'robots_noindex'   => get_post_meta($post_id, '_yoast_wpseo_meta-robots-noindex', true),
    'robots_nofollow'  => get_post_meta($post_id, '_yoast_wpseo_meta-robots-nofollow', true),
  ];

  if (empty($meta['title']) && !empty($yoast_titles["title-{$post_type}"])) {
    $meta['title'] = $yoast_titles["title-{$post_type}"];
  }
  if (empty($meta['title'])) {
    $meta['title'] = get_the_title($post_id) . ' - ' . get_bloginfo('name');
  } elseif (function_exists('wpseo_replace_vars')) {
    $meta['title'] = wpseo_replace_vars($meta['title'], $post);
  }

  if (empty($meta['description']) && !empty($yoast_titles["metadesc-{$post_type}"])) {
    $meta['description'] = $yoast_titles["metadesc-{$post_type}"];
  }
  if (!empty($meta['description']) && function_exists('wpseo_replace_vars')) {
    $meta['description'] = wpseo_replace_vars($meta['description'], $post);
  }
  if (empty($meta['description'])) {
    $meta['description'] = wp_strip_all_tags(get_the_excerpt($post_id));
  }

  if (empty($meta['og_title'])) {
    $meta['og_title'] = $meta['title'];
  }
  if (empty($meta['og_description'])) {
    $meta['og_description'] = $meta['description'];
  }
  if (empty($meta['og_image'])) {
    $meta['og_image'] = get_the_post_thumbnail_url($post_id, 'large');
  }
  if (empty($meta['canonical'])) {
    $meta['canonical'] = get_permalink($post_id);
  }

  $robots = [];
  if ($meta['robots_noindex'] === '1') {
    $robots[] = 'noindex';
  }
  if ($meta['robots_nofollow'] === '1') {
    $robots[] = 'nofollow';
  }
  $meta['robots'] = !empty($robots) ? implode(', ', $robots) : 'index, follow';
  unset($meta['robots_noindex'], $meta['robots_nofollow']);

  return $meta;
}

function get_yoast_meta_for_term($term_id, $taxonomy) {
  $term = get_term($term_id, $taxonomy);
  if (!$term || is_wp_error($term)) {
    return null;
  }

  $yoast_titles = get_option('wpseo_titles', []);
  $tax_key = $taxonomy;

  $meta = [
    'title'          => get_term_meta($term_id, 'wpseo_title', true),
    'description'    => get_term_meta($term_id, 'wpseo_desc', true),
    'canonical'      => get_term_meta($term_id, 'wpseo_canonical', true),
    'og_title'       => get_term_meta($term_id, 'wpseo_opengraph-title', true),
    'og_description' => get_term_meta($term_id, 'wpseo_opengraph-description', true),
    'og_image'       => get_term_meta($term_id, 'wpseo_opengraph-image', true),
    'robots_noindex' => get_term_meta($term_id, 'wpseo_noindex', true),
  ];

  if (empty($meta['title']) && !empty($yoast_titles["title-tax-{$tax_key}"])) {
    $meta['title'] = $yoast_titles["title-tax-{$tax_key}"];
  }
  if (empty($meta['title'])) {
    $meta['title'] = $term->name . ' - ' . get_bloginfo('name');
  } elseif (function_exists('wpseo_replace_vars')) {
    $meta['title'] = wpseo_replace_vars($meta['title'], $term);
  }

  if (empty($meta['description']) && !empty($yoast_titles["metadesc-tax-{$tax_key}"])) {
    $meta['description'] = $yoast_titles["metadesc-tax-{$tax_key}"];
  }
  if (!empty($meta['description']) && function_exists('wpseo_replace_vars')) {
    $meta['description'] = wpseo_replace_vars($meta['description'], $term);
  }
  if (empty($meta['description'])) {
    $meta['description'] = wp_strip_all_tags(term_description($term_id, $taxonomy));
  }

  if (empty($meta['og_title'])) {
    $meta['og_title'] = $meta['title'];
  }
  if (empty($meta['og_description'])) {
    $meta['og_description'] = $meta['description'];
  }

  if (empty($meta['og_image'])) {
    $thumbnail_id = get_term_meta($term_id, 'thumbnail_id', true);
    if ($thumbnail_id) {
      $meta['og_image'] = wp_get_attachment_url($thumbnail_id);
    }
  }

  if (empty($meta['canonical'])) {
    $meta['canonical'] = get_term_link($term);
  }

  $meta['robots'] = ($meta['robots_noindex'] === 'noindex') ? 'noindex, follow' : 'index, follow';
  unset($meta['robots_noindex']);

  return $meta;
}

function get_seo_data(WP_REST_Request $request) {
  $url  = rest_api_seo_normalize_url(sanitize_text_field($request->get_param('url')));
  $type = sanitize_key((string) $request->get_param('type'));
  $lang = rest_api_seo_resolve_lang($request->get_param('lang'));

  $cache_key = rest_api_seo_build_cache_key('get_seo_data', [
    'url' => $url,
    'type' => $type,
    'lang' => $lang,
  ]);

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

  $seo = rest_api_seo_with_language($lang, function () use ($url, $type, $lang) {
    $resolved = resolve_post_id_from_request($url, $type, $lang);

    if (!$resolved) {
      return new WP_Error('not_found', 'Page not found for SEO', ['status' => 404]);
    }

    if (is_string($resolved) && strpos($resolved, 'term_') === 0) {
      $term_id = intval(str_replace('term_', '', $resolved));
      $seo_data = get_yoast_meta_for_term($term_id, 'product_cat');
    } elseif (is_string($resolved) && strpos($resolved, 'brand_') === 0) {
      $term_id = intval(str_replace('brand_', '', $resolved));
      $seo_data = get_yoast_meta_for_term($term_id, 'pa_brand');
    } else {
      $seo_data = get_yoast_meta_for_post($resolved);
    }

    if (!$seo_data) {
      return new WP_Error('not_found', 'SEO data not found', ['status' => 404]);
    }

    $seo_data['og_url'] = $seo_data['canonical'] ?? '';
    $seo_data['og_site_name'] = get_bloginfo('name');
    $seo_data['og_type'] = ($type === 'product') ? 'product' : 'article';

    $locale_map = [
      'ru' => 'ru_RU',
      'uk' => 'uk_UA',
      'en' => 'en_US',
    ];
    $seo_data['og_locale'] = $locale_map[$lang] ?? 'ru_RU';

    if (!empty($seo_data['og_image'])) {
      $image_id = attachment_url_to_postid($seo_data['og_image']);
      if ($image_id) {
        $image_meta = wp_get_attachment_metadata($image_id);
        $seo_data['og_image_width'] = $image_meta['width'] ?? null;
        $seo_data['og_image_height'] = $image_meta['height'] ?? null;
        $seo_data['og_image_type'] = get_post_mime_type($image_id) ?: null;
      }
    }

    $seo_data['twitter_card'] = 'summary_large_image';
    $seo_data['schema'] = null;

    if (is_numeric($resolved) && class_exists('WPSEO_Schema_Context') && $type === 'product') {
      $product = wc_get_product($resolved);
      if ($product) {
        $seo_data['schema'] = [
          '@type'       => 'Product',
          'name'        => $product->get_title(),
          'description' => wp_strip_all_tags($product->get_short_description()),
          'image'       => get_the_post_thumbnail_url($resolved, 'large'),
          'sku'         => $product->get_sku(),
          'offers'      => [
            '@type'         => 'Offer',
            'price'         => $product->get_price(),
            'priceCurrency' => get_woocommerce_currency(),
            'availability'  => $product->is_in_stock()
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
          ],
        ];
      }
    }

    return $seo_data;
  });

  if (!is_wp_error($seo)) {
    wp_cache_set($cache_key, $seo, 'rest_api', 6 * HOUR_IN_SECONDS);
  }

  return $seo;
}

function get_breadcrumbs_data(WP_REST_Request $request) {
  $url  = rest_api_seo_normalize_url(sanitize_text_field($request->get_param('url')));
  $type = sanitize_key((string) $request->get_param('type'));
  $lang = rest_api_seo_resolve_lang($request->get_param('lang'));

  $cache_key = rest_api_seo_build_cache_key('get_breadcrumbs_data', [
    'url' => $url,
    'type' => $type,
    'lang' => $lang,
  ]);

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

  $response = rest_api_seo_with_language($lang, function () use ($url, $type, $lang) {
    $breadcrumbs = [];

    $home_url = function_exists('icl_object_id')
      ? apply_filters('wpml_home_url', home_url('/'))
      : home_url('/');

    $breadcrumbs[] = [
      'text' => __('Главная', 'branded'),
      'url'  => $home_url,
    ];

    switch ($type) {
      case 'product':
        $resolved_id = resolve_post_id_from_request($url, $type, $lang);
        if (!$resolved_id) {
          return new WP_Error('not_found', 'Product not found', ['status' => 404]);
        }

        $product = wc_get_product($resolved_id);
        if (!$product) {
          return new WP_Error('not_found', 'Product not found', ['status' => 404]);
        }

        $categories = get_the_terms($resolved_id, 'product_cat');
        if ($categories && !is_wp_error($categories)) {
          $category_chain = build_category_chain($categories, $lang);
          $breadcrumbs = array_merge($breadcrumbs, $category_chain);
        }

        $breadcrumbs[] = [
          'text' => $product->get_title(),
          'url'  => null,
        ];
        break;

      case 'category':
        $category_slug = clean_url_slug($url);
        $term = find_term_by_slug_any_lang($category_slug, 'product_cat');
        if (!$term) {
          return new WP_Error('not_found', 'Category not found', ['status' => 404]);
        }

        if (function_exists('icl_object_id')) {
          $translated_id = apply_filters('wpml_object_id', $term->term_id, 'product_cat', true, $lang);
          if ($translated_id) {
            $term = get_term($translated_id, 'product_cat');
          }
        }

        if ($term->parent) {
          $ancestors = get_ancestors($term->term_id, 'product_cat', 'taxonomy');
          $ancestors = array_reverse($ancestors);
          foreach ($ancestors as $ancestor_id) {
            $ancestor = get_term($ancestor_id, 'product_cat');
            if ($ancestor && !is_wp_error($ancestor)) {
              $breadcrumbs[] = [
                'text' => $ancestor->name,
                'url'  => get_term_link($ancestor),
              ];
            }
          }
        }

        $breadcrumbs[] = [
          'text' => $term->name,
          'url'  => null,
        ];
        break;

      case 'brand':
        $brand_slug = clean_url_slug($url);
        $term = find_term_by_slug_any_lang($brand_slug, 'pa_brand');
        if ($term) {
          if (function_exists('icl_object_id')) {
            $translated_id = apply_filters('wpml_object_id', $term->term_id, 'pa_brand', true, $lang);
            if ($translated_id) {
              $term = get_term($translated_id, 'pa_brand');
            }
          }
          $breadcrumbs[] = [
            'text' => $term->name,
            'url'  => null,
          ];
        }
        break;

      case 'page':
        $resolved_id = resolve_post_id_from_request($url, $type, $lang);
        if ($resolved_id) {
          $ancestors = get_post_ancestors($resolved_id);
          $ancestors = array_reverse($ancestors);
          foreach ($ancestors as $ancestor_id) {
            if (function_exists('icl_object_id')) {
              $ancestor_id = apply_filters('wpml_object_id', $ancestor_id, 'page', true, $lang);
            }
            $breadcrumbs[] = [
              'text' => get_the_title($ancestor_id),
              'url'  => get_permalink($ancestor_id),
            ];
          }

          $breadcrumbs[] = [
            'text' => get_the_title($resolved_id),
            'url'  => null,
          ];
        }
        break;
    }

    return [
      'breadcrumbs' => $breadcrumbs,
      'schema' => build_breadcrumb_schema($breadcrumbs),
    ];
  });

  if (!is_wp_error($response)) {
    wp_cache_set($cache_key, $response, 'rest_api', 6 * HOUR_IN_SECONDS);
  }

  return $response;
}

function build_category_chain($categories, $lang) {
  $child_category = null;
  $parent_category = null;

  foreach ($categories as $cat) {
    if ($cat->parent) {
      $child_category = $cat;
    } else {
      $parent_category = $cat;
    }
  }

  $chain = [];

  if ($child_category) {
    $ancestors = get_ancestors($child_category->term_id, 'product_cat', 'taxonomy');
    $ancestors = array_reverse($ancestors);

    foreach ($ancestors as $ancestor_id) {
      if (function_exists('icl_object_id')) {
        $ancestor_id = apply_filters('wpml_object_id', $ancestor_id, 'product_cat', true, $lang);
      }
      $ancestor = get_term($ancestor_id, 'product_cat');
      if ($ancestor && !is_wp_error($ancestor)) {
        $chain[] = [
          'text' => $ancestor->name,
          'url'  => get_term_link($ancestor),
        ];
      }
    }

    if (function_exists('icl_object_id')) {
      $translated_id = apply_filters('wpml_object_id', $child_category->term_id, 'product_cat', true, $lang);
      if ($translated_id) {
        $child_category = get_term($translated_id, 'product_cat');
      }
    }

    $chain[] = [
      'text' => $child_category->name,
      'url'  => get_term_link($child_category),
    ];
  } elseif ($parent_category) {
    if (function_exists('icl_object_id')) {
      $translated_id = apply_filters('wpml_object_id', $parent_category->term_id, 'product_cat', true, $lang);
      if ($translated_id) {
        $parent_category = get_term($translated_id, 'product_cat');
      }
    }

    $chain[] = [
      'text' => $parent_category->name,
      'url'  => get_term_link($parent_category),
    ];
  }

  return $chain;
}

function build_breadcrumb_schema($breadcrumbs) {
  $items = [];

  foreach ($breadcrumbs as $index => $crumb) {
    $item = [
      '@type'    => 'ListItem',
      'position' => $index + 1,
      'name'     => $crumb['text'],
    ];

    if (!empty($crumb['url'])) {
      $item['item'] = $crumb['url'];
    }

    $items[] = $item;
  }

  return [
    '@context'        => 'https://schema.org',
    '@type'           => 'BreadcrumbList',
    'itemListElement' => $items,
  ];
}
