<?php
function custom_dequeue() {
  wp_dequeue_style('news-style');
  wp_deregister_style('news-style');

  wp_dequeue_style('woocommerce-general');
  wp_deregister_style('woocommerce-general');

  wp_dequeue_style('woocommerce-smallscreen');
  wp_deregister_style('woocommerce-smallscreen');

  wp_dequeue_style('woocommerce-layout');
  wp_deregister_style('woocommerce-layout');

  wp_dequeue_style('woocommerce_prettyPhoto_css');
  wp_deregister_style('woocommerce_prettyPhoto_css');

  wp_dequeue_style('wp-block-library');
  wp_deregister_style('wp-block-library');

  wp_dequeue_style('woo-variation-swatches-tooltip');
  wp_deregister_style('woo-variation-swatches-tooltip');
  
  wp_dequeue_style('woo-variation-swatches');
  wp_deregister_style('woo-variation-swatches');

  wp_dequeue_style('aws-style');
  wp_deregister_style('aws-style');

  wp_dequeue_style( 'wc-blocks-style' );
  wp_deregister_style('wc-blocks-style');

  wp_dequeue_style('wc-blocks-vendors-style');
  wp_deregister_style('wc-blocks-vendors-style');

  wp_dequeue_style( 'select2' );
  wp_deregister_style('select2');

  wp_dequeue_style( 'classic-theme-styles' );
  wp_deregister_style('classic-theme-styles');

  wp_dequeue_style('wpml-blocks');
  wp_deregister_style('wpml-blocks');

  
  // wp_deregister_script( 'jquery' );
  wp_deregister_script( 'wc-single-product' );
  wp_deregister_script( 'woocommerce' );
  wp_deregister_script( 'wc-cart-fragments' );
  wp_deregister_script( 'aws-script' );
  wp_deregister_script( 'comment-reply' );

  wp_deregister_script( 'woo-tracks' );
  wp_deregister_script( 'wcml-front-scripts' );
  wp_deregister_script( 'cart-widget' );

  // wp_deregister_script( 'wc-add-to-cart-variation' );

  wp_deregister_script( 'selectWoo' );
  // wp_deregister_script( 'underscore' );
  // wp_deregister_script( 'jquery-blockui' );
  // wp_deregister_script( 'wp-api-request' );
  // wp_deregister_script( 'wp-polyfill-inert' );
  // wp_deregister_script( 'regenerator-runtime' );
  // wp_deregister_script( 'wp-polyfill' );
  // wp_deregister_script( 'wp-hooks' );
  // wp_deregister_script( 'wp-i18n' );
  // wp_deregister_script( 'wp-url' );
  // wp_deregister_script( 'wp-api-fetch' );
  // wp_deregister_script( 'wp-util' );
  // wp_deregister_script( 'wp-util-js-extra' );
  


  // wp_deregister_script( 'woo-variation-swatches' );
  // wp_deregister_script( 'jquery-migrate' );
}

add_action( 'wp_enqueue_scripts', 'custom_dequeue', 9999 );
add_action( 'wp_head', 'custom_dequeue', 9999 );

if( function_exists('acf_add_options_page') ) {
  acf_add_options_page(array(
    'page_title'  => 'Theme General Settings',
    'menu_title'  => 'Theme Settings',
    'redirect'    => false
  ));
}

add_filter ('comments_number', 'comments_number_count', 10, 2);
function comments_number_count($output, $number) {
  if ($number == 0) $output = '0';
  elseif ($number == 1) $output = '1';
  else $output = $number;
  return $output;
}


add_filter( 'woocommerce_currencies', 'add_my_currency' );
function add_my_currency( $currencies ) {
 	$currencies['UAH'] = __( 'Українська гривня', 'woocommerce' );
 	return $currencies;
}

add_filter('woocommerce_currency_symbol', 'add_my_currency_symbol', 10, 2);
function add_my_currency_symbol( $currency_symbol, $currency ) {
 	switch( $currency ) {
 		case 'UAH': $currency_symbol = 'грн'; break;
 	}
 	return $currency_symbol;
}

add_filter( 'wpseo_canonical', 'canonical' );
function canonical( $canonical ) {
  if ( is_archive() && is_paged() ) {
    $canonical = preg_replace('#\??/page[\/=]\d+#', '', $canonical);
    return $canonical;
  }
}

add_filter( 'woocommerce_checkout_fields' , 'custom_remove_woo_checkout_fields' );
function custom_remove_woo_checkout_fields( $fields ) {
  unset($fields['shipping']['shipping_first_name']);    
  unset($fields['shipping']['shipping_last_name']);  
  unset($fields['shipping']['shipping_company']);
  unset($fields['shipping']['shipping_address_1']);
  unset($fields['shipping']['shipping_address_2']);
  unset($fields['shipping']['shipping_city']);

  unset($fields['shipping']['shipping_postcode']);
  unset($fields['shipping']['shipping_country']);
  unset($fields['shipping']['shipping_state']);

  return $fields;
}


add_action( 'wp_ajax_quickBuy', 'ajax_quickBuy' );
add_action( 'wp_ajax_nopriv_quickBuy', 'ajax_quickBuy' );
function ajax_quickBuy(){
  $context = Timber::context();

  $email      = $_POST['email'];
  $name       = $_POST['name'];
  $surname    = $_POST['surname'];
  $phone      = $_POST['phone'];
  $city       = $_POST['city'];
  $address    = $_POST['address'];
  $product_id = $_POST['variation_id'] != '0' ? $_POST['variation_id'] : $_POST['product_id'];

  $args = array(
    'status'        => null,
    'customer_id'   => null,
    'customer_note' => null,
    'parent'        => null,
    'created_via'   => null,
    'cart_hash'     => null,
    'order_id'      => 0,
  );

  $order = wc_create_order( $args );
  $order->add_product(get_product($product_id), 1);

  $billing_address = array(
      'first_name' => $name,
      'last_name'  => $surname,
      'email'      => $email,
      'phone'      => $phone,
      'city'       => $city,
      'address_1'  => $address,
  );
  $address = array(
      'first_name' => $name,
      'last_name'  => $surname,
      'email'      => $email,
      'phone'      => $phone,
      'city'       => $city,
      'address_1'  => $address,
  );

  $order->set_address($billing_address, 'billing');
  $order->set_address($address, 'shipping');
  $order->set_payment_method_title('Оплата при доставке | быстрый заказ');
  $order->calculate_totals();
  $order->update_status('on-hold');

  $order->save();

  $order_id = $order->get_id();
  $thank_you_url = $order->get_checkout_order_received_url();

  header('Content-Type: application/json');

  if (!empty($order_id)) {
    $response = $thank_you_url;
  } else {
    $response = false;
  }
  
  echo (json_encode($response));
  telegram_notification($order_id);
  wp_die();
}


add_action( 'wp_ajax_showMoreProducts', 'ajax_load_more_product' );
add_action( 'wp_ajax_nopriv_showMoreProducts', 'ajax_load_more_product' );

function ajax_load_more_product(){
  $context = Timber::context();
  
  $url = $_SERVER['HTTP_REFERER'];
  $url_parts = parse_url($url, PHP_URL_QUERY);

  $url_pages = explode("/", $url)[3];
  $url_pages_value = explode("/", $url)[4];

  if (!empty($url_parts)) {
    parse_str($url_parts, $query_params);
  }

  $tax_query = [];
  $i = 0;

  foreach ($query_params as $key => $value) {
    $filter = '';
    if (explode("_", $key)[0] == 'filter' ) {
      $filter = explode("_", $key)[1];
      $i++;

      $value = explode(',', $value);

      if ($value[0] !== '') {
        $tax_query[$i] = array(
          'taxonomy'        => 'pa_' .  $filter,
          'field'           => 'slug',
          'terms'           => $value,
          'operator'        => 'IN'
        );
      }
    } 
  }

  if ($url_pages === 'brand' || $url_pages === 'size' || $url_pages === 'color') {
    $tax_query[$i++] = array(
      'taxonomy'        => 'pa_' . $url_pages,
      'field'           => 'slug',
      'terms'           => $url_pages_value,
      'operator'        => 'IN'
    );
  }

  if (!empty($query_params['orderby'])) {
    switch ($query_params['orderby']) {
      case 'default':
        $meta_key = '';
        $order = 'desc';
        $orderby = 'date';
        break;
      case 'popularity':
        $meta_key = 'total_sales';
        $order = 'desc';
        $orderby = 'meta_value_num date';
        break;
      case 'price':
        $meta_key = '_price';
        $order = 'asc';
        $orderby = 'meta_value_num date';
        break;
      case 'price-desc':
        $meta_key = '_price';
        $order = 'desc';
        $orderby = 'meta_value_num date';
        break;
      case 'date':
        $meta_key = '';
        $order = 'desc';
        $orderby = 'date';
        break;
      case 'rating':
        $meta_key = '_wc_average_rating';
        $order = 'desc';
        $orderby = 'meta_value_num date';
        break;
      default:
        $meta_key = '';
        $order = 'desc';
        $orderby = 'date';
    }
  } else {
    $meta_key = '';
    $order = 'desc';
    $orderby = 'date';
  }

  $number_posts = 16;

  $args = [
    'post_type' => 'product',
    'posts_per_page'   => $number_posts,
    'post_status' => 'publish',
    'paged' => $_POST['page'],
    'orderby' => $orderby,
    'order' => $order,
    'meta_key' => $meta_key,
    'offset' => $_POST['offset'],
  ];

  if ($_POST['taxonomy'] == 'product_cat') {
    $args['product_cat'] = $_POST['slug'];
  } 

  if (count($tax_query) > 0) {
    $args['tax_query'] = array('relation' => 'AND', $tax_query);
  }
  

  $posts = Timber::get_posts($args);

  $response = [];

  if ($posts) {
    foreach ($posts as $key => $post) {
      $id = $post->ID;
      $product = wc_get_product($id);

      $response[$key]['id'] = $id;
      $response[$key]['link'] = get_the_permalink($id);
      $response[$key]['title'] = get_the_title($id);
      $response[$key]['price'] = $product->get_price_html();
      $response[$key]['video'] = get_field('video', $id);
      $response[$key]['thumb_md'] = get_the_post_thumbnail_url($id, 'archive_md');
      $response[$key]['thumb_xl'] = get_the_post_thumbnail_url($id, 'archive_xl');
      $response[$key]['is_stock'] = $product->get_stock_status();

      $response[$key]['percent'] = false;
      $response[$key]['is_sale'] = false;
      $is_sale = $product->is_on_sale();
      if ($is_sale) {
        $price_sale                = $product->get_variation_sale_price() ?: $product->get_sale_price();
        $price_regular             = $product->get_variation_regular_price() ?: $product->get_regular_price();
        $response[$key]['percent'] = round(($price_regular - $price_sale) / $price_regular * 100, 0);
        $response[$key]['is_sale'] = true;
      }
    }
  } else {
    $response = "nomore";
  }

  wp_reset_query();
  wp_reset_postdata();

  $output_JSON['args'] = $args;
  $output_JSON['products'] = $response;
  
  header('Content-Type: application/json');
  echo json_encode($output_JSON);
  wp_die();
}

add_action( 'woocommerce_checkout_update_order_meta', 'telegram_notification',  1, 1  );
function telegram_notification( $order_id ) {

  $chatID_Branded = 2137321280;
  $chatID_sasha   = 439353691;
  $chatID_nick   = 382196880;
  $token = "5241113514:AAFk_p-pGFZxrcqA4S5lmtIjyiaSC0mBrbA";

  $order = wc_get_order( $order_id );
    
  $text  = "Новый заказ: № " . $order_id . "\n";
  $text .= "ФИО: " . $order->get_billing_first_name() . " " . $order->get_billing_last_name() . "\n";
  $text .= "Телефон: " . $order->get_billing_phone() . "\n";
  $text .= "Город: " . $order->get_billing_city() . "\n";
  $text .= "Новая почта №: " . $order->get_billing_address_1() . "\n";
  $text .= "Дата: " . date('Y-m-d H:i:s', strtotime(get_post($order->get_id())->post_date)) . "\n";
  $text .= "Сумма: " . wc_format_decimal($order->get_total(), 2) . "\n";
  $text .= "Метод оплаты: " . $order->get_payment_method_title() . "\n";
  $text .= "<b>Товар: </b> \n \n";
    
  foreach ( $order->get_items() as $item_id => $item_data ) {
    $product_id    = $item_data->get_product_id();
    $product       = $item_data->get_product();
    $product_name  = $product->get_name();
    $item_quantity = $item_data->get_quantity();
    $item_total    = $item_data->get_total();
    $item_link     = get_the_permalink($product_id);
    $text         .= $product_name . ' × ' . $item_quantity . ' = ' . $item_total . "\n" . $item_link . "\n";
  }

  file_get_contents("https://api.telegram.org/bot". $token ."/sendMessage?chat_id=". $chatID_Branded ."&parse_mode=html&text=" . urlencode($text));
  file_get_contents("https://api.telegram.org/bot". $token ."/sendMessage?chat_id=". $chatID_sasha ."&parse_mode=html&text=" . urlencode($text));
  file_get_contents("https://api.telegram.org/bot". $token ."/sendMessage?chat_id=". $chatID_nick ."&parse_mode=html&text=" . urlencode($text));
}

/**
 * Track product views. Always.
 */

add_filter( 'woocommerce_add_to_cart_fragments', 'woocommerce_header_add_to_cart_fragment' );

function woocommerce_header_add_to_cart_fragment( $fragments ) {
  $context = Timber::context();
    ob_start(); ?>
    <span class="c-service__count js-minicart-count">
      <?php echo WC()->cart->cart_contents_count; ?> 
    </span> 
    <?php

    $fragments['span.c-service__count.js-minicart-count'] = ob_get_clean();

    return $fragments;
}

remove_action( 'wp_head', 'feed_links_extra', 3 ); // Display the links to the extra feeds such as category feeds
remove_action( 'wp_head', 'feed_links', 2 ); // Display the links to the general feeds: Post and Comment Feed
remove_action( 'wp_head', 'rsd_link' ); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action( 'wp_head', 'wlwmanifest_link' ); // Display the link to the Windows Live Writer manifest file.
remove_action( 'wp_head', 'index_rel_link' ); // index link
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); // prev link
remove_action( 'wp_head', 'start_post_rel_link', 10, 0 ); // start link
remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 ); // Display relational links for the posts adjacent to the current post.
remove_action( 'wp_head', 'wp_generator' ); // Display the XHTML generator that is generated on the wp_head hook, WP version

/**
 * Redirect to the homepage all users trying to access feeds.
 */
function disable_feeds() {
  wp_redirect( home_url() );
  die;
}

// Disable global RSS, RDF & Atom feeds.
add_action( 'do_feed',      'disable_feeds', -1 );
add_action( 'do_feed_rdf',  'disable_feeds', -1 );
add_action( 'do_feed_rss',  'disable_feeds', -1 );
add_action( 'do_feed_rss2', 'disable_feeds', -1 );
add_action( 'do_feed_atom', 'disable_feeds', -1 );

// Disable comment feeds.
add_action( 'do_feed_rss2_comments', 'disable_feeds', -1 );
add_action( 'do_feed_atom_comments', 'disable_feeds', -1 );

// Prevent feed links from being inserted in the <head> of the page.
add_action( 'feed_links_show_posts_feed',    '__return_false', -1 );
add_action( 'feed_links_show_comments_feed', '__return_false', -1 );
remove_action( 'wp_head', 'feed_links',       2 );
remove_action( 'wp_head', 'feed_links_extra', 3 );


// Прячем страницу страницу архива автора
if( ! is_admin() ){
  add_filter( 'pre_handle_404', 'remove_author_pages_page' );
  add_filter( 'author_link', 'remove_author_pages_link' );

  // Ставим 404 статус
  function remove_author_pages_page( $false ) {
    if ( is_author() ) {
      global $wp_query;
      $wp_query->set_404();
      status_header( 404 );
      nocache_headers();

      return true; // для обрыва хука
    }

    return $false;
  }

  // удаляем ссылку
  function remove_author_pages_link( $content ) {
    return home_url();
  }
}

add_filter( 'wpseo_breadcrumb_single_link', 'remove_shop_crumb', 10, 2 );
function remove_shop_crumb( $link_output, $link ){
  if( $link['text'] == 'Shop' || $link['text'] == 'Магазин' ) {
    $link_output = '';
  }

  return $link_output;
}