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
    'methods'  => 'GET',
    'callback' => 'get_single_product',
    'args'     => [
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
      'url' => [
        'required' => true,
      ],
    ],
  ]);
});

function get_single_product($data) {
  $lang = $data['lang'];
  $url = $data['url'];

  // Получаем ID продукта на основе переданного URL
  $page_id = get_product_id_by_slug($url);
  
  $id = apply_filters('wpml_object_id', $page_id, 'product', true, $lang);
  if (!$id) return new WP_Error('not_found', 'Продукт не найден', ['status' => 404]);
  

  $product  = wc_get_product($id);
  if (!$product) return new WP_Error('not_found', 'Продукт не найден', ['status' => 404]);
  

  $response = get_product_short_info($product, $id);

  // все что ниже на отложенный запрос !
  $response['categories_str'] = get_product_categories($id);
  $brand = get_product_brand($id);
  $response['product_info'] = $brand ? get_field('product_info', $brand) : null;

  $sku = $product->get_sku() ? $product->get_sku() : $id;
  $response['product_info']['specification'] = 
      "<p><b>Бренд:</b> " . ($brand ? $brand->name : 'Не указан') . "</p>
      <p><b>Категория:</b> {$response['categories_str']}</p>
      <p><b>Артикул:</b> {$sku}</p>
      <p><b>Наличие:</b> {$response['stockStatus']}</p>
      <p><b>Доставка:</b> Отправка завтра</p>";

  $response['rating'] = $product->get_average_rating();
  $response['count'] = $product->get_rating_count();
  $comments_args = [
      'post_id' => $product->get_id(),
      'status' => 'approve',
  ];
  $response['comments'] = get_comments($comments_args);
  

  return $response;
}

add_action( 'rest_api_init', function () {
  register_rest_route('/api/product', '/get_related_products', [
    'methods' => 'GET',
    'callback' => 'get_related_products'
  ]);
});

function get_related_products($data) {
  // do_action('wpml_switch_language', 'uk');
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
  
  return $response;
}
