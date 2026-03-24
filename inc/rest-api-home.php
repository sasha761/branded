<?php

add_action( 'rest_api_init', function () {
  $namespace = '/api/home';
  register_rest_route( $namespace, '/get_home_info', [
    'methods' => 'GET',
    'callback' => 'get_home_info',
    'permission_callback' => '__return_true',
    'args' => [
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
    ],
  ]);
});

function get_home_info(WP_REST_Request $request) {
  $lang = sanitize_key($request->get_param('lang') ?: 'ru');
  $cache_key = 'home_info_' . $lang;

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

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

  wp_cache_set($cache_key, $context, 'rest_api', DAY_IN_SECONDS);
  return $context;
}

function clear_home_cache(...$args) {
  $langs = function_exists('get_cache_langs') ? get_cache_langs() : ['ru'];
  foreach ($langs as $lang) {
    wp_cache_delete('home_info_' . $lang, 'rest_api');
  }
}

function clear_home_cache_on_product_terms($object_id, $terms, $tt_ids, $taxonomy) {
  if (get_post_type($object_id) !== 'product') {
    return;
  }

  if ($taxonomy !== 'product_cat' && strpos($taxonomy, 'pa_') !== 0) {
    return;
  }

  clear_home_cache();
}

add_action('save_post_page', 'clear_home_cache');
add_action('save_post_product', 'clear_home_cache');
add_action('save_post_product_variation', 'clear_home_cache');
add_action('acf/save_post', 'clear_home_cache');
add_action('woocommerce_update_product', 'clear_home_cache');
add_action('woocommerce_update_product_variation', 'clear_home_cache');
add_action('woocommerce_product_set_stock_status', 'clear_home_cache');
add_action('woocommerce_variation_set_stock_status', 'clear_home_cache');
add_action('set_object_terms', 'clear_home_cache_on_product_terms', 10, 4);

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
    $translated_post_id = apply_filters('wpml_object_id', $post->ID, 'product', true, $lang);

    if (!$translated_post_id) continue;
    
    $product = wc_get_product($translated_post_id);

    if ($product) {
      $products[$key] = get_product_short_info($product, $translated_post_id);
    }
  }

  return $products;
}
