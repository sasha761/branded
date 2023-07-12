<?php
/**
 * News functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package News
 */
require_once(__DIR__ . '/vendor/autoload.php');
// $timber = new \Timber\Timber();
Timber\Timber::init();


if ( ! class_exists( 'Timber' ) ) {
  add_action( 'admin_notices', function () {
    echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
  } );

  return;
}
// add_filter( 'relevanssi_index_content', '__return_false' );
/**
 * Sets the directories (inside your theme) to find .twig files
 */
// $timber::$dirname = array( 'templates', 'views' );
Timber::$dirname = 'templates';


/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
// $timber::$autoescape = false;

// add_filter('timber_compile_result', function($output) {
//     return str_replace('http://', 'https://', $output);
// });


if ( ! defined( '_S_VERSION' ) ) {
	define( '_S_VERSION', '2.0.0' );
}

require_once get_template_directory() . '/Classes/BrandedSite.class.php';
require_once get_template_directory() . '/Classes/ThemeImageSizes.class.php';
require_once get_template_directory() . '/Classes/RegisterSystem.class.php';
require_once get_template_directory() . '/Classes/NotificationSystem.class.php';
require_once get_template_directory() . '/inc/rest-api.php';
require_once get_template_directory() . '/inc/attribute-title.php';
require_once get_template_directory() . '/inc/template-functions.php';