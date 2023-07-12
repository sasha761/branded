// const Flickity = require('flickity');
// require('flickity-imagesloaded');



class PatchedFlickity extends Flickity {
  constructor (...args) {
    super(...args)
    this.on('settle', (e, idx) => {
      if (this.resizeQueued) {
        this.resizeQueued = false
        this.resize()
      }
    })
  }

  resize () {
    if (this.isAnimating) {
      this.resizeQueued = true
      return
    }
    super.resize()
  }
}


const bannerSlider = document.getElementsByClassName('js-banner-slider');
const productSlider = document.getElementsByClassName('js-product-row');
const productImageSlider = document.getElementsByClassName('js-product-image');
// const otherColorSlider = document.getElementsByClassName('js-vertical-slider');


	// if (otherColorSlider.length && window.innerWidth >= 991) {
	// 	new Flickity('.js-vertical-slider', {
	// 	  draggable: true,
	// 	  freeScroll: true,
 //      // percentPosition: false,
 //      groupCells: "100%",
 //      pageDots: false,
 //      autoPlay: true,
	// 		imagesLoaded: true,
	// 		prevNextButtons: false,
	// 	});
	// }
	
	if (bannerSlider.length) {
		var flkty = new PatchedFlickity('.js-banner-slider', {
			resize: false,
		  contain: false,
			prevNextButtons: false,
			draggable: true,
			freeScroll: false,
			pageDots: false,
			autoPlay: true,
			imagesLoaded: true
		});

		flkty.on('dragStart', () => (document.ontouchmove = () => false));
		flkty.on('dragEnd', () => (document.ontouchmove = () => true));
	}

	if (productImageSlider.length) {
		let productSliderOptions = {}
		productSliderOptions = {
			resize: false,
			freeScroll: true,
			contain: true,
			prevNextButtons: false,
			pageDots: false,
			ImagesLoaded: true,
			adaptiveHeight: true,
			prevNextButtons: false,
			draggable: true,
		}
		if (window.innerWidth <= 576) {
			productSliderOptions = {
				resize: false,
				freeScroll: false,
				autoPlay: 2500,
				contain: true,
				prevNextButtons: false,
				pageDots: true,
				ImagesLoaded: true,
				adaptiveHeight: true,
				prevNextButtons: false,
				draggable: true,
			}
		}

		if (window.innerWidth <= 991) {
			var flkty = new PatchedFlickity('.js-product-image', productSliderOptions);

			flkty.on('dragStart', () => (document.ontouchmove = () => false));
			flkty.on('dragEnd', () => (document.ontouchmove = () => true));

		}
	}


	

	Array.from(productSlider).forEach((element) => {

		let sliderContainer = element.closest('.js-slider-container');
		let carouselStatus = sliderContainer.querySelector('.c-arrow__count');

		let infinitySlider = false;
		// console.log(carouselStatus);
		if (carouselStatus) infinitySlider = true;

		var flkty = new PatchedFlickity( element, {
			resize: false,
			contain: true,
			wrapAround: infinitySlider,
			prevNextButtons: false,
			draggable: true,
			freeScroll: true,
			pageDots: false,
			autoPlay: 2500,
			pauseAutoPlayOnHover: false,
			imagesLoaded: true
		});


		console.log(flkty);

		flkty.on('dragStart', () => (document.ontouchmove = () => false));
		flkty.on('dragEnd', () => (document.ontouchmove = () => true));

		if (carouselStatus) {
		  flkty.on( 'select', updateStatus );

			//update count
			function updateStatus(event) {
				// console.log('1111111', event.data);
				let slideCurrentNumber = flkty.selectedIndex + 1;
				let slideWholeNumber = flkty.slides.length;


				if (slideCurrentNumber < 10) {
					slideCurrentNumber = `0${slideCurrentNumber}`;
				}
				if (slideWholeNumber < 10) {
					slideWholeNumber = `0${slideWholeNumber}`;
				}

		  	carouselStatus.textContent = slideCurrentNumber + '/' + slideWholeNumber;
		  }
	 	 	updateStatus();
 	 	}

		// previous
		let previousButton = sliderContainer.querySelector('.js-prev');
		if (previousButton) {
			previousButton.addEventListener( 'click', function() {
				// console.log('2222');
			  flkty.previous();
			});
		}

		// next
		let nextButton = sliderContainer.querySelector('.js-next');
		if (nextButton) {
			nextButton.addEventListener( 'click', function() {
				// console.log('111');
			  flkty.next();
			});
		}
	});

	// console.log(flkty);
	
// }

// function updateStatus() {
//   var slideNumber = flkty.selectedIndex + 1;
//   carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
// }
// updateStatus();