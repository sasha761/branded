!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2;(0,t.register)("clIUL",function(o,n){e(o.exports,"initHeroSlider",function(){return r}),e(o.exports,"initProductGallerySlider",function(){return a}),e(o.exports,"initProductRowSlider",function(){return u});var l=t("b9MTj"),i=t("oFqvw");let r=()=>{let e=document.querySelectorAll(".js-banner-slider");e.length&&e.forEach(e=>{new l.default(e)})},a=()=>{let e=document.querySelectorAll(".js-product-image");e.length&&window.innerWidth<=991&&e.forEach(e=>{new l.default(e,{modules:[i.Navigation,i.Pagination,i.Autoplay,i.Zoom,i.FreeMode],watchOverflow:!0,spaceBetween:7,autoHeight:!1,zoom:{maxRatio:1.6},autoplay:{delay:2500,stopOnLastSlide:!1,disableOnInteraction:!0},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},576:{slidesPerView:"auto",freeMode:{enabled:!0,sticky:!0}}}})})},u=()=>{let e=document.querySelectorAll(".js-product-row");e.length&&e.forEach(e=>{let t=e.closest(".js-slider-container").querySelector(".c-arrow"),o=!1,n=!1;if(t){let e=t.querySelector(".js-next"),l=t.querySelector(".js-prev"),i=t.querySelector(".c-arrow__count");o={nextEl:e,prevEl:l},n={el:i,type:"fraction"}}new l.default(e,{modules:[i.Navigation,i.Pagination,i.Autoplay],slidesPerView:"auto",watchOverflow:!0,autoplay:{delay:2500,stopOnLastSlide:!1,disableOnInteraction:!0},navigation:o,pagination:n})})}})}();