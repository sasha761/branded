<?php
/* Template Name: Sale page
 * Template Post Type: post, page, product
 */


$context = Timber::context();

$context['post'] = Timber::get_post();
  
global $wp_query; 
$product_ids_on_sale = wc_get_product_ids_on_sale();
$args = array (
    'posts_per_page'   => 16,
    'paged' => get_query_var('paged') ?: 1,
    'post_status' => 'publish',
    'post_type' => 'product',
    // 'meta_query' => $meta_query,
    'post__in' => array_merge( array( 0 ), $product_ids_on_sale )
);
$wp_query = new WP_Query($args);

$context['products'] = $wp_query;

$args_paginate = [
  'show_all'     => False,
  'end_size'     => 1,
  'mid_size'     => 2,
  'prev_next'    => false,
  'type'         => 'array',
  'add_args'     => False,
  'add_fragment' => '',
  'before_page_number' => '',
  'after_page_number'  => ''
]; 

$context['pagination'] =  paginate_links($args_paginate);

Timber::render( array( 'templates/woo/archive-sale.twig' ), $context );