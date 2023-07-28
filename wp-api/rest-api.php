<?php
add_action( 'rest_api_init', function () {
  $namespace = '/api/archive';
  register_rest_route( $namespace, '/get_products', [
    'methods' => 'GET, POST',
    'callback' => 'get_products_feed'
  ]);
});

function get_products_feed() {

  $posts = get_posts( array(
    'post_type'   => 'product',
    'posts_per_page' => 16,
    'post_status' => 'publish',
    'orderby'     => 'date',
    'order'       => 'DESC',
    'meta_key'    => '',
    'meta_value'  => '',
    'suppress_filters' => false,
    'tax_query' => array(
      array(
        'taxonomy' => 'product_cat',  
        'field' => 'term_id',  
        'terms' => array(17),
        'operator' => 'IN'
      )
    )
  ) );

  $post_info = [];

  foreach($posts as $key => $post) {
    $product = wc_get_product($post->ID);
    $post_info[$key]['post_id'] = $post->ID; 
    $post_info[$key]['post_title'] = $post->post_title; 
    $post_info[$key]['post_link'] = get_permalink($post->ID); 
    $post_info[$key]['post_price'] = $product->get_price(); 
    $post_info[$key]['post_img_xl'] = get_the_post_thumbnail_url($post->ID, 'archive_xl'); 
    $post_info[$key]['post_img_md'] = get_the_post_thumbnail_url($post->ID, 'archive_md'); 
  }

  echo json_encode($post_info);

  // var_dump($post_info);
}