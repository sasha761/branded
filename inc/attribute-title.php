<?php

function attribute_slug_to_title( $attribute ,$slug ) {
  // global $woocommerce;
  if ( taxonomy_exists( esc_attr( str_replace( 'attribute_', '', $attribute ) ) ) ) {
    $term = get_term_by( 'slug', $slug, esc_attr( str_replace( 'attribute_', '', $attribute ) ) );
    if ( ! is_wp_error( $term ) && $term->name )
      $value = $term->name;
  } else {
    $value = apply_filters( 'woocommerce_variation_option_name', $slug );
  }
  return $value;
}