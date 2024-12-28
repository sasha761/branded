<?php
function get_product_id_by_slug($product_slug) {
  $product = get_page_by_path($product_slug, OBJECT, 'product');
  if ($product) {
    return $product->ID;
  } else {
    return new WP_REST_Response('Product not found', 404);
  }
}

add_action( 'rest_api_init', function () {
  register_rest_route('/api/product', '/get_single_product', [
    'methods' => 'GET',
    'callback' => 'get_single_product',
    'args' => [
      'lang' => [
        'required' => false,
        'default' => 'ru',
      ],
    ]
  ]);
});

function get_single_product($data) {
	$page_id = get_product_id_by_slug($data['url']);
  
  $id = apply_filters( 'wpml_object_id', $page_id, 'product', true, $data['lang'] );


  $product  = wc_get_product($id);
  $response = get_product_short_info($product, $id);

  // все что ниже на отложенный запрос !
  $sku             = $product->get_sku() || $id; 
  $brand           = wc_get_product_terms($id, 'pa_brand', array()); 
  $categories      = get_the_terms( $id, 'product_cat' );
  $categories_arr  = [];
  $categories_str  = '';

  foreach ($categories as $key => $category) {
    if ($category->parent) {
      if ($key == 0) $key = $key + 1;
      $categories_arr[$key] = $category->name;
    } else {
      $categories_arr[0] = $category->name;
    }
  }
  ksort($categories_arr);

  $categories_str = implode(", ", $categories_arr);
  $response['categories_str'] = $categories_str;

  $response['product_info'] = get_field('product_info', $brand[0]);

  $response['product_info']['specification'] = 
    "<p><b>Бренд:</b> {$brand[0]->name}</p>
    <p><b>Категория:</b> {$categories_str}</p>
    <p><b>Артикул:</b> {$sku}</p>
    <p><b>Наличие:</b> {$response['stockStatus']}</p>
    <p><b>Доставка:</b> Отправка завтра</p>";

  $response['rating']       = $product->get_average_rating();
  $response['count']        = $product->get_rating_count();
  $comments_args            = array('post_id' => $product->get_id(), 'status' => 'approve'); 
  $response['comments']     = get_comments($comments_args);
  

  wp_send_json($response);
}

add_action( 'rest_api_init', function () {
  register_rest_route('/api/product', '/get_related_products', [
    'methods' => 'GET',
    'callback' => 'get_related_products'
  ]);
});

function get_related_products($data) {
  do_action('wpml_switch_language', 'uk');
  $categories       = get_the_terms( $data['id'], 'product_cat' );
  // $response['cats'] = [];
  
  $cat_ids = '';
  foreach ($categories as $key => $category) {
    if ($category->parent) {
      if ($key == 0) $key = $key + 1;
      $cat_ids = $category->term_id;
      // $response['cats'][$key] = $category->name;
    } else {
      // $response['cats'][0] = $category->name;
    }
  }
  // ksort($response['cats']);

  $posts = get_posts([
    'post_type'   => 'product',
    'posts_per_page' => 10,
    'orderby' => 'date',
    'order' => 'DESC',
    'tax_query' => [
      'relation'=>'AND',
      [
        'taxonomy'        => 'product_cat',
        'field'           => 'term_id',
        'terms'           => array($cat_ids),
        'operator'        => 'IN',
      ] 
    ],
    'suppress_filters' => false,
  ]);

  $response = [];

  if(!empty($posts)) {
    foreach($posts as $key => $post) {
      $product = wc_get_product($post->ID);
      $response['related_products'][$key] = get_product_short_info($product, $post->ID);
    }
  }
  
  wp_send_json($response);
}
