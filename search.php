<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package News
 */

	$templates = array( 'search.twig' );

	$context          = Timber::context();
	// $context['term_page'] = new Timber\Term();
	$context['title'] = get_search_query();
	$context['posts'] = Timber::get_posts();

	$context['query_object'] = get_queried_object();

	if ($context['query_object']->parent  == 48 ||
	    $context['query_object']->parent  == 53 ||
	    $context['query_object']->term_id == 48 ||
	    $context['query_object']->term_id == 53 ) {
	    // wooman

	    $context['sidebar'] = [
	        'Одежда' => [get_terms([
	            'taxonomy' => 'product_cat',
	            'hide_empty' => true, 
	            'hierarchical' => true,
	            'parent' => 53,
	        ]), 53],
	        'Обувь' => [get_terms([
	            'taxonomy' => 'product_cat',
	            'hide_empty' => true, 
	            'hierarchical' => true,
	            'parent' => 48,
	        ]), 48],
	    ];
	} 
	elseif ($context['query_object']->parent  == 43 ||
	        $context['query_object']->parent  == 62 ||
	        $context['query_object']->term_id == 43 ||
	        $context['query_object']->term_id == 62 ) {
	    // man

	    $context['sidebar'] = [
	        'Одежда' => [get_terms([
	            'taxonomy' => 'product_cat',
	            'hide_empty' => true, 
	            'hierarchical' => true,
	            'parent' => 62,
	        ]), 62],
	        'Обувь' => [get_terms([
	            'taxonomy' => 'product_cat',
	            'hide_empty' => true, 
	            'hierarchical' => true,
	            'parent' => 43,
	        ]), 43],
	    ];

	} else {
	    // else
	    $context['sidebar'] = [
	        'Одежда' => [get_terms([
	            'taxonomy' => 'product_cat',
	            'hide_empty' => true, 
	            'hierarchical' => true,
	            'parent' => 52,
	        ]), 52],
	        'Обувь' => [get_terms([
	            'taxonomy' => 'product_cat',
	            'hide_empty' => true, 
	            'hierarchical' => true,
	            'parent' => 42,
	        ]), 42],
	    ];
	}

Timber::render( $templates, $context );
