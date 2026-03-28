<?php
// use Intervention\Image\ImageManager;
// use Intervention\Image\Drivers\Gd\Driver;
// use Intervention\Image\Encoders\WebpEncoder;
// use Intervention\Image\Encoders\AutoEncoder;

add_action('rest_api_init', function () {
  $namespace = '/rest_api/v1';
  register_rest_route($namespace, '/set_seo_identifiers/', [
    'methods' => 'POST',
    'callback' => 'set_seo_identifiers',
    'permission_callback' => function() {
      return current_user_can('manage_options');
    },
  ]);
});

function rest_api_to_frontend_url($url): string
{
  if (!is_string($url)) {
    return '';
  }

  $url = trim($url);

  if ($url === '') {
    return '';
  }

  $frontend_domain = defined('BRANDED_FRONTEND_URL')
    ? trim((string) BRANDED_FRONTEND_URL)
    : '';

  if ($frontend_domain === '') {
    $frontend_domain = home_url('/');
  } elseif (!preg_match('#^https?://#i', $frontend_domain)) {
    $frontend_domain = 'https://' . ltrim($frontend_domain, '/');
  }

  $frontend_domain = rtrim($frontend_domain, '/');
  $backend_domain = rtrim(home_url('/'), '/');

  // Если пришёл относительный путь вида /catalog/test
  if (strpos($url, '/') === 0 && strpos($url, '//') !== 0) {
    if (strpos($url, '/wp-content/uploads/') === 0) {
      return $backend_domain . $url;
    }

    return $frontend_domain . $url;
  }

  $parts = wp_parse_url($url);

  // Если URL не распарсился или это не абсолютный URL — возвращаем как есть
  if ($parts === false || empty($parts['host'])) {
    return $url;
  }

  $backend_hosts = array_filter([
    wp_parse_url(home_url('/'), PHP_URL_HOST),
    wp_parse_url(site_url('/'), PHP_URL_HOST),
  ]);

  $url_host = strtolower((string) $parts['host']);
  $allowed_hosts = array_map('strtolower', $backend_hosts);

  // Внешние ссылки не трогаем
  if (!in_array($url_host, $allowed_hosts, true)) {
    return $url;
  }

  $path = $parts['path'] ?? '';
  $query = isset($parts['query']) ? '?' . $parts['query'] : '';
  $fragment = isset($parts['fragment']) ? '#' . $parts['fragment'] : '';

  if (strpos($path, '/wp-content/uploads/') === 0) {
    return $backend_domain . $path . $query . $fragment;
  }

  return $frontend_domain . $path . $query . $fragment;
}

function rest_api_to_path($url): string
{
  if (!is_string($url) || trim($url) === '') {
    return '';
  }

  $parts = wp_parse_url(trim($url));

  if ($parts === false) {
    return $url;
  }

  $path = $parts['path'] ?? '';
  $query = isset($parts['query']) ? '?' . $parts['query'] : '';
  $fragment = isset($parts['fragment']) ? '#' . $parts['fragment'] : '';

  return $path . $query . $fragment;
}

function rest_api_prepare_endpoint_response($value)
{
  if (is_string($value)) {
    $value = trim($value);

    if ($value === '' || !preg_match('#^https?://#i', $value)) {
      return $value;
    }

    return rest_api_to_frontend_url($value);
  }

  if (is_array($value)) {
    foreach ($value as $key => $item) {
      $value[$key] = rest_api_prepare_endpoint_response($item);
    }

    return $value;
  }

  if (is_object($value)) {
    foreach ($value as $key => $item) {
      $value->{$key} = rest_api_prepare_endpoint_response($item);
    }
  }

  return $value;
}

function rest_api_rewrite_frontend_urls_in_custom_endpoints($response, $server, $request)
{
  if (!($request instanceof WP_REST_Request)) {
    return $response;
  }

  $route = (string) $request->get_route();

  if ($route === '' || !preg_match('#^/?(api|rest_api)/#', $route)) {
    return $response;
  }

  return rest_api_prepare_endpoint_response($response);
}

add_filter('rest_pre_echo_response', 'rest_api_rewrite_frontend_urls_in_custom_endpoints', 10, 3);

function get_product_short_info($product, $id)
{

  $brand = wc_get_product_terms($id, 'pa_brand', array());

  // Добавляем проверку на существование бренда
  $brand_name = !empty($brand[0]) ? $brand[0]->name : '';
  $brand_slug = !empty($brand[0]) ? $brand[0]->slug : '';
  $brand_url = !empty($brand[0]) ? rest_api_to_frontend_url(get_term_link($brand[0]->term_id, 'pa_brand')) : '';


  $attachment_ids = $product->get_gallery_image_ids($id);
  $post['brand'] = $brand;
  $post['id'] = $id;
  $post['name'] = $product->get_title();
  $post['price'] = $product->get_price();
  $post['price_html'] = $product->get_price_html();
  $post['is_stock'] = $product->get_stock_status();
  $post['post_attr_size'] = $product->get_attribute('size');
  $post['post_attr_color'] = $product->get_attribute('color');
  $post['post_attr_brand'] = $brand_name;
  $post['post_link_brand'] = $brand_slug;
  $post['post_brand_url'] = $brand_url; // Добавляем ссылку на бренд
  $post['post_brand_path'] = rest_api_to_path($brand_url);
  $post['short_description'] = wpautop($product->get_short_description());
  $post['description'] = wpautop(get_the_excerpt($id));
  $post['post_img_l'] = get_the_post_thumbnail_url($id, 'archive_xl');
  $post['post_img_m'] = get_the_post_thumbnail_url($id, 'archive_md');
  $post['post_img_xl'] = get_the_post_thumbnail_url($id, 'large');
  $post['video'] = get_field('video', $id);
  // $post['permalink'] = get_permalink($id);
  $post['permalink'] = rest_api_to_frontend_url(get_permalink($id));
  $post['path'] = rest_api_to_path(get_permalink($id));
  $post['other_colors'] = get_field('other_colors', $id);
  $post['is_sale'] = false;
  // $post['stockStatus'] = $post['is_stock'] == 'outofstock' ? __('Out of stock', 'branded') : __('In stock', 'branded');
  $post['stockStatus'] = $post['is_stock'];
  $post['percent'] = false;
  $post['is_sale'] = false;


  if ($product->is_on_sale()) {
    $price_sale = $product->get_variation_sale_price() ?: $product->get_sale_price();
    $price_regular = $product->get_variation_regular_price() ?: $product->get_regular_price();
    $post['percent'] = round(($price_regular - $price_sale) / $price_regular * 100, 0);
    $post['is_sale'] = true;
  }
  if (!empty($attachment_ids)) {
    foreach ($attachment_ids as $index => $attachment_id) {
      $post['images'][$index] = wp_get_attachment_url($attachment_id);
    }
  }
  if ($product->is_type('variable')) {
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
  } else {
    $post['size_attribute'] = [
      (object)[
        'availability' => true,
        'id' => $id,
        'name' => 'one size',
      ]
    ];
  }

  return $post;
}

function get_category_details_by_slug($slug)
{
  // Получаем объект термина по slug
  $term = get_term_by('slug', $slug, 'product_cat');

  // Проверяем, успешно ли был получен термин
  if (!$term || is_wp_error($term)) {
    return null;
  }

  // Получаем ID и название категории
  $category_id = $term->term_id;
  $category_name = $term->name;

  $acf_title = get_field('title', 'product_cat_' . $category_id);

  $category_url = get_term_link($term, 'product_cat'); // Получаем URL категории


  // Ищем родительскую категорию, если есть
  $parent_category = null;
  if ($term->parent) {
    $parent_term = get_term($term->parent, 'product_cat');
    if (!is_wp_error($parent_term)) {
      $parent_category = $parent_term->name;
    }
  }

  $description = term_description($category_id, 'product_cat');

  // Возвращаем массив с данными о категории
  return array(
    'id' => $category_id,
    'name' => $acf_title ? $acf_title : $category_name,
    'parent' => $parent_category,
    'url' => rest_api_to_frontend_url($category_url),
    'path' => rest_api_to_path($category_url),
    'description' => $description ?: '',
  );

  // return array(
  //   'id' => $category_id,
  //   'name' => $acf_title ? $acf_title : $category_name,
  //   'parent' => $parent_category,
  //   'url' => $category_url,
  //   'description' => $description ?: '',
  // );
}

function get_product_categories($id)
{
  $categories = get_the_terms($id, 'product_cat');
  $categories_arr = [];

  if ($categories && !is_wp_error($categories)) {
    foreach ($categories as $key => $category) {
      if ($category->parent) {
        if ($key == 0)
          $key = $key + 1;
        $categories_arr[$key] = $category->name;
      } else {
        $categories_arr[0] = $category->name;
      }
    }
    ksort($categories_arr);
  }

  return implode(", ", $categories_arr);
}

function get_product_brand($id)
{
  $brand = wc_get_product_terms($id, 'pa_brand', array());
  return $brand && !is_wp_error($brand) ? $brand[0] : null;
}


function get_resized_image_url($image_url, $width = null, $height = null, $position = null, $fallback_size = 'thumbnail') {
  if (!$image_url) {
    return null;
  }

  // Преобразуем URL в локальный путь
  $image_path = str_replace(home_url(), ABSPATH, $image_url);

  // Получаем расширение файла (jpg, png, webp)
  $extension = pathinfo($image_path, PATHINFO_EXTENSION);

  // Определяем позиционирование кадрирования (если передано)
  $crop_suffix = $position ? "-c-$position" : '';

  // Формируем пути к уменьшенным изображениям Timber (с разными расширениями)
  $resized_jpg = preg_replace('/\.' . $extension . '$/', "-{$width}x{$height}{$crop_suffix}.jpg", $image_path);
  $resized_webp = preg_replace('/\.' . $extension . '$/', "-{$width}x{$height}{$crop_suffix}.webp", $image_path);

  // Проверяем, существует ли уменьшенная версия
  if (file_exists($resized_jpg)) {
    return str_replace(ABSPATH, home_url(), $resized_jpg);
  } elseif (file_exists($resized_webp)) {
    return str_replace(ABSPATH, home_url(), $resized_webp);
  } 

  // Если указан предустановленный размер (например, single_xl, archive_xl)
  if (in_array($fallback_size, ['single_xl', 'archive_md', 'archive_xl', 'full', 'thumbnail'])) {
    $attachment_id = attachment_url_to_postid($image_url);
    if ($attachment_id) {
      $image_src = wp_get_attachment_image_src($attachment_id, $fallback_size);
      if ($image_src) {
        return $image_src[0]; // URL fallback-изображения
      }
    }
  }

  return $image_url; // Если ничего не найдено, возвращаем оригинальное изображение
}



function set_seo_identifiers(WP_REST_Request $request)
{

  $posts = get_posts(array(
    'post_type' => 'product',
    'posts_per_page' => -1,
    'orderby' => 'date',
    'order' => 'ASC',
    'meta_key' => '',
    'meta_value' => '',
    // 'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
  ));

  $gtin = ''; // example: 9504000059424
  $mpn = ''; // example: 00638HAY
  // $brand_code;

  $brands = [
    'elison-kids' => 1000,
    'wearme' => 2000,
    'german-kids' => 3000,
    'gruf' => 4000,
    'merezhyvo' => 5000,
    'los-halconez' => 6000,
    'veros' => 7000,
    'wox-clothing' => 8000,
    'black-limit' => 9000,
    'flex' => 10000,
  ];

  $brands_key = [
    'elison-kids' => 'elk',
    'wearme' => 'wm',
    'german-kids' => 'gek',
    'gruf' => 'gru',
    'merezhyvo' => 'mer',
    'los-halconez' => 'los',
    'veros' => 'vs',
    'wox-clothing' => 'wox',
    'black-limit' => 'bl',
    'flex' => 'fl',
  ];

  foreach ($posts as $key => $post) {
    $post->ID;
    $brand = wc_get_product_terms($post->ID, 'pa_brand', array('fields' => 'slugs'));
    $get_sku = get_post_meta($post->ID, '_sku', true);
    $get_mpn = get_post_meta($post->ID, 'wpseo_global_identifier_values', true);

    $mpn = $brands[$brand[0]]++;

    $seo_identifiers = [
      'gtin' => $gtin,
      'mpn' => $mpn . $brands_key[$brand[0]],
    ];


    if ($get_mpn['mpn'] == "") {
      update_post_meta($post->ID, 'wpseo_global_identifier_values', $seo_identifiers);
    }

    if ($get_sku == "") {
      update_post_meta($post->ID, '_sku', $mpn);
    }

  }
}


// add_action('rest_api_init', function () {
//   register_rest_route('custom/v1', '/products-by-brands', [
//     'methods' => 'GET',
//     'callback' => 'get_products_by_brands',
//     'permission_callback' => '__return_true',
//   ]);
// });

// function get_products_by_brands()
// {
//   $brands = [
//     // 'monoshop-uk',
//     // 'monoshop',
//     // 'merezhyvo-uk',
//     // 'merezhyvo',
//     // 'luxemon-uk',
//     // 'luxemon',
//     // 'one-face-uk',
//     // 'one-face',
//     // 'lexie-uk',
//     // 'lexie',
//     // 'german-kids-uk',
//     // 'german-kids',
//     // 'fason-uk',
//     // 'fason',
//     // 'dobro-brand-uk',
//     // 'dobro-brand',
//     // 'elison-kids-uk',
//     // 'elison-kids',
//     // 'zlata-pivtorak-uk',
//     // 'zlata-pivtorak',
//     // 'kasandra-uk',
//     // 'kasandra'
//     // 'be-om', 
//     // 'be-om-uk'
//   ];

//   $args = [
//     'post_type' => 'product',
//     'post_status' => 'publish',
//     'posts_per_page' => -1,
//     'tax_query' => [
//         [
//           'taxonomy' => 'pa_brand', // Убедитесь, что slug атрибута верный
//           'field' => 'slug',
//           'terms' => $brands,
//         ],
//     ],
//     'suppress_filters' => false, // Включаем WPML фильтрацию
//   ];

//   $query = new WP_Query($args);
//   $products = [];

//   if ($query->have_posts()) {
//     while ($query->have_posts()) {
//       $query->the_post();

//       $product_id = apply_filters('wpml_object_id', get_the_ID(), 'product', true, 'uk');

//       if ($product_id) {
//         // Устанавливаем статус "нет в наличии" для основного товара
//         update_post_meta($product_id, '_stock_status', 'outofstock');

//         // Если товар вариативный, обновляем статус для всех его вариаций
//         if (get_post_type($product_id) === 'product') {
//           $children = get_children([
//             'post_parent' => $product_id,
//             'post_type' => 'product_variation',
//             'post_status' => 'publish',
//           ]);

//           if (!empty($children)) {
//             foreach ($children as $child) {
//               update_post_meta($child->ID, '_stock_status', 'outofstock');
//             }
//           }
//         }
//       }

//       $products[] = get_permalink($product_id);
//     }
//   }

//   wp_reset_postdata();

//   $product_count = count($products);

//   return [
//       'count' => $product_count,
//       'products' => $products,
//   ];
// }


// add_action('rest_api_init', function () {
//     register_rest_route('custom/v1', '/delete-products-by-brands', [
//         'methods' => 'GET',
//         'callback' => 'delete_products_by_brands',
//         'permission_callback' => '__return_true',
//     ]);
// });

// function delete_products_by_brands() {
//     // Бренды, товары которых нужно удалить
//     $brands = [
//         'Kasandra', 'Fason', 'sammy-icon', 'zlata-pivtorak', 'dobro-brand'
//     ];

//     $args = [
//         'post_type' => 'product',
//         'post_status' => 'publish',
//         'posts_per_page' => -1,
//         'tax_query' => [
//             [
//                 'taxonomy' => 'pa_brand',
//                 'field' => 'slug',
//                 'terms' => $brands,
//             ],
//         ],
//         'suppress_filters' => false, // Включаем WPML фильтрацию
//     ];

//     $query = new WP_Query($args);
//     $deleted_products = [];
//     $deleted_images = 0;
//     $redirects_set = 0;

//     if ($query->have_posts()) {
//         global $sitepress;
        
//         while ($query->have_posts()) {
//             $query->the_post();
//             $product_id = get_the_ID();
//             $product = wc_get_product($product_id);
            
//             if (!$product) {
//                 continue;
//             }
            
//             // Получаем URL товара для создания редиректа
//             $product_url = get_permalink($product_id);
            
//             // Получаем ID родительской категории
//             $category_ids = $product->get_category_ids();
//             $redirect_url = home_url(); // По умолчанию на главную
            
//             if (!empty($category_ids)) {
//                 $parent_category_id = $category_ids[0]; // Берем первую категорию
//                 $redirect_url = get_term_link($parent_category_id, 'product_cat');
                
//                 if (is_wp_error($redirect_url)) {
//                     $redirect_url = home_url(); // Если ошибка, редирект на главную
//                 }
//             }
            
//             // Получаем все языковые версии товара
//             $trid = $sitepress->get_element_trid($product_id, 'post_product');
//             $translations = $sitepress->get_element_translations($trid, 'post_product');
            
//             foreach ($translations as $lang => $translation) {
//                 if (empty($translation->element_id)) {
//                     continue;
//                 }
                
//                 $translation_id = $translation->element_id;
//                 $translation_product = wc_get_product($translation_id);
                
//                 if (!$translation_product) {
//                     continue;
//                 }
                
//                 // Получаем URL переведенного товара для редиректа
//                 $translation_url = get_permalink($translation_id);
                
//                 // Удаляем изображения товара
//                 $image_ids = [];
                
//                 // Основное изображение
//                 $main_image_id = $translation_product->get_image_id();
//                 if ($main_image_id) {
//                     $image_ids[] = $main_image_id;
//                 }
                
//                 // Галерея изображений
//                 $gallery_image_ids = $translation_product->get_gallery_image_ids();
//                 if (!empty($gallery_image_ids)) {
//                     $image_ids = array_merge($image_ids, $gallery_image_ids);
//                 }
                
//                 // Если товар вариативный, получаем изображения вариаций
//                 if ($translation_product->is_type('variable')) {
//                     $variations = $translation_product->get_children();
//                     if (!empty($variations)) {
//                         foreach ($variations as $variation_id) {
//                             $variation = wc_get_product($variation_id);
//                             if ($variation) {
//                                 $variation_image_id = $variation->get_image_id();
//                                 if ($variation_image_id) {
//                                     $image_ids[] = $variation_image_id;
//                                 }
//                             }
//                         }
//                     }
//                 }
                
//                 // Удаляем все найденные изображения
//                 foreach ($image_ids as $image_id) {
//                     // Это удалит оригинал и все размеры миниатюр
//                     wp_delete_attachment($image_id, true);
//                     $deleted_images++;
//                 }
                
//                 // Добавляем редирект
//                 add_redirect_rule($translation_url, $redirect_url);
//                 $redirects_set++;
                
//                 // Удаляем товар
//                 wp_delete_post($translation_id, true);
//                 $deleted_products[] = $translation_url;
//             }
//         }
//     }
    
//     wp_reset_postdata();
    
//     return [
//         'deleted_products_count' => count($deleted_products),
//         'deleted_products' => $deleted_products,
//         'deleted_images_count' => $deleted_images,
//         'redirects_set' => $redirects_set
//     ];
// }


// function add_redirect_rule($source_url, $target_url) {
//     // Проверяем наличие плагина Redirection
//     if (class_exists('Red_Item')) {
//         // Получаем пути URL без домена
//         $source = wp_parse_url($source_url, PHP_URL_PATH);
//         $target = wp_parse_url($target_url, PHP_URL_PATH);
        
//         // Проверяем на пустые значения
//         if (empty($source)) $source = '/';
//         if (empty($target)) $target = '/';
        
//         // Создаем редирект через API плагина Redirection
//         // Группа с ID 1 - это обычно группа "Redirection" по умолчанию
//         $details = [
//             'url'         => $source,
//             'action_data' => ['url' => $target],
//             'action_type' => 'url',
//             'match_type'  => 'url',
//             'regex'       => false,
//             'group_id'    => 1,
//             'status'      => 'enabled',
//             'position'    => 0,
//             'action_code' => 301
//         ];
        
//         // Используем правильный метод создания редиректа
//         if (method_exists('Red_Item', 'create')) {
//             $result = Red_Item::create($details);
//             return !is_wp_error($result);
//         } else {
//             // Альтернативный способ, если метод create недоступен
//             global $wpdb;
//             $table_name = $wpdb->prefix . 'redirection_items';
            
//             // Проверяем существование таблицы
//             if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") == $table_name) {
//                 $data = [
//                     'url'         => $source,
//                     'match_url'   => $source,
//                     'action_type' => 'url',
//                     'action_data' => serialize(['url' => $target]),
//                     'regex'       => 0,
//                     'group_id'    => 1,
//                     'status'      => 'enabled',
//                     'position'    => 0,
//                     'last_count'  => 0,
//                     'action_code' => 301,
//                     'match_type'  => 'url',
//                 ];
                
//                 $wpdb->insert($table_name, $data);
//                 return $wpdb->insert_id > 0;
//             }
//         }
//     }
    
//     // Если Redirection не работает, используем стандартный WordPress редирект
//     // $redirects = get_option('custom_product_redirects', []);
//     // $source_path = wp_parse_url($source_url, PHP_URL_PATH);
//     // $redirects[$source_path] = $target_url;
//     // update_option('custom_product_redirects', $redirects);
    
//     // // Проверяем, добавлен ли уже обработчик редиректов
//     // if (!has_action('template_redirect', 'handle_custom_redirects')) {
//     //     add_action('template_redirect', 'handle_custom_redirects');
//     // }
    
//     // return true;
// }
