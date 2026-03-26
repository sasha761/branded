<?php

add_action('rest_api_init', function () {
  register_rest_route('/api/reviews', '/reviews', [
    'methods'  => 'POST',
    'callback' => 'get_reviews_endpoint',
    'permission_callback' => '__return_true',
    'args' => [
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
      'per_page' => [
        'required' => false,
        'default'  => 12,
      ],
      'page' => [
        'required' => false,
        'default'  => 1,
      ],
      'offset' => [
        'required' => false,
        'default'  => null,
      ],
    ],
  ]);
});

function get_reviews_endpoint(WP_REST_Request $request) {
  $lang     = sanitize_text_field($request->get_param('lang'));
  $per_page = intval($request->get_param('per_page'));
  $page     = max(1, intval($request->get_param('page')));
  $offset   = $request->get_param('offset');

  if (!$lang) {
    $lang = apply_filters('wpml_current_language', null);
  }

  $args = [
    'type'   => 'review',
    'status' => 'approve',
    'parent' => 0,
    'orderby' => 'comment_date',
    'order'   => 'DESC',
  ];

  if ($per_page > 0) {
    $args['number'] = $per_page;

    if ($offset !== null) {
      $args['offset'] = max(0, intval($offset));
    } else {
      $args['offset'] = ($page - 1) * $per_page;
    }
  }

  $reviews = get_comments($args);

  $count_args = [
    'type'   => 'review',
    'status' => 'approve',
    'parent' => 0,
    'count'  => true,
  ];
  $total = get_comments($count_args);
  $total_pages = $per_page > 0 ? (int) ceil($total / $per_page) : 1;

  $items = [];

  foreach ($reviews as $review) {
    $post_id = $review->comment_post_ID;

    if (function_exists('icl_object_id')) {
      $post_id = apply_filters('wpml_object_id', $post_id, 'product', true, $lang);
    }

    $rating = (int) get_comment_meta($review->comment_ID, 'rating', true);

    $items[] = [
      'id'             => $review->comment_ID,
      'author'         => $review->comment_author,
      'content'        => $review->comment_content,
      'date'           => $review->comment_date,
      'rating'         => $rating,
      'product_title'  => html_entity_decode(get_the_title($post_id), ENT_QUOTES, 'UTF-8'),
      'product_link'   => get_permalink($post_id),
    ];
  }

  return [
    'total'        => (int) $total,
    'total_pages'  => $total_pages,
    'current_page' => $page,
    'per_page'     => $per_page,
    'reviews'      => $items,
  ];
}
