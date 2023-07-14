<?php
class BrandedSite {

  public function __construct() {
    // include( get_template_directory() . '/inc/language.php' );
    add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
    add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
    // add_action( 'widgets_init', array( $this, 'widgets_init' ) );

    add_filter( 'gutenberg_use_widgets_block_editor', '__return_false' );
    add_filter( 'use_widgets_block_editor', '__return_false' );
    add_filter( 'auto_update_plugin', '__return_false' );
  }

  public function theme_supports() {
    // load_theme_textdomain( 'news', get_template_directory() . '/languages' );
    // load_theme_textdomain( 'wpml_theme', get_template_directory() . '/languages' );

    add_theme_support( 'woocommerce' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'customize-selective-refresh-widgets' );
    add_theme_support( 'menus' );

    register_nav_menus(
      array(
        'menu-1' => esc_html__( 'Primary', 'news' ),
        'menu-2' => esc_html__( 'footer', 'news' ),
        'menu-3' => esc_html__( 'mobile-man', 'news' ),
        'menu-4' => esc_html__( 'mobile-wooman', 'news' ),
        'menu-5' => esc_html__( 'mobile-brands', 'news' )
      )
    );
  }

  public function enqueue_scripts() {
    wp_enqueue_style( 'news-style', get_stylesheet_uri(), array(), _S_VERSION );
    wp_enqueue_script( 'vue-js', get_template_directory_uri() . '/dist/js/main.js', array(), _S_VERSION, true );
    wp_enqueue_style( 'vue-css', get_stylesheet_directory_uri() . '/dist/js/main.css', null,  _S_VERSION );
  }

  public function widgets_init() {
    require_once get_template_directory() . '/widgets/class-wc-widget-layered-nav.php';
    unregister_widget( 'WC_Widget_Layered_Nav' );
    register_widget( 'My_WC_Widget_Layered_Nav' );
  }
}

new BrandedSite();
