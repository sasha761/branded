<?php

add_action( 'rest_api_init', function () {
  $namespace = '/api/page';
  register_rest_route( $namespace, '/page', [
    'methods' => 'POST',
    'callback' => 'get_page_info',
    'permission_callback' => '__return_true',
    'args'     => [
      'url' => [
        'required' => true
      ],
      'lang' => [
 	     	'required' => false,
        'default' => 'ru'
      ]
    ]
  ]);
});

function get_page_info(WP_REST_Request $request) {
	$url = $request->get_param('url');
	$lang = $request->get_param('lang');

	if (!$url) {
		return new WP_Error('no_url', 'No URL provided', ['status' => 400]);
	}

	$path_parts = explode('/', trim($url, '/'));
	$language_codes = ['en', 'uk', 'ru'];

  if (in_array($path_parts[0], $language_codes)) {
    array_shift($path_parts); 
  }

  $slug = implode('/', $path_parts);


	if (function_exists('icl_object_id')) {
    global $sitepress;
    if ($sitepress) {
      $sitepress->switch_lang('all');
    }
  }

  $page = get_page_by_path($slug, OBJECT, 'page');

  if (function_exists('icl_object_id') && isset($sitepress)) {
    $sitepress->switch_lang($lang);
  }

  if ($page && function_exists('wpml_object_id_filter')) {
    $translated_page_id = wpml_object_id_filter($page->ID, 'page', true, $lang);
    $page = get_post($translated_page_id);
  }

  if (!$page) {
    return new WP_Error('no_page', 'Page not found', ['status' => 404]);
  }


	$context['page'] = [
    'ID'      => $page->ID,
    'title'   => get_the_title($page->ID),
    'content' => apply_filters('the_content', $page->post_content)
  ];

  $related_pages = get_posts([
    'post_type'      => 'page',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'posts_per_page' => -1,
    'include'        => [431, 441, 433, 435, 445],
  ]);

  $context['related_pages'] = [];

  foreach ($related_pages as $related_page) {
    if (function_exists('wpml_object_id_filter')) {
        $translated_id = wpml_object_id_filter($related_page->ID, 'page', true, $lang);
        $related_page = get_post($translated_id);
    }

    // Создаём новый объект с нужными данными
    $context['related_pages'][] = (object) [
        'ID'    => $related_page->ID,
        'title' => get_the_title($related_page->ID),
        'link' => rest_api_to_frontend_url(get_the_permalink($related_page->ID)),
        'path' => rest_api_to_path(get_the_permalink($related_page->ID)),
    ];
	}

  return $context;
}