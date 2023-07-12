import $ from "jquery";
import jQuery from "jquery";
// const $ = require('jquery');
// const jQuery = require('jquery');
window.jQuery = $;
window.$ = $;

console.log(window.jQuery);

	$(document).ready(function() {
		// require('../../../../../wp-includes/js/underscore.min.js');
		// require('../../../../../wp-includes/js/wp-util.min.js');
		// require('../../../../../wp-includes/js/dist/vendor/wp-polyfill-inert.min.js');
		// require('../../../../../wp-includes/js/dist/vendor/regenerator-runtime.min.js');
		// require('../../../../../wp-includes/js/dist/vendor/wp-polyfill.min.js');
		// require('../../../../../wp-includes/js/dist/hooks.min.js');
		// require('../../../../../wp-includes/js/dist/i18n.min.js');
		// require('../../../../../wp-includes/js/dist/url.min.js');
		// require('../../../../../wp-includes/js/dist/api-fetch.min.js');
		
		// require('../../../../../wp-content/plugins/woo-variation-swatches/assets/js/frontend.min.js');


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
// });