<?php

if ( ! class_exists( 'Timber' ) ) {
    echo 'Timber not activated. Make sure you activate the plugin in <a href="/wp-admin/plugins.php#timber">/wp-admin/plugins.php</a>';

    return;
}



$context            = Timber::context();
$context['sidebar_widget'] = Timber::get_widgets( 'sidebar-1' );
$WC_Structured_Data = new WC_Structured_Data();

if (ICL_LANGUAGE_CODE == 'uk') {
  $man = 'Чоловікам';
  $wooman = 'Жінкам';
  $children = 'Дітям';
} else {
  $man = 'Мужчинам';
  $wooman = 'Женщинам';
  $children = 'Детям';
}

if ( is_singular( 'product' ) ) {
  global $product;

  $context['post']    = Timber::get_post();
  $product            = wc_get_product( $context['post']->ID );
  // $product_data       = new WC_Product($context['post']->ID);
  
  $WC_Structured_Data->generate_product_data( $product );
  

  $context['product'] = $product;
  $context['stock_status'] = $product->get_stock_status();
  $categories         = get_the_terms( $product->get_id(), 'product_cat' );

  $tags               = wc_get_product_tag_list( $product->get_id() );
  $context['tags']    = $tags;

  $context['rating']  = $product->get_average_rating();
  $context['count']   = $product->get_rating_count();
  //comments
  $comments_args       = array('post_id' => $product->get_id(), 'status' => 'approve'); 
  $context['comments'] = get_comments($comments_args);

  $context['date_publish'] = get_the_date('n-j-Y', $context['post']->ID);
  $context['date_update']  = get_the_modified_date('n-j-Y', $context['post']->ID);
  $context['description']  = get_the_excerpt($product->get_id());
  $context['other_colors'] = get_field('other_colors', $product->get_id());
  $context['video']        = get_field('video', $product->get_id());



  // Variations
  if ($product->is_type( 'variable' )) {
    // wp_enqueue_script( 'wc-add-to-cart-variation' );
    $variations = $product->get_available_variations();

    $variations_json = wp_json_encode( $variations );
    $variations_attr = function_exists( 'wc_esc_json' ) ? wc_esc_json( $variations_json ) : _wp_specialchars( $variations_json, ENT_QUOTES, 'UTF-8', true );

    $context['variation_attr'] = $variations_attr;
    $variations_attributes = $product->get_variation_attributes();
    $context['variations_attributes'] = $variations_attributes;
  }

  $context['prices'] = [
    'price_html' => $product->get_price_html(),
  ];

  // Attributes
  $brand = wc_get_product_terms( $product->get_id(), 'pa_brand', array() ); 
  $size = wc_get_product_terms( $product->get_id(), 'pa_size', array() ); 
  $color = wc_get_product_terms( $product->get_id(), 'pa_color', array() ); 

  $context['attr'] = [
    'brand' => ! empty( $brand ) ? $brand : '',
    'size'  => ! empty( $size ) ? $size : '',
    'color' => ! empty( $color ) ? $color : '',
  ];

  // Получаем ID изображений галереи товара.
  $attachment_ids    = $product->get_gallery_image_ids();
  $context['images'] = ! empty( $attachment_ids ) ? $attachment_ids : [];

  if ( ! empty( $brand ) && isset( $brand[0] ) ) {
    $context['size_chart_desktop'] = get_field( 'size_chart_desktop', $brand[0] );
    $context['size_chart_mobile']  = get_field( 'size_chart_mobile', $brand[0] );
    $context['product_info']       = get_field( 'product_info', $brand[0] );
  } else {
    // Если не найдено ни одного термина или ACF не привязан — заполняем пустыми.
    $context['size_chart_desktop'] = '';
    $context['size_chart_mobile']  = '';
    $context['product_info']       = '';
  }

  $context['cats']    = [];
  // Get related products
  $cat_ids = '';
  foreach ($categories as $key => $category) {
    if ($category->parent) {
      if ($key == 0) $key = $key + 1;
      $cat_ids = $category->term_id;
      $context['cats'][$key] = $category->name;
    } else {
      $context['cats'][0] = $category->name;
    }
  }
  ksort($context['cats']);

  $related_args = [
    'post_type'   => 'product',
    'posts_per_page' => 10,
    'orderby' => 'date',
    'order' => 'DESC',
    'tax_query' => array(
      'relation'=>'AND',
      array(
        'taxonomy'        => 'product_cat',
        'field'           => 'term_id',
        'terms'           => array($cat_ids),
        'operator'        => 'IN',
      ) 
    ),
  ];
  $context['related_products'] = Timber::get_posts($related_args);

  // Restore the context and loop back to the main query loop.
  wp_reset_postdata();
  Timber::render( 'templates/woo/single-product.twig', $context );
} elseif (is_cart()) {

  $timber_post = Timber::query_post();
  $context['post'] = $timber_post;
  // WC()->cart->get_cart();

  Timber::render( 'templates/woo/cart.twig', $context );
} elseif (is_search()) {

  $templates = array( 'search.twig' );

  $context          = Timber::context();

  $context['title'] = get_search_query();
  $context['posts'] = Timber::get_posts();

  $context['query_object'] = get_queried_object();

  $context['sidebar'] = [
      $man => [get_terms([
          'taxonomy' => 'product_cat',
          'hide_empty' => true, 
          'hierarchical' => true,
          'parent' => 16,
      ]), 16],
      $wooman => [get_terms([
          'taxonomy' => 'product_cat',
          'hide_empty' => true, 
          'hierarchical' => true,
          'parent' => 17,
      ]), 17],
      $children => [get_terms([
          'taxonomy' => 'product_cat',
          'hide_empty' => true, 
          'hierarchical' => true,
          'parent' => 18,
      ]), 18],
  ];

  Timber::render( $templates, $context );
} else {
    $context['products'] = Timber::get_posts();
    $context['query_object'] = get_queried_object();
    $context['banner'] = get_field('banner', $context['query_object']);
    $context['acf_title'] = get_field('title', $context['query_object']);
    $context['current_page'] = get_query_var('paged') ? get_query_var('paged') : 1;

    if ($context['acf_title']) {
      $title = $context['acf_title'];
    } else {
      $title = woocommerce_page_title($echo = false);
    }


    if ( is_product_category() || is_shop() || is_tax() ) {
      $query_url = $_SERVER['QUERY_STRING'];
      $term_id = $context['query_object']->term_id;

      $ancestors = get_ancestors( $term_id, 'product_cat' );
      $ancestors[] = $term_id;

      $categories = get_terms( 'product_cat', array(
        'orderby'    => 'none',
        'hide_empty' => false,
        'fields'     => 'names',
        'include'    => $ancestors
      ) );
      $context['categories'] = $categories;


      if ($query_url == '') {
        $context['description'] = term_description( $term_id );
        $context['title'] = $title;
      } else {
        $url = $_SERVER['HTTP_REFERER'];
        parse_str($query_url, $output);

        $title_variable = '';

        if (!empty($output['filter_brand'])) {
          $title_variable .= wc_attribute_label( 'pa_brand' ). ' - ' . attribute_slug_to_title('attribute_pa_brand', $output['filter_brand']) . '. ';
        }

        if (!empty($output['filter_color'])) {
          $title_variable .= wc_attribute_label( 'pa_color' ). ' - ' . attribute_slug_to_title('attribute_pa_color', $output['filter_color']) . '. ';
        }

        if (!empty($output['filter_size'])) {
          $title_variable .= wc_attribute_label( 'pa_size' ). ' - ' . attribute_slug_to_title('attribute_pa_size', $output['filter_size']) . '. ';
        }
        
        if (!empty($output['filter_sezon'])) {
          $title_variable .= wc_attribute_label( 'pa_sezon' ). ' - ' . attribute_slug_to_title('attribute_pa_sezon', $output['filter_sezon']) . '. ';
        }

        switch(!empty($output['orderby'])){
          case 'default':
              break;
          case 'popularity':  
              $title_variable .= '| Популярные';
              break;
          case 'price':
              $title_variable .= '| Цены по возрастанию';
              break;
          case 'price-desc':
              $title_variable .= '| Цены по убыванию';
              break;
          case 'date':
              $title_variable .= '| Новые';
              break;
          case 'rating':
              $title_variable .= '| Рейтинговые';
              break;
          default:   
        }

        $context['title'] = $title . '. ' . $title_variable;
      }
    }


    $context['sidebar'] = [
        $man => [get_terms([
            'taxonomy' => 'product_cat',
            'hide_empty' => true, 
            'hierarchical' => true,
            'parent' => 16,
        ]), 16],
        $wooman => [get_terms([
            'taxonomy' => 'product_cat',
            'hide_empty' => true, 
            'hierarchical' => true,
            'parent' => 17,
        ]), 17],
        $children => [get_terms([
            'taxonomy' => 'product_cat',
            'hide_empty' => true, 
            'hierarchical' => true,
            'parent' => 18,
        ]), 18],
    ];
   
    Timber::render( 'templates/woo/archive.twig', $context );
}
