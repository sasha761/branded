<?php

add_action( 'rest_api_init', function () {
  $namespace = '/api/home';
  register_rest_route( $namespace, '/get_home_info', [
    'methods' => 'GET',
    'callback' => 'get_home_info',
    'args' => [
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
    ],
  ]);
});

function get_home_info(WP_REST_Request $request) {
  $lang = $request->get_param('lang');

  $context = [];

  $context['products_brand'] = get_translated_products_by_category('women', $lang, 6);
  $context['products_sale'] = get_translated_products_by_category('accessories', $lang, 6);

  $front_page_id = apply_filters('wpml_object_id', get_option('page_on_front'), 'page', true, $lang);

  $best_offers = get_field('best_offers', $front_page_id);
  if (!empty($best_offers)) {
    foreach ($best_offers as $key => $post) {
      $product = wc_get_product($post->ID);
      $context['best_offers'][$key] = get_product_short_info($product, $post->ID);
    }
  }

  $context['banners_group'] = get_field('banners_group', $front_page_id);
  $context['accesories'] = get_field('accesories', $front_page_id);

  return $context;
}

function get_translated_products_by_category($category_slug, $lang, $limit) {
    // Получаем посты из указанной категории
  $posts = get_posts([
    'post_type'      => 'product',
    'posts_per_page' => $limit,
    'product_cat'    => $category_slug,
    'orderby'        => 'date',
    'order'          => 'DESC',
    'suppress_filters' => false,
  ]);

  // Если посты не найдены, возвращаем пустой массив
  if (empty($posts)) {
    return [];
  }

  // Формируем массив переведённых продуктов
  $products = [];
  foreach ($posts as $key => $post) {
    $translated_post_id = apply_filters('wpml_object_id', $post->ID, 'post', true, $lang);

    if (!$translated_post_id) continue;
    
    $product = wc_get_product($translated_post_id);

    if ($product) {
      $products[$key] = get_product_short_info($product, $translated_post_id);
    }
  }

  return $products;
}
