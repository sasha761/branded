<?php

// function ivr_rest_send_review(WP_REST_Request $data)
// {

//     $post_data = array(
//         'post_title'   => date('d.m.Y').' '.$data['name'],
//         'post_content' => null,
//         'post_status'  => 'pending',
//         'post_author'  => 1,
//         'post_type'    => 'user_reviews'
//     );

//     $post_id = wp_insert_post(wp_slash($post_data));

//     if ( ! function_exists( 'wp_handle_upload' ) ) {
//         require_once( ABSPATH . 'wp-admin/includes/file.php' );
//     }

//     $file = $_FILES['file'];
//     $upload_overrides = array( 'test_form' => false );


//     $movefile = wp_handle_upload( $file, $upload_overrides );


//     if ($movefile && !isset( $movefile['error'] ) ) {
//         echo "File is valid, and was successfully uploaded.\n";
//         echo print_r( $movefile );
//     } else {
//         echo $movefile['error'];
//     }

//     $filename = $movefile['file'];
//     $filetype = wp_check_filetype( basename( $filename ), null );
//     $wp_upload_dir = wp_upload_dir();
//     // $filename = preg_replace( '/\.[^.]+$/', '', basename( $movefile['file'] ) );

//     $attachment = array(
//       'guid'           => $movefile['url'], 
//       'post_mime_type' => $filetype['type'],
//       'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $filename )),
//       'post_content'   => '',
//       'post_status'    => 'inherit',
//     );



//     $attach_id = wp_insert_attachment( $attachment, $filename, $post_id );

//     require_once( ABSPATH . 'wp-admin/includes/image.php' );


//     $attach_data = wp_generate_attachment_metadata( $attach_id, $filename );
//     wp_update_attachment_metadata( $attach_id, $attach_data );

//     // return $attach_id;

//     update_field('name', $data['name'], $post_id);
//     update_field('text', $data['message'], $post_id);
//     update_field('file', $attach_id, $post_id);

//     $su = get_site_url( null, '', 'https' );
//     wp_mail(get_option('admin_email'), 'Klaf toosh new review', "
//         A new review has been added, moderation is required. <a href=\"$su/wp-admin/post.php?post=$post_id&action=edit\">Link to review</a>
//     ", "content-type: text/html");

//     $response = new WP_REST_Response([]);
//     $response->set_status(200);

//     return $response;
//     return $file;
// }

// add_action('rest_api_init', function () {
//     register_rest_route('ivr/v1', '/send_review', array(
//         'methods'  => 'POST',
//         'callback' => 'ivr_rest_send_review',
//         'args'     => array(
//             'name'  => array(
//                 'validate_callback' => function ($param, $request, $key) {
//                     return strlen($param) > 5;
//                 }
//             ),
//             'message' => array(
//                 'validate_callback' => function ($param, $request, $key) {
//                     return strlen($param) > 5;
//                 }
//             )
//         ),
//     ));
// });



add_action( 'rest_api_init', function () {
  $namespace = '/rest_api/v1';
  register_rest_route( $namespace, '/set_seo_identifiers/', [
    'methods' => 'GET',
    'callback' => 'set_seo_identifiers',
  ]);
});

function set_seo_identifiers(WP_REST_Request $request) {

  $posts = get_posts( array(
    'post_type'   => 'product',
    'posts_per_page' => -1,
    'orderby'     => 'date',
    'order'       => 'ASC',
    'meta_key'    => '',
    'meta_value'  => '',
    // 'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
  ) );

  $gtin = ''; // example: 9504000059424
  $mpn  = ''; // example: 00638HAY
  // $brand_code;

  $brands = [
    'elison-kids'  => 1000,
    'wearme'       => 2000,
    'german-kids'  => 3000,
    'gruf'         => 4000,
    'merezhyvo'    => 5000,
    'los-halconez' => 6000,
    'veros'        => 7000,
    'wox-clothing' => 8000,
    'black-limit'  => 9000,
    'flex'         => 10000,
  ];

  $brands_key = [
    'elison-kids'  => 'elk',
    'wearme'       => 'wm',
    'german-kids'  => 'gek',
    'gruf'         => 'gru',
    'merezhyvo'    => 'mer',
    'los-halconez' => 'los',
    'veros'        => 'vs',
    'wox-clothing' => 'wox',
    'black-limit'  => 'bl',
    'flex'         => 'fl',
  ];

  foreach ($posts as $key => $post) {
    $post->ID;
    $brand = wc_get_product_terms( $post->ID, 'pa_brand', array('fields' => 'slugs') ); 
    $get_sku = get_post_meta( $post->ID, '_sku', true );
    $get_mpn = get_post_meta( $post->ID, 'wpseo_global_identifier_values', true );

    $mpn = $brands[$brand[0]]++;

    $seo_identifiers = [
      'gtin' => $gtin,
      'mpn' => $mpn . $brands_key[$brand[0]],
    ];


    if ($get_mpn['mpn'] == "") {
      update_post_meta( $post->ID, 'wpseo_global_identifier_values', $seo_identifiers );
    }

    if ($get_sku == "") {
      update_post_meta( $post->ID, '_sku', $mpn );
    }
    
  }
}

add_action( 'rest_api_init', function () {
  $namespace = '/rest_api/v1';
  register_rest_route( $namespace, '/get_products_feed/', [
    'methods' => 'GET',
    'callback' => 'get_products_feed',
  ]);
});

function get_products_feed(WP_REST_Request $request) {

  $posts = get_posts( array(
    'post_type'   => 'product',
    'posts_per_page' => 3,
    'orderby'     => 'date',
    'order'       => 'DESC',
    'meta_key'    => '',
    'meta_value'  => '',
    'suppress_filters' => false,
  ) );

// header( "Content-type: text/xml");
 
  echo "<?xml version='1.0' encoding='UTF-8'?>
  <rss xmlns:g='http://base.google.com/ns/1.0' version='2.0'>
  <channel>
  <title>Product feed RU</title>
  <link>https://branded.com.ua</link>
  <description>Product feed ru</description>";

  // $google_category = [
  //   // '' => '3032',
  // ];

    foreach ($posts as $key => $post) {
      $id                      = $post->ID;
      $product                 = wc_get_product($id);

      $description             = $product->short_description;
      $image_link              = get_the_post_thumbnail_url($id, 'full');
      $available               = $product->get_stock_status();
      $product_cat_array       = get_the_terms($id, 'product_cat');
      $product_cat             = '';
      foreach($product_cat_array as $key => $cat) {
        $separator = ($key === array_key_last($product_cat_array)) ? '' : ' > ';
        $product_cat .= $cat->name . $separator;
      }
      $brand                   = wc_get_product_terms($id, 'pa_brand', array('fields' => 'names'))[0];
      $condition               = 'New';
      $identifier_exists       = 'no';

      if ($product->is_type( 'variable' )) {
        $variations = $product->get_available_variations();

        var_dump($variations);
        $variations_id = wp_list_pluck( $variations, 'variation_id' );

        foreach($variations_id as $variation_id) {
          $variable_product        = wc_get_product($variation_id);
          $title                   = get_the_title($variation_id);
          $link                    = get_permalink($variation_id);
          $price                   = $variable_product->get_price();
          $item_group_id           = $id;
          // $size
          // var_dump($link);

          echo "<item>
              <g:id>$variation_id/g:id>
              <g:title>$title</g:title>
              <g:description>$description</g:description>
              <g:link>$link</g:link>
              <g:image_link>$image_link</g:image_link>
              <g:availability>$available</g:availability>
              <g:price>$price UAH</g:price>
              <g:google_product_category></g:google_product_category>
              <g:product_type>$product_cat</g:product_type>
              <g:brand>$brand</g:brand>
              <g:condition>$condition</g:condition>
              <g:item_group_id>$id</g:item_group_id>
              <g:color></g:color>
              <g:size></g:size>
              <g:identifier_exists>$identifier_exists</g:identifier_exists>
            </item>";
        }
      } 
      else {
        $title                   = get_the_title($id);
        
        $link                    = get_the_permalink($id);
        $image_link              = get_the_post_thumbnail_url($id, 'full');
        $available               = $product->get_stock_status();
        $price                   = $product->get_price();
        // $google_product_category =
        $product_cat_array       = get_the_terms($id, 'product_cat');
        $product_cat             = '';
        foreach($product_cat_array as $key => $cat) {
          $separator = ($key === array_key_last($product_cat_array)) ? '' : ' > ';
          $product_cat .= $cat->name . $separator;
        }
        $brand                   = wc_get_product_terms($id, 'pa_brand', array('fields' => 'names'))[0];
        $condition               = 'New';
        // // $item_group_id
        // $color                   = wc_get_product_terms($id, 'pa_color', array('fields' => 'slugs')); 
        // $size                    = wc_get_product_terms($id, 'pa_size', array('fields' => 'slugs')); 
        $identifier_exists       = 'no';

        echo "<item>
              <g:id>$id/g:id>
              <g:title>$title</g:title>
              <g:description>$description</g:description>
              <g:link>$link</g:link>
              <g:image_link>$image_link</g:image_link>
              <g:availability>$available</g:availability>
              <g:price>$price UAH</g:price>
              <g:google_product_category></g:google_product_category>
              <g:product_type>$product_cat</g:product_type>
              <g:brand>$brand</g:brand>
              <g:condition>$condition</g:condition>
              <g:item_group_id>$id</g:item_group_id>
              <g:color></g:color>
              <g:size></g:size>
              <g:identifier_exists>$identifier_exists</g:identifier_exists>
            </item>";

      }
    }
  echo "</channel></rss>";
}