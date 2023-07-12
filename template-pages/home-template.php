<?php
/* Template Name: home page
 * Template Post Type: page
 */


$context = Timber::context();


// $context['slider']             = get_field( 'slider' );
// $context['banners']            = get_field( 'banners' );

if (wp_is_mobile()) {
  $product_count = 6;
} else {
  $product_count = 6;
}
$context['product_brand']  = Timber::get_posts(array(
  'post_type'   => 'product',
  'posts_per_page' => $product_count,
  'product_cat'    => 'women/',
  'orderby' => 'date',
  'order' => 'DESC'
));

// $product_ids_on_sale = wc_get_product_ids_on_sale();
// $context['sale_products']  = Timber::get_posts(array(
//   'post_type'   => 'product',
//   'posts_per_page' => $product_count,
//   'orderby' => 'date',
//   'order' => 'DESC',
//   'post__in' => $product_ids_on_sale
// ));
$context['sale_products']  = Timber::get_posts(array(
  'post_type'   => 'product',
  'posts_per_page' => $product_count,
  'product_cat'    => 'accessories/',
  'orderby' => 'date',
  'order' => 'DESC'
));

$context['best_offers']   = get_field('best_offers');
$context['banners_group'] = get_field('banners_group');
$context['accesories']    = get_field('accesories');

Timber::render( array( 'template-home.twig', 'page.twig' ), $context );