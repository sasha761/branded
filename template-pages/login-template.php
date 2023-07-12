<?php
/* Template Name: login page
 * Template Post Type: page
 */


$context = Timber::context();

Timber::render( array( 'template-login.twig', 'page.twig' ), $context );
