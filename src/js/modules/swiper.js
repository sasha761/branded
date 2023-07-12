import Swiper from '../../../node_modules/swiper/swiper-bundle';
// import Swiper, { Navigation, Pagination } from 'swiper';

function swiperFn() {
	const bannerSlider = document.querySelectorAll('.js-banner-slider');
	const productSlider = document.querySelectorAll('.js-product-row');
	const productImageSlider = document.querySelectorAll('.js-product-image');

	if (bannerSlider.length) {
		bannerSlider.forEach(slider => {new Swiper(slider)})
	}

	if (productImageSlider.length && window.innerWidth <= 991) {
		
		productImageSlider.forEach(slider => {
			new Swiper(slider, {
				watchOverflow: true,
				spaceBetween: 7,
				autoHeight: false,
				zoom: {
					maxRatio: 1.6,
				},
				autoplay: {
					delay: 2500,
					stopOnLastSlide: false,
					disableOnInteraction: true,
				},
				pagination: {
	        el: ".swiper-pagination",
	        clickable: true,
	        // type: "progressbar",
	      },
				breakpoints: {
			    320: {
			      slidesPerView: 1,
			    },
			    576: {
			    	slidesPerView: 'auto',
			      freeMode: {
					    enabled: true,
					    sticky: true,
					  },
			    }
			  }
			});
		});
	}

	if (productSlider.length) {

		productSlider.forEach(slider => {
			let sliderContainer = slider.closest('.js-slider-container');
			let sliderArrows = sliderContainer.querySelector('.c-arrow');
			let navArrows = false;
			let countArrows = false;
			if (sliderArrows) {
				let next = sliderArrows.querySelector('.js-next');
				let prev = sliderArrows.querySelector('.js-prev');
				let countEl = sliderArrows.querySelector('.c-arrow__count');
				navArrows = {
					nextEl: next,
					prevEl: prev
				}
				countArrows = {
					el: countEl,
	        type: "fraction",
				}
			}

			new Swiper(slider, {
				slidesPerView: 'auto',
				watchOverflow: true,
				autoplay: {
					delay: 2500,
					stopOnLastSlide: false,
					disableOnInteraction: true,
				},
				navigation: navArrows,
				pagination: countArrows,
			})
		})
	}
};

export default swiperFn;