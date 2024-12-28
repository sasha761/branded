<?php

add_action( 'rest_api_init', function () {
  $namespace = '/api/page';
  register_rest_route( $namespace, '/page', [
    'methods' => 'POST',
    'callback' => 'get_page_info'
  ]);
});

function get_page_info($request) {

	$url = $request->get_param('url');

	if (!$url) {
		return new WP_Error('no_url', 'No URL provided', ['status' => 400]);
	}

	$path = ltrim($url, '/');

	$page = get_page_by_path($path, OBJECT, 'page');

  $context['page'] = [
  	'ID' => $page->ID,
  	'title' => get_the_title($page->ID),
  	'content' => apply_filters('the_content', $page->post_content)
  ];

  $related_pages = get_posts(array(
		'post_type'   => 'page',
		'orderby' => 'date', 
		'order' => 'DESC', 
		'posts_per_page' => -1,
	  'include'     => array(431, 441, 433, 435, 445),
	));

	foreach ($related_pages as $key => $page) {
		$page->link = get_the_permalink($page->ID);
	}

	$context['related_pages'] = $related_pages;

  wp_send_json($context);
}