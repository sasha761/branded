<?php

add_action( 'rest_api_init', function () {
  $namespace = '/api/home';
  register_rest_route( $namespace, '/get_home_info', [
    'methods' => 'GET',
    'callback' => 'get_home_info'
  ]);
});

function get_home_info($request) {
  $products_brand = get_posts(array(
    'post_type'   => 'product',
    'posts_per_page' => 6,
    'product_cat'    => 'women/',
    'orderby' => 'date',
    'order' => 'DESC'
  ));

  if(!empty($products_brand)) {
    foreach($products_brand as $key => $post) {
      $product = wc_get_product($post->ID);
      $context['products_brand'][$key] = get_product_short_info($product, $post->ID);
    }
  } 

  $products_sale = get_posts(array(
    'post_type'   => 'product',
    'posts_per_page' => 6,
    'product_cat'    => 'accessories/',
    'orderby' => 'date',
    'order' => 'DESC'
  ));

  if(!empty($products_sale)) {
    foreach($products_sale as $key => $post) {
      $product = wc_get_product($post->ID);
      $context['products_sale'][$key] = get_product_short_info($product, $post->ID);
    }
  } 

  $ID = get_option('page_on_front');

  $best_offers = get_field('best_offers', $ID);
  if(!empty($best_offers)) {
    foreach($best_offers as $key => $post) {
      $product = wc_get_product($post->ID);
      $context['best_offers'][$key] = get_product_short_info($product, $post->ID);
    }
  } 

  $context['banners_group'] = get_field('banners_group', $ID);
  $context['accesories']    = get_field('accesories', $ID);

  wp_send_json($context);
}