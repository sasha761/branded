<?php
/* Template Name: my account page
 * Template Post Type: page
 */

if ( !is_user_logged_in() ) {
  wp_redirect( home_url() . '/login' );
}

$context = Timber::get_context();
$context['post'] = Timber::get_post();
$context['endpoint_title'] = current_endpoint();
$context['endpoint_slug'] = WC()->query->get_current_endpoint();

$template = ['woo/my-account.twig'];
Timber::render($template, $context);