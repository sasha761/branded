<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package News
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$GLOBALS['timberContext'] = Timber::context();
ob_start();


$context = Timber::context();
$context['account_page_url'] = get_permalink( get_option('woocommerce_myaccount_page_id') );