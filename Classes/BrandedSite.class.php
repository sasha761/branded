<?php
use Timber\ImageHelper;
use Timber\Menu;
use Timber\Site;
use Timber\URLHelper;
use Twig\Extension\StringLoaderExtension;
use Twig\TwigFilter;

/**
 * Start Timber Support
 */
class BrandedSite extends Site {

  /**
   * Add timber support.
   */
  public function __construct() {
    parent::__construct();

    include( get_template_directory() . '/inc/language.php' );
    add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
    add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
    add_action( 'widgets_init', array( $this, 'widgets_init' ) );
    add_filter( 'timber/context', array( $this, 'add_to_context' ) );
    add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
    add_action( 'admin_head',  array( $this, 'admin_style') );

    add_filter( 'gutenberg_use_widgets_block_editor', '__return_false' );
    add_filter( 'use_widgets_block_editor', '__return_false' );
    add_filter( 'auto_update_plugin', '__return_false' );
  }

  public function theme_supports() {
    load_theme_textdomain( 'news', get_template_directory() . '/languages' );
    load_theme_textdomain( 'wpml_theme', get_template_directory() . '/languages' );

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
        'menu-5' => esc_html__( 'mobile-brands', 'news' ),
        'menu-6' => esc_html__( 'mobile-child', 'news' ),
      )
    );
  }

  public function enqueue_scripts() {
    wp_enqueue_style( 'news-style', get_stylesheet_uri(), array(), _S_VERSION );

    wp_enqueue_script( 'pure-js', get_template_directory_uri() . '/dist/js/index2.js', array(), _S_VERSION, true );
    
    wp_localize_script( 'pure-js', 'ajax', array(
      'wc_ajax_url' => WC_AJAX::get_endpoint( '%%endpoint%%' ),
      'url' => admin_url('admin-ajax.php')
    ));

    $extra_params_for_rest_uri = apply_filters( 'woo_variation_swatches_rest_add_extra_params', array() );
    if ( $extra_params_for_rest_uri ) {
      $extra_params_for_rest_uri = map_deep( $extra_params_for_rest_uri, 'sanitize_text_field' );
      wp_add_inline_script( 'woo-variation-swatches', sprintf( 'wp.apiFetch.use( window.createMiddlewareForExtraQueryParams(%s) )', wp_json_encode( $extra_params_for_rest_uri ) ) );
    }

    wp_localize_script( 'pure-js', 'woo_variation_swatches_options',  apply_filters( 'woo_variation_swatches_js_options', array(
      'show_variation_label'      => wc_string_to_bool( woo_variation_swatches()->get_option( 'show_variation_label', 'yes' ) ),
      'clear_on_reselect'         => wc_string_to_bool( woo_variation_swatches()->get_option( 'clear_on_reselect', 'no' ) ),
      'variation_label_separator' => sanitize_text_field( woo_variation_swatches()->get_option( 'variation_label_separator', ':' ) ),
      'is_mobile'                 => wp_is_mobile(),
      'show_variation_stock'      => woo_variation_swatches()->is_pro() && wc_string_to_bool( woo_variation_swatches()->get_option( 'show_variation_stock_info', 'no' ) ),
      'stock_label_threshold'     => absint( woo_variation_swatches()->get_option( 'stock_label_display_threshold', '5' ) ),
      'cart_redirect_after_add'   => get_option( 'woocommerce_cart_redirect_after_add', 'no' ),
      'enable_ajax_add_to_cart'   => get_option( 'woocommerce_enable_ajax_add_to_cart', 'yes' ),
      'cart_url'                  => apply_filters( 'woocommerce_add_to_cart_redirect', wc_get_cart_url(), null ),
      'is_cart'                   => is_cart(),
    )));

    wp_localize_script( 'pure-js', 'wc_add_to_cart_variation_params', array(
      'wc_ajax_url'                      => WC_AJAX::get_endpoint( '%%endpoint%%' ),
      'i18n_no_matching_variations_text' => __( 'Sorry, no products matched your selection...', 'woocommerce' ),
      'i18n_make_a_selection_text'       => __( 'Please select some product options before adding...', 'woocommerce' ),
      'i18n_unavailable_text'            => __( 'Sorry, this product is unavailable...', 'woocommerce' ),
      'i18n_reset_alert_text'            => __( 'Your selection has been reset...', 'woocommerce' ),
      // ... любые другие поля, которые нужны вашему коду
    ));
  }

  public function add_to_context( $context ) {
    ob_start();
    $context['menu']               = Timber::get_menu( 'menu-1' );
    $context['footer_menu']        = Timber::get_menu( 'menu-2' );
    $context['mobile_menu_man']    = Timber::get_menu( 'menu-3' );
    $context['mobile_menu_wooman'] = Timber::get_menu( 'menu-4' );
    $context['mobile_menu_brands'] = Timber::get_menu( 'menu-5' );
    $context['mobile_menu_child']  = Timber::get_menu( 'menu-6' );
    $context['currency']           = get_woocommerce_currency_symbol();
    $context['is_mobile']          = wp_is_mobile();
    $context['minicart']['count']  = WC()->cart->cart_contents_count;
    $context['options']            = get_fields('option');
    
    if ( function_exists( 'icl_get_languages' ) ) {
      $context['current_lang']      = ICL_LANGUAGE_CODE;
      $context['language_code']     = icl_get_languages();
    }
    
    if ( function_exists( 'yoast_breadcrumb' ) ) {
      $context['breadcrumbs'] = yoast_breadcrumb('<nav class="c-breadcrumbs">','</nav>', false );
    }

    return $context;
  }

  public function admin_style(){
    wp_enqueue_style( 'style-admin', get_template_directory_uri() . '/admin-style.css', array(), _S_VERSION );
  }

  public function widgets_init() {
    register_sidebar(array(
      'name'          => esc_html__( 'Sidebar', 'news' ),
      'id'            => 'sidebar-1',
      'description'   => esc_html__( 'Add widgets here.', 'news' ),
      'before_widget' => '<div id="%1$s" class="widget %2$s">',
      'after_widget'  => '</div>',
    ));
    register_sidebar(array(
      'name'          => esc_html__( 'Recently', 'news' ),
      'id'            => 'recently',
      'description'   => esc_html__( 'Add widgets here.', 'news' ),
      'before_widget' => '<div id="%1$s" class="widget %2$s">',
      'after_widget'  => '</div>',
    ));

    require_once get_template_directory() . '/widgets/class-wc-widget-layered-nav.php';
    unregister_widget( 'WC_Widget_Layered_Nav' );
    register_widget( 'My_WC_Widget_Layered_Nav' );
  }

  public function towebphq($src) {
    return ImageHelper::img_to_webp($src, 100, true);
  }

  public function add_to_twig( $twig ) {
    $twig->addExtension( new StringLoaderExtension() );

    $twig->addFilter( new TwigFilter( 'translateString', array( $this, 'translateString' ) ) );
    $twig->addFilter( new TwigFilter( 'is_current_url', function ($link) {
        return (URLHelper::get_current_url() == $link) ? true : false;
    }));
    $twig->addFilter( new TwigFilter('towebphq', [$this, 'towebphq']) );
    $twig->addFilter( new TwigFilter('tojpghq', [$this, 'tojpghq']) );

    return $twig;
  }
  
  public function translateString( $string, $name ) {
    return apply_filters( 'wpml_translate_single_string', $string, 'branded', $name );
  }
}

new BrandedSite();
