var e;(0,(e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2).register)("dMDyw",function(i,t){Object.defineProperty(i.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(i.exports,"default",{get:function(){return s},set:void 0,enumerable:!0,configurable:!0});var o=e("b9MTj"),l=e("oFqvw"),s=class{swiper;switcher=!0;constructor(e,i){this.el=e,this.modal=i,this.init()}init(){let e=document.querySelectorAll(this.el),i=[];e.forEach((e,t)=>{let o=e.getAttribute("href");i.push(o),e.addEventListener("click",e=>{e.preventDefault(),!0==this.switcher&&this.createModal(i),this.switcher=!1,this.openModal(t)},!1)})}initSlider(){let e=new o.default(".js-lightbox-image",{modules:[l.Navigation,l.Pagination,l.Zoom],watchOverflow:!0,zoom:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{navigation:!1},576:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}});this.swiper=e}openModal(e){document.querySelector('[data-modal="#lightbox"]').click(),this.swiper.slideTo(e,0),document.querySelector(".js-lightbox-modal .js-load-more-icon").style.display="none"}closeModal(){document.querySelector('.js-lightbox-modal [data-modal="close"]').click()}createModal(e){let i=document.querySelectorAll(this.modal),t="";e.forEach(i=>{let o,l=i.split(".").pop();o="mp4"==l||"mov"==l?`<video src="${i}" muted playsinline autoplay loop poster="${e[1]}"></video>`:`<img src="${i}">`,t+=`<div class="swiper-slide">
																	<div class="swiper-zoom-container">
																		${o}
																	</div>
																</div>`});let o=` 
				<div class="swiper js-lightbox-image">
          <div class="swiper-wrapper">
          	${t}
          </div>
          <div class="d-none d-sm-block swiper-button-next"></div>
		      <div class="d-none d-sm-block swiper-button-prev"></div>
		      <div class="swiper-pagination"></div>
        </div>
			`;i[0].insertAdjacentHTML("afterBegin",o),this.initSlider()}}});