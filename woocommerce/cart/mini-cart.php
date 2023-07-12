<?php
/**
 * Mini-cart
 *
 * Contains the markup for the mini-cart, used by the cart widget.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/mini-cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.3.0
 */
$context = Timber::context();
$context['cart_products'] = [];

 // if ( ! WC()->cart->is_empty() ) : 

	foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
		$products_array = [];

		// General vars
		$_product     = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
		$product_id   = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

		if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key ) ) {

			// price, title, image, url
			$products_array['title']     = apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key );
      $products_array['price']     = $_product->get_price_html();
      $products_array['url']       = apply_filters( 'woocommerce_cart_item_permalink', $_product->get_permalink( $cart_item ) , $cart_item, $cart_item_key );
			$products_array['thumbnail'] = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );


			// Delete button
      $products_array['delete_permalink'] = wc_get_cart_remove_url( $cart_item_key );
      $products_array['delete_productid'] = esc_attr($product_id);
      $products_array['delete_sku'] = esc_attr($_product->get_sku());



      // Attributes
      // $products_array['attr'] = wc_get_formatted_cart_item_data( $cart_item );

      $size = $_product->get_attribute('size') ? $_product->get_attribute('size') : false; 
      $color = $_product->get_attribute('color') ? $_product->get_attribute('color') : false;
      // $brand = $_product->get_attribute('brand') ? $_product->get_attribute('brand') : false;
      $brand = wc_get_product_terms( $product_id, 'pa_brand', array('fields' => 'names') ); 

      $products_array['attr'] = [
        'size' => $size,
        'color' => $color,
        'brand' => $brand,
      ];
    

      // Backorder notification
      if ($_product->backorders_require_notification() && $_product->is_on_backorder($cart_item['quantity'])) {
        $products_array['backorder'] = true;
      }


      // Quantity
      // if ($_product->is_sold_individually()) {
      //     $product_quantity = sprintf('1 <input type="hidden" name="cart[%s][qty]" value="1">', $cart_item_key);
      // } else {
      //     $product_quantity = woocommerce_quantity_input( array(
      //         'input_name'   => "cart[{$cart_item_key}][qty]",
      //         'input_value'  => $cart_item['quantity'],
      //         'max_value'    => $_product->get_max_purchase_quantity(),
      //         'min_value'    => '0',
      //         'product_name' => $_product->get_name(),
      //     ), $_product, false );
      // }
      $products_array['quantity'] = $cart_item['quantity'];

      // Total
      $products_array['total'] = apply_filters('woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal($_product, $cart_item['quantity']), $cart_item, $cart_item_key);

      // Merge with products
      $context['cart_products'][] = $products_array;

		}
	}



$context['total']    = WC()->cart->get_total();

$template = ['templates/woo/mini-cart.twig'];
Timber::render($template, $context);
