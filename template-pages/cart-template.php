<?php
/* Template Name: cart page
 * Template Post Type: page
 */


$context = Timber::context();
$context['post'] = Timber::get_post();

$context['cart']     = WC()->cart->get_cart();
// $context['cart_url'] = wc_get_cart_url();


$template = ['woo/cart-page.twig'];
Timber::render($template, $context);