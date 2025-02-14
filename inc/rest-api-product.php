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
    'callback' => 'get_related_products',
    'args'     => [
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
      'id' => [
        'required' => true,
      ],
    ],
  ]);
});

function get_related_products($data) {
  $lang = $data['lang'];
  $id = $data['id'];

  $product_id = apply_filters('wpml_object_id', $id, 'product', true, $lang);
  if (!$product_id) return; 

  $categories = get_the_terms($product_id, 'product_cat');
  if (empty($categories) || is_wp_error($categories)) return;
  

  $selected_category_id = null;

  foreach ($categories as $category) {
    $translated_category_id = apply_filters('wpml_object_id', $category->term_id, 'product_cat', true, $lang);

    if ($category->parent) {
      // Приоритет — дочерняя категория
      $selected_category_id = $translated_category_id ?: $category->term_id;
      break; // Как только найдена дочерняя категория, выходим из цикла
    } elseif (!$selected_category_id) {
      // Запоминаем родительскую, если дочерняя ещё не найдена
      $selected_category_id = $translated_category_id ?: $category->term_id;
    }
  }

  $args = [
    'post_type'   => 'product',
    'posts_per_page' => 10,
    'orderby' => 'date',
    'order' => 'DESC',
    'suppress_filters' => true,
  ];

  
  if (!empty($selected_category_id)) {
    $tax_query = [
      'taxonomy'        => 'product_cat',
      'field'           => 'term_id',
      'terms'           => [$selected_category_id],
      'operator'        => 'IN',
    ];
    $args['tax_query'] = array('relation' => 'AND', $tax_query);
  }

  $posts = get_posts($args);

  $response = [];

  if(!empty($posts)) {
    foreach($posts as $key => $post) {
      $product = wc_get_product($post->ID);
      $response['related_products'][$key] = get_product_short_info($product, $post->ID);
    }
  }
  
  return $response;
}
