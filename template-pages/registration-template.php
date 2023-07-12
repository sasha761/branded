<?php
/* Template Name: registration page
 * Template Post Type: page
 */


$context = Timber::context();

Timber::render( array( 'template-registration.twig', 'page.twig' ), $context );
