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
      ],
    ],
  ]);
});

function get_products($data) {
  $offset = $data['offset'] ? $data['offset'] : 0;
  $url = $data['url'];
  $page = $data['page'];
  $slug = $data['slug'];
  $lang = $data['lang'];


  $url_pages = explode("/", $url)[1];
  $url_pages_value = explode("/", $url)[2];

  // $category = get_product_category_by_slug($url);
  // var_dump($category);
  // if ($category && function_exists('icl_object_id')) {
  //   var_dump(function_exists('icl_object_id'));
  //   $category_id = apply_filters('wpml_object_id', $category->term_id, 'product_cat', true, $lang);
  //   $category = get_term($category_id, 'product_cat');
  // }
  
  $url_parts = parse_url($url, PHP_URL_QUERY);

  if (!empty($url_parts)) {
    parse_str($url_parts, $query_params);
  }

  $tax_query = [];
  $i = 0;

  if (!empty($query_params)) {
    foreach ($query_params as $key => $value) {
      if ($key !== 'orderby' && $key !== 'page') {
        $filter = '';
        $i++;
        if ($value !== '' || !empty($value)) {
          $tax_query[$i] = array(
            'taxonomy'        => 'pa_' .  $key,
            'field'           => 'slug',
            'terms'           => $value,
            'operator'        => 'IN'
          );
        }
      }
    }
  }

  if ($url_pages === 'brand' || $url_pages === 'size' || $url_pages === 'color') {
    $tax_query[$i++] = array(
      'taxonomy'        => 'pa_' . $url_pages,
      'field'           => 'slug',
      'terms'           => $url_pages_value,
      'operator'        => 'IN'
    );
  }

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
        $meta_key = '';
        $order = 'desc';
        $orderby = 'date';
    }
  } else {
    $meta_key = '';
    $order = 'desc';
    $orderby = 'date';
  }

  $number_posts = 16;

  if ($slug && function_exists('icl_object_id')) {
    // Получаем категорию по slug
    $category = get_term_by('slug', $slug, 'product_cat');

    
    if ($category) {
        // Применяем WPML фильтр к ID категории
        $category_id = apply_filters('wpml_object_id', $category->term_id, 'product_cat', true, $lang);

        if ($category_id) {
            // Получаем slug категории на нужном языке
            $translated_category = get_term($category_id, 'product_cat');
            $slug = $translated_category ? $translated_category->slug : $slug;

            // var_dump($slug);
        }
    }
  }

  // Учитываем язык для категории
  // if ($slug && function_exists('icl_object_id')) {
  //   $category_id = apply_filters('wpml_object_id', $slug, 'product_cat', true, $lang);
  //   // var_dump($category_id);
  //   $slug = get_term($category_id, 'product_cat')->slug;
  // }

  // var_dump($slug);

  $args = [
    'post_type' => 'product',
    'post_status' => 'publish',
    'posts_per_page'   => $number_posts,
    'paged' => $page,
    'orderby' => $orderby,
    'order' => $order,
    'meta_key' => $meta_key,
    'offset' => $offset,
    'product_cat' => $slug,
    'suppress_filters' => false,
  ];

  if (count($tax_query) > 0) {
    $args['tax_query'] = array('relation' => 'AND', $tax_query);
  }

  if (function_exists('icl_object_id')) {
    $args['lang'] = $lang;

  }
  
  $query = new WP_Query($args);
  $posts = $query->posts;

  $response = [];
  
  $response['product_cat'] = $slug ? get_category_details_by_slug($slug) : null;
  // $response['link'] = apply_filters('wpml_permalink', home_url("/product/{$product_slug}"), $lang);
  // $response['link'] = get_permalink();

  if(!empty($posts)) {
    $response['status'] = 'ok';
    $response['products_count'] = $query->found_posts;

    foreach($posts as $key => $post) {
      $post_id = function_exists('icl_object_id') ? apply_filters('wpml_object_id', $post->ID, 'product', true, $lang) : $post->ID;
      $product = wc_get_product($post_id);
      $response['products'][$key] = get_product_short_info($product, $post_id);
    }
  } else {
    $response['status'] = 'nomore';
  }

  return $response;
}
