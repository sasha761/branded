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
    'callback' => 'get_products'
  ]);
});

function get_products($request) {
  $offset = $request['offset'] ? $request['offset'] : 0;
  $url = $request['url'];
  $page = $request['page'];
  $slug = $request['slug'];

  $url_pages = explode("/", $url)[1];
  $url_pages_value = explode("/", $url)[2];

  $category = get_product_category_by_slug($url);
  
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
  
  $query = new WP_Query($args);
  $posts = $query->posts;

  $response = [];
  
  $response['product_cat'] = get_category_details_by_slug($slug);
  if(!empty($posts)) {
    $response['status'] = 'ok';
    $response['products_count'] = $query->found_posts;

    foreach($posts as $key => $post) {
      $product = wc_get_product($post->ID);
      $response['products'][$key] = get_product_short_info($product, $post->ID);
    }
  } else {
    $response['status'] = 'nomore';
  }

  wp_send_json($response);
}
