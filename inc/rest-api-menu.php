<?php

add_action('rest_api_init', function () {
  $namespace = '/api/menu';

  register_rest_route($namespace, '/get_menu_header', [
    'methods' => 'GET',
    'callback' => 'get_menu_header',
    'permission_callback' => '__return_true',
    'args' => [
      'lang' => [
        'required' => false,
        'type' => 'string',
      ],
    ],
  ]);

  register_rest_route($namespace, '/get_menu_footer', [
    'methods' => 'GET',
    'callback' => 'get_menu_footer',
    'permission_callback' => '__return_true',
    'args' => [
      'lang' => [
        'required' => false,
        'type' => 'string',
      ],
    ],
  ]);

  register_rest_route($namespace, '/get_menu_mobile', [
    'methods' => 'GET',
    'callback' => 'get_menu_mobile',
    'permission_callback' => '__return_true',
    'args' => [
      'lang' => [
        'required' => false,
        'type' => 'string',
      ],
    ],
  ]);

  register_rest_route($namespace, '/languages', [
    'methods' => 'GET',
    'callback' => 'get_languages',
    'permission_callback' => '__return_true',
    'args' => [
      'lang' => [
        'required' => false,
        'type' => 'string',
      ],
      'url' => [
        'required' => false,
        'type' => 'string',
      ],
    ],
  ]);
});

function process_menu_item($items, $parent_id = 0) {
  $submenu = [];

  foreach ($items as $item) {
    if ((int) $item->menu_item_parent === (int) $parent_id) {
      $image = get_field('image', $item->ID);
      $image_data = null;

      if ($image) {
        $resized_image_url = get_resized_image_url($image['url'], 180, 180, 'center', 'thumbnail');

        $image_data = [
          'url'   => $resized_image_url,
          'title' => $image['title'] ?? null,
          'alt'   => $image['alt'] ?? null,
        ];
      }

      $raw_url = is_string($item->url) ? trim($item->url) : '';
      $absolute_url = rest_api_menu_make_absolute_url($raw_url);

      $submenu[] = [
        'title'   => $item->title,
        'url'     => rest_api_to_frontend_url($absolute_url),
        'path'    => rest_api_to_path($absolute_url),
        // 'slug'    => rest_api_to_path($absolute_url), // можно оставить для обратной совместимости
        'image'   => $image_data,
        'submenu' => process_menu_item($items, $item->ID),
      ];
    }
  }

  return $submenu;
}

function get_menu($slug, $lang = 'ru') {
  $menu_locations = get_nav_menu_locations();
  if (!isset($menu_locations[$slug])) {
    return [];
  }

  $menu_id = $menu_locations[$slug];

  if (function_exists('icl_object_id') && !empty($lang)) {
    $translated_menu_id = apply_filters('wpml_object_id', $menu_id, 'nav_menu', true, $lang);
    if ($translated_menu_id) {
      $menu_id = $translated_menu_id;
    }
  }

  $menu_items = wp_get_nav_menu_items($menu_id);
  if (empty($menu_items)) {
    return [];
  }

  return process_menu_item($menu_items);
}

function rest_api_menu_get_cache_version() {
  $version = wp_cache_get('menu_cache_version', 'rest_api_meta');

  if ($version === false) {
    $version = 1;
    wp_cache_set('menu_cache_version', $version, 'rest_api_meta');
  }

  return (string) $version;
}

function rest_api_menu_build_cache_key($endpoint, $lang = 'ru', array $context = []) {
  $payload = [
    'version' => rest_api_menu_get_cache_version(),
    'endpoint' => $endpoint,
    'lang' => $lang,
    'context' => $context,
  ];

  return 'rest_api:' . md5(wp_json_encode($payload));
}

function rest_api_menu_make_absolute_url($url) {
  if (!is_string($url) || $url === '') {
    return '';
  }

  if (preg_match('#^https?://#i', $url)) {
    return $url;
  }

  return home_url('/' . ltrim($url, '/'));
}

function rest_api_menu_normalize_source_url($url) {
  $url = is_string($url) ? trim($url) : '';

  if ($url === '') {
    return '';
  }

  $absolute_url = rest_api_menu_make_absolute_url($url);
  $home_host = wp_parse_url(home_url(), PHP_URL_HOST);
  $url_host = wp_parse_url($absolute_url, PHP_URL_HOST);

  if ($home_host && $url_host && strcasecmp($home_host, $url_host) !== 0) {
    return '';
  }

  return esc_url_raw($absolute_url);
}

function get_cache_langs() {
  $langs = ['ru'];

  if (function_exists('icl_get_languages')) {
    $languages = icl_get_languages('skip_missing=0');
    if (!empty($languages)) {
      $langs = array_keys($languages);
    }
  }

  return $langs;
}

function rest_api_menu_resolve_lang($lang = '') {
  $lang = sanitize_key((string) $lang);
  $langs = get_cache_langs();

  if ($lang !== '' && in_array($lang, $langs, true)) {
    return $lang;
  }

  $current_lang = sanitize_key((string) apply_filters('wpml_current_language', null));
  if ($current_lang !== '' && in_array($current_lang, $langs, true)) {
    return $current_lang;
  }

  return $langs[0] ?? 'ru';
}

function get_menu_header($data) {
  $lang = rest_api_menu_resolve_lang($data['lang'] ?? 'ru');
  $cache_key = rest_api_menu_build_cache_key('menu_header', $lang);

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

  $menu = get_menu('menu-1', $lang);
  wp_cache_set($cache_key, $menu, 'rest_api', DAY_IN_SECONDS);

  return $menu;
}

function get_menu_footer($data) {
  $lang = rest_api_menu_resolve_lang($data['lang'] ?? 'ru');
  $cache_key = rest_api_menu_build_cache_key('menu_footer', $lang);

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

  $menu = get_menu('menu-2', $lang);
  wp_cache_set($cache_key, $menu, 'rest_api', DAY_IN_SECONDS);

  return $menu;
}

function get_menu_mobile($data) {
  $lang = rest_api_menu_resolve_lang($data['lang'] ?? 'ru');
  $cache_key = rest_api_menu_build_cache_key('menu_mobile', $lang);

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

  $menu = [
    'man' => get_menu('menu-3', $lang),
    'woman' => get_menu('menu-4', $lang),
  ];

  wp_cache_set($cache_key, $menu, 'rest_api', DAY_IN_SECONDS);

  return $menu;
}

function get_languages($data) {
  $current_lang = rest_api_menu_resolve_lang($data['lang'] ?? '');
  $source_url = rest_api_menu_normalize_source_url($data['url'] ?? '');
  $cache_key = rest_api_menu_build_cache_key('languages', $current_lang, [
    'url' => $source_url,
  ]);

  $cached = wp_cache_get($cache_key, 'rest_api');
  if ($cached !== false) {
    return $cached;
  }

  if (function_exists('icl_get_languages')) {
    $previous_lang = sanitize_key((string) apply_filters('wpml_current_language', null));
    $restore_lang = $previous_lang !== '' ? $previous_lang : null;

    global $sitepress;
    if ($current_lang !== $restore_lang) {
      if (isset($sitepress) && method_exists($sitepress, 'switch_lang')) {
        $sitepress->switch_lang($current_lang);
      } else {
        do_action('wpml_switch_language', $current_lang);
      }
    }

    try {
      $languages = icl_get_languages('skip_missing=0');

      if (!empty($languages)) {
        foreach ($languages as $code => &$language) {
          if ($source_url !== '') {
            $translated_url = apply_filters('wpml_permalink', $source_url, $code);

            if (is_string($translated_url) && $translated_url !== '') {
              $language['url'] = esc_url_raw(
                rest_api_to_frontend_url($translated_url)
              );

              $language['path'] = rest_api_to_path($translated_url);
            }
          } elseif (!empty($language['url'])) {
            $absolute_url = rest_api_menu_make_absolute_url($language['url']);

            $language['url'] = esc_url_raw(
              rest_api_to_frontend_url($absolute_url)
            );

            $language['path'] = rest_api_to_path($absolute_url);
          }

          $language['active'] = ($code === $current_lang) ? 1 : 0;
        }
      }

      $result = [
        'current_lang' => $current_lang,
        'languages' => $languages ?: [],
      ];

      wp_cache_set($cache_key, $result, 'rest_api', DAY_IN_SECONDS);

      return $result;
    } finally {
      if ($current_lang !== $restore_lang) {
        if (isset($sitepress) && method_exists($sitepress, 'switch_lang')) {
          $sitepress->switch_lang($restore_lang);
        } else {
          do_action('wpml_switch_language', $restore_lang);
        }
      }
    }
  }

  return [
    'current_lang' => $current_lang,
    'languages' => [],
  ];
}

function clear_menu_cache(...$args) {
  wp_cache_set('menu_cache_version', microtime(true), 'rest_api_meta');
}

add_action('wp_update_nav_menu', 'clear_menu_cache');
add_action('wp_update_nav_menu_item', 'clear_menu_cache', 10, 3);
add_action('edit_attachment', 'clear_menu_cache');
add_action('delete_attachment', 'clear_menu_cache', 10, 2);
