<?php
add_action( 'rest_api_init', function () {
  $namespace = '/api/menu';
  
  register_rest_route( $namespace, '/get_menu_header', [
    'methods' => 'GET',
    'callback' => 'get_menu_header',
    'args' => [
      'lang' => [
        'required' => false,
        'type' => 'string',
      ],
    ],
  ]);

  register_rest_route( $namespace, '/get_menu_footer', [
    'methods' => 'GET',
    'callback' => 'get_menu_footer',
    'args' => [
      'lang' => [
        'required' => false,
        'type' => 'string',
      ],
    ],
  ]);

  register_rest_route( $namespace, '/get_menu_mobile', [
    'methods' => 'GET',
    'callback' => 'get_menu_mobile',
    'args' => [
      'lang' => [
        'required' => false,
        'type' => 'string',
      ],
    ],
  ]);

  register_rest_route( $namespace, '/languages', [
    'methods'  => 'GET',
    'callback' => 'get_languages',
    'args'     => [
      'url' => [
        'required' => false,
        'type'     => 'string',
      ],
    ],
  ]);
});

function process_menu_item($items, $parent_id = 0) {
  $submenu = array();
  foreach ($items as $item) {
    if ($item->menu_item_parent == $parent_id) {
    	$image = get_field('image', $item->ID);

      $image_data = null;

      if ($image) {
        $resized_image_url = get_resized_image_url($image['url'], 180, 180, 'center', 'thumbnail'); // Используем хелпер

        $image_data = [
          'url' => $resized_image_url,
          'title' => $image['title'] ?? null,
          'alt' => $image['alt'] ?? null,
        ];
      }
    	
      $url_parts = parse_url($item->url);
      $path = isset($url_parts['path']) ? $url_parts['path'] : ''; // Удаление начального и конечного слеша, если есть
            
      $submenu_item = array(
        'title' => $item->title,
        'url' => $item->url,
        'slug' => $path, 
        'image' => $image_data,
        'submenu' => process_menu_item($items, $item->ID), // Рекурсивный вызов для обработки вложенных элементов
      );
      $submenu[] = $submenu_item;
    }
  }
  return $submenu;
}

function get_menu($slug, $lang = 'ru') {
	$menu_container = [];
  $menu_locations = get_nav_menu_locations();

  if (!isset($menu_locations[$slug])) return [];

  $menu_id = $menu_locations[$slug];
  $menu_items = wp_get_nav_menu_items($menu_id);

  if (function_exists('icl_object_id') && !empty($lang)) {
    foreach ($menu_items as &$item) {
      $translated_id = apply_filters('wpml_object_id', $item->ID, 'nav_menu_item', true, $lang);
      if ($translated_id) {
        $item = wp_setup_nav_menu_item(get_post($translated_id));
      }
    }
  } 

  $formatted_menu = process_menu_item($menu_items);

  return $formatted_menu;
}


function get_menu_header($data) {
  $lang = $data['lang'] ?? 'ru';
  $menu = get_menu('menu-1', $lang);
  wp_send_json($menu);
}

function get_menu_footer($data) {
  $lang = $data['lang'] ?? 'ru';
  $menu = get_menu('menu-2', $lang);
  wp_send_json($menu);
}

function get_menu_mobile($data) {
	$lang = $data['lang'] ?? 'ru';
  $menu = [
    'man' => get_menu('menu-3', $lang),
    'woman' => get_menu('menu-4', $lang),
  ];
	wp_send_json($menu);
}

function get_languages($data) {
  $requested_lang = isset($data['lang']) ? sanitize_text_field($data['lang']) : null;

  if (function_exists('icl_get_languages')) {
    $languages = icl_get_languages('skip_missing=0');
    if (!empty($languages)) {
      foreach ($languages as &$language) {
        // Убираем лишний базовый URL
        $language['url'] = esc_url(home_url($language['url']));
      }
    }

    return [
      'current_lang' => $requested_lang ? $requested_lang : 'ru',
      'languages'    => $languages,
    ];
  }

  return [
    'current_lang' => 'ru',
    'languages'    => [],
  ];
}

