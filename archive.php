<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package News
 */

$templates = array( 'archive.twig', 'index.twig' );

$context = Timber::context();

$context['title'] = 'Archive';
if ( is_day() ) {
	$context['title'] = 'Archive: ' . get_the_date( 'D M Y' );
} else if ( is_month() ) {
	$context['title'] = 'Archive: ' . get_the_date( 'M Y' );
} else if ( is_year() ) {
	$context['title'] = 'Archive: ' . get_the_date( 'Y' );
} else if ( is_tag() ) {
	$context['title'] = single_tag_title( '', false );
} else if ( is_category() ) {
	$context['title'] = single_cat_title( '', false );
	array_unshift( $templates, 'archive-' . get_query_var( 'cat' ) . '.twig' );
} else if ( is_post_type_archive() ) {
	$context['title'] = post_type_archive_title( '', false );
	array_unshift( $templates, 'archive-' . get_post_type() . '.twig' );
}


$context['term_page']         = Timber::get_term();
$context['posts']             = Timber::get_posts();
$context['most_popular']      = Timber::get_posts(array(
    	'post_type'   => 'any',
    	'posts_per_page' => '2', 
    	'meta_key' => 'my_post_viewed', 
    	'orderby' => 'meta_value_num', 
    	'suppress_filters' => false,
    	'order' => 'DESC'
    ));
$context['new_songs']       = Timber::get_posts(array(
    	'post_type'   => 'post',
    	'category'    => 1576,
    	'posts_per_page' => '4', 
			'orderby'     => 'date',
			'suppress_filters' => false,
			'order'       => 'DESC'
    ));
 Timber::render( $templates, $context );
