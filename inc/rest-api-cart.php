<?php 
// require_once('../../../../wp-load.php');


add_action( 'rest_api_init', function () {
  $namespace = '/api/cart';

  register_rest_route($namespace, '/get_cart_url', [
    'methods' => 'GET',
    'callback' => 'get_cart_url',
    'args' => [
      'lang' => [
        'required' => false,
        'default'  => 'ru',
      ],
    ]
  ]);

  register_rest_route($namespace, '/create_order', [
    'methods' => 'POST',
    'callback' => 'create_order'
  ]);

  register_rest_route($namespace, '/get_order_info', [
    'methods' => 'GET',
    'callback' => 'get_order_info'
  ]);

  register_rest_route($namespace, '/get_checkout_fields', [
    'methods' => 'GET',
    'callback' => 'get_checkout_fields'
  ]);
});

function get_cart_url(WP_REST_Request $request) {
  $lang = $request->get_param('lang');

  $cart_url = apply_filters( 'wpml_permalink', wc_get_cart_url(), $lang );
  $checkout_url = apply_filters( 'wpml_permalink', wc_get_checkout_url(), $lang );

  $context = [
    'cart' => $cart_url,
    'checkout' => $checkout_url,
  ];

  return $context;
}

function get_order_info($request) {
  $order_id = $request['order_id'];
  $order = wc_get_order($order_id);

  $data['order_data'] = array(
    'order_items' => $order->get_items(),
    'order_id' => $order->get_id(),
    'order_number' => $order->get_order_number(),
    'order_date' => date('Y-m-d H:i:s', strtotime(get_post($order->get_id())->post_date)),
    'status' => $order->get_status(),
    'shipping_total' => $order->get_total_shipping(),
    'shipping_tax_total' => wc_format_decimal($order->get_shipping_tax(), 2),
    'fee_total' => wc_format_decimal($fee_total, 2),
    'fee_tax_total' => wc_format_decimal($fee_tax_total, 2),
    'tax_total' => wc_format_decimal($order->get_total_tax(), 2),
    'cart_discount' => (defined('WC_VERSION') && (WC_VERSION >= 2.3)) ? wc_format_decimal($order->get_total_discount(), 2) : wc_format_decimal($order->get_cart_discount(), 2),
    'order_discount' => (defined('WC_VERSION') && (WC_VERSION >= 2.3)) ? wc_format_decimal($order->get_total_discount(), 2) : wc_format_decimal($order->get_order_discount(), 2),
    'discount_total' => wc_format_decimal($order->get_total_discount(), 2),
    'order_total' => wc_format_decimal($order->get_total(), 2),
    'order_currency' => $order->get_currency(),
    'payment_method' => $order->get_payment_method(),
    'payment_method_title' => $order->get_payment_method_title(),
    'shipping_method' => $order->get_shipping_method(),
    'customer_id' => $order->get_user_id(),
    'customer_user' => $order->get_user_id(),
    'customer_email' => ($a = get_userdata($order->get_user_id() )) ? $a->user_email : '',
    'billing_first_name' => $order->get_billing_first_name(),
    'billing_last_name' => $order->get_billing_last_name(),
    'billing_company' => $order->get_billing_company(),
    'billing_email' => $order->get_billing_email(),
    'billing_phone' => $order->get_billing_phone(),
    'billing_address_1' => $order->get_billing_address_1(),
    'billing_address_2' => $order->get_billing_address_2(),
    'billing_postcode' => $order->get_billing_postcode(),
    'billing_city' => $order->get_billing_city(),
    'billing_state' => $order->get_billing_state(),
    'billing_country' => $order->get_billing_country(),
    'shipping_first_name' => $order->get_shipping_first_name(),
    'shipping_last_name' => $order->get_shipping_last_name(),
    'shipping_company' => $order->get_shipping_company(),
    'shipping_address_1' => $order->get_shipping_address_1(),
    'shipping_address_2' => $order->get_shipping_address_2(),
    'shipping_postcode' => $order->get_shipping_postcode(),
    'shipping_city' => $order->get_shipping_city(),
    'shipping_state' => $order->get_shipping_state(),
    'shipping_country' => $order->get_shipping_country(),
    'customer_note' => $order->get_customer_note(),
    'download_permissions' => $order->is_download_permitted() ? $order->is_download_permitted() : 0,
  );

  $data['products'] = [];
  // Get and Loop Over Order Items
  foreach ( $order->get_items() as $item_id => $item ) {
    $products_array = [];
    $categories           = get_the_terms( $item->get_product_id(), 'product_cat' );
    foreach ($categories as $key => $category) {
      if ($category->parent) {
        if ($key == 0) $key = $key + 1;
        $products_array['cats'][$key] = $category->name;
      } else {
        $products_array['cats'][0] = $category->name;
      }
    }
    ksort($products_array['cats']);

    $products_array['id'] = $item->get_product_id();
    $products_array['variation_id'] = $item->get_variation_id();
    $products_array['name'] = $item->get_name();
    $products_array['brand'] = wc_get_product_terms( $item->get_product_id(), 'pa_brand', array()); 
    $products_array['qty'] = $item->get_quantity();
    $products_array['subtotal'] = $item->get_subtotal();
    $products_array['total'] = $item->get_total();

    $data['products'][] = $products_array;
  }

  wp_send_json($data);
}

function create_order(WP_REST_Request $request) {
  $email      = $request->get_param('email');
  $name       = $request->get_param('firstName');
  $surname    = $request->get_param('lastName');
  $phone      = $request->get_param('phone');
  $city       = $request->get_param('city');
  $address    = $request->get_param('address');
  $products   = $request->get_param('products');
  $comments   = $request->get_param('comments') ?? null;

  $args = array(
    'status'        => 'on-hold',
    'customer_id'   => null,
    'customer_note' => $comments,
    'parent'        => null,
    'created_via'   => null,
    'cart_hash'     => null,
    'order_id'      => 0,
  );

  $order = wc_create_order($args);

  foreach ($products as $key => $product) {
    $product_id = $product['size_selected'][0]['id'] ? $product['size_selected'][0]['id'] : $product['id'];
    $product_quantity = $product['quantity'] ? $product['quantity'] : 1;
    $order->add_product(wc_get_product($product_id), $product_quantity);
  }

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
  // $order->update_status('on-hold');

  $order->save();

  $order_id = $order->get_id();

  if (!empty($order_id)) {
    $response = $order->get_checkout_order_received_url();
  } else {
    $response = false;
  }
  
  telegram_notification($order_id);
  return $response; 
}


function get_checkout_fields() {
    // Убедитесь, что WooCommerce активирован
    // if (!class_exists('WooCommerce')) {
    //     return rest_ensure_response('WooCommerce is not active.');
    // }

    // // Получите объект WC_Checkout
    // $checkout = WC()->checkout();

    // // Проверьте, что объект успешно инициализирован
    // if (!$checkout || !is_a($checkout, 'WC_Checkout')) {
    //     return rest_ensure_response('Unable to initialize WC_Checkout.');
    // }

    // // Дополнительная проверка наличия метода get_value()
    // if (!method_exists($checkout, 'get_value')) {
    //     return rest_ensure_response('WC_Checkout does not have get_value() method.');
    // }

    // // Получите поля для биллинга
    // $context['checkout_billing'] = $checkout->get_checkout_fields('billing');

    // // Отправьте данные в JSON
    // return rest_ensure_response($context);
}