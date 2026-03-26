<?php

// Регистрируем кастомный эндпоинт для поиска
add_action('rest_api_init', function () {
  register_rest_route('api/search', '/search', [
    'methods'  => 'POST',
    'callback' => 'custom_search_endpoint',
    'permission_callback' => '__return_true', // Открытый доступ
    'args'     => [
      'query' => [
        'required' => true
      ],
      'lang' => [
        'required' => false,
        'default' => 'ru'
      ],
      'posts_per_page' => [
        'required' => false,
        'default' => 7
      ],
      'page' => [
        'required' => false,
        'default' => 1
      ],
      'offset' => [
        'required' => false,
        'default' => null
      ]
    ]
  ]);
});

function custom_search_endpoint(WP_REST_Request $request) {
  // global $wpdb;

  $query = sanitize_text_field($request->get_param('query'));
  $lang  = sanitize_text_field($request->get_param('lang'));
  $posts_per_page = intval($request->get_param('posts_per_page'));
  $page = max(1, intval($request->get_param('page')));
  $offset = $request->get_param('offset');

  if (!$lang) {
      $lang = apply_filters('wpml_current_language', NULL);
  }

  if (mb_strlen($query) < 3) {
      return new WP_Error('search_error', 'Введите минимум 3 символа', ['status' => 400]);
  }

  $args = [
    'post_type'      => 'product',
    's'              => $query,
    'posts_per_page' => $posts_per_page,
    'post_status'    => 'publish',
  ];

  if ($offset !== null) {
    $args['offset'] = max(0, intval($offset));
  } else {
    $args['paged'] = $page;
  }

  add_filter('post_search_columns', function($search_columns) {
      return ['post_title'];
  });

  $search_query = new WP_Query($args);
  $posts = $search_query->posts;

  $total = $search_query->found_posts;
  $total_pages = $posts_per_page > 0 ? intval($search_query->max_num_pages) : 1;

  $response = [
    'products_count' => $total,
    'total_pages'    => $total_pages,
    'current_page'   => $page,
    'per_page'       => $posts_per_page,
    'products'       => [],
  ];

  if (!empty($posts)) {
    foreach ($posts as $key => $post) {
      $post_id = function_exists('icl_object_id') ? apply_filters('wpml_object_id', $post->ID, 'product', true, $lang) : $post->ID;
      $product = wc_get_product($post_id);
      $response['products'][$key] = get_product_short_info($product, $post_id);
    }
  }

  return $response;
}


// function custom_search_endpoint(WP_REST_Request $request) {
//     global $wpdb;

//     $query = sanitize_text_field($request->get_param('query'));
//     $lang  = sanitize_text_field($request->get_param('lang'));

//     if (!$lang) {
//         $lang = apply_filters('wpml_current_language', NULL);
//     }

//     if (mb_strlen($query) < 3) {
//         return new WP_Error('search_error', 'Введите минимум 3 символа', ['status' => 400]);
//     }
    
//     // Запрос только по заголовку (title) напрямую через SQL для оптимизации
//     $sql = $wpdb->prepare("
//         SELECT DISTINCT p.ID 
//         FROM {$wpdb->posts} p
//         LEFT JOIN {$wpdb->prefix}icl_translations t 
//             ON p.ID = t.element_id 
//             AND t.element_type = 'post_product'
//         WHERE p.post_type = 'product' 
//         AND p.post_status = 'publish'
//         AND p.post_title LIKE %s
//         AND (t.language_code = %s OR t.language_code IS NULL)
//         ORDER BY p.post_date DESC
//         LIMIT 7
//     ", '%' . $wpdb->esc_like($query) . '%', $lang);


//     $product_ids = $wpdb->get_col($sql);

//     $response = [];

//     if (!empty($product_ids)) {
//         foreach ($product_ids as $post_id) {
//             if (function_exists('icl_object_id')) {
//                 $post_id = apply_filters('wpml_object_id', $post_id, 'product', true, $lang);
//             }
//             $product = wc_get_product($post_id);
//             $response[] = get_product_short_info($product, $post_id);
//         }
//     }

//     return $response;
// }