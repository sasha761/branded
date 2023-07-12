<?php
/* Template Name: privacy policy page
 * Template Post Type: page
 */


$context = Timber::context();
$context['post'] = Timber::get_post();
$context['background'] = wp_is_mobile()
  ? get_template_directory_uri() . '/dist/img/privacy-policy-background-mobile.png'
  : get_template_directory_uri() . '/dist/img/privacy-policy-background.png';

$template = array( 'template-privacy-policy.twig', 'page.twig' );
Timber::render($template, $context);