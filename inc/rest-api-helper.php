<?php
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
// use Intervention\Image\Encoders\WebpEncoder;
// use Intervention\Image\Encoders\AutoEncoder;

add_action( 'rest_api_init', function () {
  $namespace = '/rest_api/v1';
  register_rest_route( $namespace, '/set_seo_identifiers/', [
    'methods' => 'POST',
    'callback' => 'set_seo_identifiers',
  ]);
});

function get_product_short_info($product, $id) {
  
  $brand = wc_get_product_terms( $id, 'pa_brand', array() ); 
  $attachment_ids = $product->get_gallery_image_ids($id);
  $post['id']                = $id;
  $post['name']              = $product->get_title(); 
  $post['price']             = $product->get_price();
  $post['price_html']        = $product->get_price_html();
  $post['is_stock']          = $product->get_stock_status();
  $post['post_attr_size']    = $product->get_attribute('size');
  $post['post_attr_color']   = $product->get_attribute('color');
  $post['post_attr_brand']   = $brand[0]->name;
  $post['post_link_brand']   = $brand[0]->slug;
  $post['short_description'] = wpautop($product->get_short_description()); 
  $post['description']       = wpautop(get_the_excerpt($id));
  $post['post_img_l']        = get_the_post_thumbnail_url($id, 'archive_xl'); 
  $post['post_img_m']        = get_the_post_thumbnail_url($id, 'archive_md'); 
  $post['post_img_xl']       = get_the_post_thumbnail_url($id, 'large'); 
  $post['video']             = get_field('video', $id); 
  $post['permalink']         = get_permalink($id);   
  $post['other_colors']      = get_field('other_colors', $id);
  $post['is_sale']           = false;
  $post['stockStatus']       = $post['is_stock'] == 'outofstock' ? __('Out of stock', 'branded') : __('In stock', 'branded');
  $post['percent']           = false;
  $post['is_sale']           = false;

  
  if ($product->is_on_sale()) {
    $price_sale      = $product->get_variation_sale_price() ?: $product->get_sale_price();
    $price_regular   = $product->get_variation_regular_price() ?: $product->get_regular_price();
    $post['percent'] = round(($price_regular - $price_sale) / $price_regular * 100, 0);
    $post['is_sale'] = true;
  }
  if (!empty($attachment_ids)) {
    foreach ($attachment_ids as $index => $attachment_id) {
      $post['images'][$index] = wp_get_attachment_url($attachment_id);
    }
  }
  if ($product->is_type( 'variable' )) {
    $variations = $product->get_available_variations();
    $result = array();

    foreach ($variations as $variation) {
      $size_attribute = wc_get_product($variation['variation_id'])->get_attribute('size');

      $variation_data = array(
        'id' => $variation['variation_id'],
        'name' => $size_attribute,
        'availability' => $variation['is_in_stock']
      );
      
      $result[] = $variation_data;
    }

    $post['size_attribute'] = $result;
  }

  return $post;
}

function get_category_details_by_slug( $slug ) {
  // Получаем объект термина по slug
  $term = get_term_by( 'slug', $slug, 'product_cat' );

  // Проверяем, успешно ли был получен термин
  if ( ! $term || is_wp_error( $term ) ) {
    return null;
  }

  // Получаем ID и название категории
  $category_id = $term->term_id;
  $category_name = $term->name;

  $acf_title = get_field('title', 'product_cat_' . $category_id);


  // Ищем родительскую категорию, если есть
  $parent_category = null;
  if ( $term->parent ) {
    $parent_term = get_term( $term->parent, 'product_cat' );
    if ( ! is_wp_error( $parent_term ) ) {
        $parent_category = $parent_term->name;
    }
  }

  // Возвращаем массив с данными о категории
  return array(
    'id' => $category_id,
    'name' => $category_name,
    'parent' => $parent_category,
    'acf_title' => $acf_title,
  );
}


function resize_and_convert_to_webp($path, $width, $height) {
  $manager = new ImageManager(new Driver());

  $image = $manager->read('wp-content/themes/news/src/img/16581.png'); // open an image file
  $image->resize($width, $height);

  $encoded = $image->toJpg();

  $encoded->save('wp-content/themes/news/src/img/resized_image.jpg');

  $encoded = $image->toWebp();

  $encoded->save('wp-content/themes/news/src/img/resized_image.webp');

  // $image = Image::make($image_url);

  // // Ресайз изображения
  // $resized_image = $image->fit(180, 180);

  // // Сохранение в формате JPG
  // $jpg_path = 'path/to/resized_images/' . uniqid() . '.jpg';
  // $resized_image->save($jpg_path, 80);  // Качество сохранения: 80

  // // Сохранение в формате WebP
  // $webp_path = 'path/to/resized_images/' . uniqid() . '.webp';
  // $resized_image->save($webp_path, 80, 'webp');  // Качество сохранения: 80

  return [
      'jpg' => $jpg_path,
      'webp' => $webp_path,
  ];
}

// resize_and_convert_to_webp();


function set_seo_identifiers(WP_REST_Request $request) {

  $posts = get_posts( array(
    'post_type'   => 'product',
    'posts_per_page' => -1,
    'orderby'     => 'date',
    'order'       => 'ASC',
    'meta_key'    => '',
    'meta_value'  => '',
    // 'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
  ) );

  $gtin = ''; // example: 9504000059424
  $mpn  = ''; // example: 00638HAY
  // $brand_code;

  $brands = [
    'elison-kids'  => 1000,
    'wearme'       => 2000,
    'german-kids'  => 3000,
    'gruf'         => 4000,
    'merezhyvo'    => 5000,
    'los-halconez' => 6000,
    'veros'        => 7000,
    'wox-clothing' => 8000,
    'black-limit'  => 9000,
    'flex'         => 10000,
  ];

  $brands_key = [
    'elison-kids'  => 'elk',
    'wearme'       => 'wm',
    'german-kids'  => 'gek',
    'gruf'         => 'gru',
    'merezhyvo'    => 'mer',
    'los-halconez' => 'los',
    'veros'        => 'vs',
    'wox-clothing' => 'wox',
    'black-limit'  => 'bl',
    'flex'         => 'fl',
  ];

  foreach ($posts as $key => $post) {
    $post->ID;
    $brand = wc_get_product_terms( $post->ID, 'pa_brand', array('fields' => 'slugs') ); 
    $get_sku = get_post_meta( $post->ID, '_sku', true );
    $get_mpn = get_post_meta( $post->ID, 'wpseo_global_identifier_values', true );

    $mpn = $brands[$brand[0]]++;

    $seo_identifiers = [
      'gtin' => $gtin,
      'mpn' => $mpn . $brands_key[$brand[0]],
    ];


    if ($get_mpn['mpn'] == "") {
      update_post_meta( $post->ID, 'wpseo_global_identifier_values', $seo_identifiers );
    }

    if ($get_sku == "") {
      update_post_meta( $post->ID, '_sku', $mpn );
    }
    
  }
}
