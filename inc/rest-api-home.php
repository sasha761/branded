<?php

add_action( 'rest_api_init', function () {
  $namespace = '/api/home';
  register_rest_route( $namespace, '/get_home_info', [
    'methods' => 'GET',
    'callback' => 'get_home_info',
    'args' => [
      'lang' => [
        'required' => false,
        'type' => 'string',
      ],
    ],
  ]);
});

function get_home_info($request) {
  // Получение параметра `lang` из запроса
  $lang = $request->get_param('lang') ?: 'ru'; // По умолчанию 'ru'

  // Функция для выполнения запроса с учетом языка
  $context = [];

  // Получение постов из категории "women"
  $products_brand = get_posts(array(
    'post_type'      => 'product',
    'posts_per_page' => 6,
    'product_cat'    => 'women/',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'suppress_filters' => false,
  ));

  if (!empty($products_brand)) {
    foreach ($products_brand as $key => $post) {
      // Применяем wpml_object_id для каждого ID
      $translated_post_id = apply_filters('wpml_object_id', $post->ID, 'post', true, $lang);

      // Получаем данные переведенного поста
      $translated_post = get_post($translated_post_id);
      $product = wc_get_product($translated_post->ID);

      $context['products_brand'][$key] = get_product_short_info($product, $translated_post->ID);
    }
  }

  // Получение постов из категории "accessories"
  $products_sale = get_posts(array(
    'post_type'      => 'product',
    'posts_per_page' => 6,
    'product_cat'    => 'accessories/',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'suppress_filters' => false,
  ));

  if (!empty($products_sale)) {
    foreach ($products_sale as $key => $post) {
      // Применяем wpml_object_id для каждого ID
      $translated_post_id = apply_filters('wpml_object_id', $post->ID, 'post', true, $lang);

      // Получаем данные переведенного поста
      $translated_post = get_post($translated_post_id);
      $product = wc_get_product($translated_post->ID);

      $context['products_sale'][$key] = get_product_short_info($product, $translated_post->ID);
    }
  }

  // Получение полей ACF с учетом языка
  $ID = apply_filters('wpml_object_id', get_option('page_on_front'), 'page', true, $lang);

  $best_offers = get_field('best_offers', $ID);
  if (!empty($best_offers)) {
    foreach ($best_offers as $key => $post) {
      $product = wc_get_product($post->ID);
      $context['best_offers'][$key] = get_product_short_info($product, $post->ID);
    }
  }

  $context['banners_group'] = get_field('banners_group', $ID);
  $context['accesories']    = get_field('accesories', $ID);

  return $context;
}