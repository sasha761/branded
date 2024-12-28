jQuery(function ($) {

	// woocommerce
	// $('body').on( 'init', '#rating', function() {
	// 	$( '#rating' )
	// 			.hide()
	// 			.before(
	// 				'<p class="stars">\
	// 					<span>\
	// 						<a class="star-1" href="#">1</a>\
	// 						<a class="star-2" href="#">2</a>\
	// 						<a class="star-3" href="#">3</a>\
	// 						<a class="star-4" href="#">4</a>\
	// 						<a class="star-5" href="#">5</a>\
	// 					</span>\
	// 				</p>'
	// 			);
	// 	})
	// 	.on( 'click', '#respond p.stars a', function() {
	// 		var $star   	= $( this ),
	// 			$rating 	= $( this ).closest( '#respond' ).find( '#rating' ),
	// 			$container 	= $( this ).closest( '.stars' );

	// 		$rating.val( $star.text() );
	// 		$star.siblings( 'a' ).removeClass( 'active' );
	// 		$star.addClass( 'active' );
	// 		$container.addClass( 'selected' );

	// 		return false;
	// 	})
	// 	.on( 'click', '#respond #submit', function() {
	// 		var $rating = $( this ).closest( '#respond' ).find( '#rating' ),
	// 			rating  = $rating.val();

	// 		if ( $rating.length > 0 && ! rating && wc_single_product_params.review_rating_required === 'yes' ) {
	// 			window.alert( wc_single_product_params.i18n_required_rating_text );

	// 			return false;
	// 		}
	// 	});

	// 	$( '.wc-tabs-wrapper, .woocommerce-tabs, #rating' ).trigger( 'init' );


	$(document).ready(function() {

		$('.js-form-register').submit(function(event) {
		  event.preventDefault();
		  var data = $(this).serialize();
		  // console.log('data', data);
		  $.ajax({
		    type: 'POST',
		    url: MyAjax.ajaxurl,
		    dataType: 'text',
		    data: data,
		    beforeSend: function(data) {
		      
		    },
		    success: function(data) {
		      // console.log(data);
		      if (data) {
		      	// console.log('success');
		        $('.js-form-register .js-form-answer')
		          .removeClass('error')
		          .addClass('succes')
		          .text('Вы успешно подписались на обновления');
		      } else {
		      	// console.log('success else');
		      	$('.js-form-answer')
		          .removeClass('succes')
		          .addClass('error')
		          .text('Email уже зарегестрирован');
		      }
		    },
		    error: function(xhr, str) {
		      // console.log('error', str);
		      $('.js-form-answer')
		          .removeClass('succes')
		          .addClass('error')
		          .text('Email уже зарегестрирован');
		    }
		  });
		});

		
	});
});