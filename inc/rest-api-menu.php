<?php
add_action( 'rest_api_init', function () {
  $namespace = '/api/menu';
  
  register_rest_route( $namespace, '/get_menu_header', [
    'methods' => 'GET',
    'callback' => 'get_menu_header'
  ]);

  register_rest_route( $namespace, '/get_menu_footer', [
    'methods' => 'GET',
    'callback' => 'get_menu_footer'
  ]);

  register_rest_route( $namespace, '/get_menu_mobile', [
    'methods' => 'GET',
    'callback' => 'get_menu_mobile'
  ]);

  register_rest_route( $namespace, '/languages', [
    'methods' => 'GET',
    'callback' => 'get_languages_info'
  ]);
});

function process_menu_item($items, $parent_id = 0) {
  $submenu = array();
  foreach ($items as $item) {
    if ($item->menu_item_parent == $parent_id) {
    	$image = get_field('image', $item->ID);

      // $image_src = wp_get_attachment_image_src($image['id'], 'thumbnail');

      // var_dump($image_src);
    	
      $url_parts = parse_url($item->url);
      $path = isset($url_parts['path']) ? $url_parts['path'] : ''; // Удаление начального и конечного слеша, если есть
            
      $submenu_item = array(
        'title' => $item->title,
        'url' => $item->url,
        'slug' => $path, 
        'image' => ['url' => $image['url'], 'title' => $image['title'], 'alt' => $image['alt']],
        'submenu' => process_menu_item($items, $item->ID), // Рекурсивный вызов для обработки вложенных элементов
      );
      $submenu[] = $submenu_item;
    }
  }
  return $submenu;
}

function get_menu($slug) {
	$menu_container = [];
  $menu_locations = get_nav_menu_locations();
  $menu_id = $menu_locations[$slug];
  $menu_items = wp_get_nav_menu_items($menu_id);
  $formatted_menu = process_menu_item($menu_items);

  return $formatted_menu;
}


function get_menu_header() {
  $menu = get_menu('menu-1');
  wp_send_json($menu);
}

function get_menu_footer() {
  $menu = get_menu('menu-2');
  wp_send_json($menu);
}

function get_menu_mobile() {
	$menu = [];
	$menu['man'] = get_menu('menu-3');
	$menu['wooman'] = get_menu('menu-4');
	wp_send_json($menu);
}


function get_languages_info($data) {
  $url = isset($data['url']) ? esc_url_raw($data['url']) : '';
  if (empty($url)) return new WP_REST_Response('Invalid URL', 400);

  $page_id = url_to_postid($url);
  if (!$page_id) return new WP_REST_Response('Page not found', 404);

  $post_type = get_post_type($page_id);
  if (!$post_type) return new WP_REST_Response('Post type not found', 404);

  $trid = apply_filters( 'wpml_element_trid', [], $page_id, 'post_' . $post_type);
  $languages = apply_filters('wpml_get_element_translations', [], $trid, 'post_' . $post_type);

  $current_language = apply_filters('wpml_current_language', NULL);

  $result = [];

  if (!empty($languages)) {
    foreach ($languages as $lang_code => $lang_data) {
      $result[] = [
        'language_code' => $lang_code,
        'url' => get_permalink($lang_data->element_id),
        'is_current' => $lang_code === $current_language ? true : false
      ];
    }
  }

  return new WP_REST_Response($result, 200);
}