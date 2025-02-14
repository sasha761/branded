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
  register_rest_route( $namespace, '/get_products', [
    'methods' => 'GET',
    'callback' => 'get_products',
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

function get_products(WP_REST_Request $request) {
  $offset = $request->get_param('offset') ?? 0;
  $url = $request->get_param('url');
  $page = $request->get_param('page');
  $slug = $request->get_param('slug');
  $lang = $request->get_param('lang');
  // $search_query = $request->get_param('s');


  $url_parts = explode('/', trim($url, '/'));
  $url_pages = ($url_parts[0] == 'brand') ? $url_parts[0] : (($url_parts[1] == 'brand') ? $url_parts[1] : null);
  $url_pages_value = ($url_parts[0] == 'brand') ? $url_parts[1] : (($url_parts[1] == 'brand') ? $url_parts[2] : null);

  $args = [];
  $query_params = [];
  if ($query_string = parse_url($url, PHP_URL_QUERY)) {
    parse_str($query_string, $query_params);
  }


  if ($url_pages === 'brand' && !empty($url_pages_value)) {
    $brand_slug = $url_pages_value;

    // Применяем WPML для перевода бренда
    if (function_exists('icl_object_id')) {
      $brand_term = get_term_by('slug', $brand_slug, 'pa_brand');
      if ($brand_term) {
        $translated_brand_id = apply_filters('wpml_object_id', $brand_term->term_id, 'pa_brand', true, $lang);
        $translated_brand = get_term($translated_brand_id, 'pa_brand');
        if ($translated_brand) {
          $brand_slug = $translated_brand->slug;
        }
      }
    }

    $tax_query[] = [
      'taxonomy' => 'pa_brand',
      'field'    => 'slug',
      'terms'    => $brand_slug,
      'operator' => 'IN',
    ];
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

  $tax_query = [];
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

  $response = [];

  if (!empty($posts)) {
    $response['products_count'] = $query->found_posts;

    foreach ($posts as $key => $post) {
      $post_id = function_exists('icl_object_id') ? apply_filters('wpml_object_id', $post->ID, 'product', true, $lang) : $post->ID;
      $product = wc_get_product($post_id);
      $response['products'][$key] = get_product_short_info($product, $post_id);
    }
  } 

  return $response;
}
