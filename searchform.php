<!-- <form class="c-search" role="search" method="get" id="searchform" action="<?php echo home_url( '/' ) ?>" >
	<input type="text" value="<?php echo get_search_query() ?>" placeholder="Search" name="s" id="s" />
	<button type="submit" class="c-search__button">
		<svg class="is-search" width="21px" height="21px">
      <use xlink:href="#search">
    </svg>
  </button>
</form> -->
<?php
$context = Timber::get_context();
$site = new TimberSite();
Timber::render( 'search-form.twig', $context );
?>