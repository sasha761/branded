<?php
/**
 * News functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package News
 */
require_once(__DIR__ . '/vendor/autoload.php');
Timber\Timber::init();

function add_cors_head(){
  header("Access-Control-Allow-Origin: https://localhost:8080");
}
add_action('init','add_cors_head');

if ( ! class_exists( 'Timber' ) ) {
  add_action( 'admin_notices', function () {
    echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
  } );

  return;
}


Timber::$dirname = 'templates';

if ( ! defined( '_S_VERSION' ) ) {
	define( '_S_VERSION', '2.1.0' );
}

require_once get_template_directory() . '/Classes/BrandedSite.class.php';
require_once get_template_directory() . '/Classes/ThemeImageSizes.class.php';
require_once get_template_directory() . '/Classes/RegisterSystem.class.php';
require_once get_template_directory() . '/Classes/NotificationSystem.class.php';

require_once get_template_directory() . '/inc/attribute-title.php';
require_once get_template_directory() . '/inc/template-functions.php';

require_once get_template_directory() . '/inc/rest-api.php';

add_filter('woocommerce_get_catalog_ordering_args', function($args) {
  // Добавляем сортировку по наличию (сначала "в наличии")
  $args['orderby'] = [
    'meta_value' => 'ASC', // Сначала "instock", затем "outofstock"
    'date' => 'DESC', // Затем сортировка по дате (самые новые товары)
  ];
  $args['meta_key'] = '_stock_status'; // Используем статус наличия
  $args['order'] = 'ASC'; // Это обязательно для корректной работы с `meta_value`

  return $args;
});