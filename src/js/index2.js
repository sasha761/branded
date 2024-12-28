import modal from './modules/modal-container.js';
import tabs from './modules/tabs.js';
import accordion from './modules/accordion.js';
import LazyLoad from 'vanilla-lazyload';
import storage from './modules/local-storage.js';
import dropdown from './modules/dropdown.js';
import menu from './modules/menu.js';

import {
  GA_add_to_cart, 
  GA_remove_from_cart, 
  GA_view_item, 
  GA_view_item_list, 
  GA_select_item,
  GA_purchase } from './modules/google-ads.js';

async function mainPageFunctions() {
  // Можно сразу await import(...) в переменную
  const swiperModule = await import('./modules/swiper.js');
  swiperModule.initHeroSlider();
  swiperModule.initProductRowSlider();
}

async function shopPageFunctions() {
  const [
    niceSelectModule,
    readMoreModule,
    loadMoreModule
  ] = await Promise.all([
    import('./modules/niceSelect.js'),
    import('./modules/read-more.js'),
    import('./modules/load-more.js'),
  ]);

  new niceSelectModule.default('.js-filter-select, .js-filter-sort select');
  readMoreModule.default();
  loadMoreModule.default();
  GA_view_item_list();
  GA_select_item();
}

async function productPageFunctions() {
  const [
    lightboxModule,
    quickBuyModule,
    validationModule,
    swiperModule,
    wcVarModule,
    swatchesModule
  ] = await Promise.all([
    import('./modules/lightbox.js'),
    import('./modules/quick-buy.js'),
    import('./modules/validation.js'),
    import('./modules/swiper.js'),
    import('./modules/wc-add-to-cart-variation.js'),
    import('./modules/VariationSwatches.js'),
  ]);

  if (typeof window.wc_add_to_cart_variation_params !== 'undefined' && document.querySelector('.variations_form')) {
    wcVarModule.initVariationForms();
    swatchesModule.initAllVariationSwatches();
  }

  // Инициализация слайдеров
  swiperModule.initProductGallerySlider();
  swiperModule.initProductRowSlider();

  // Лайтбокс
  new lightboxModule.default('.js-lightbox', '.js-lightbox-modal');

  // Валидация
  const formValidator = new validationModule.default();
  if (document.querySelector('form[name="quick-buy"]')) {
    formValidator.validate('firstName', '[name="name"]');
    formValidator.validate('lastName', '[name="surname"]');
    formValidator.validate('post', '[name="address"]');
    formValidator.validate('billingCity', '[name="city"]');
    formValidator.validate('phone', '[name="phone"]');
    formValidator.validate('email', '[name="email"]');
    formValidator.validate('submit', 'button[name="quick-buy-submit"]');
  }

  // Быстрый заказ
  quickBuyModule.default();

  // Google Ads
  GA_view_item();
  GA_add_to_cart();
}

async function checkoutPageFunctions() {
  const validationModule = await import('./modules/validation.js');
  const validator = new validationModule.default();
  if (document.querySelector('form[name="checkout"]')) {
    validator.validate('firstName', '[name="billing_first_name"]');
    validator.validate('lastName', '[name="billing_last_name"]');
    validator.validate('post', '[name="billing_address_1"]');
    validator.validate('billingCity', '[name="billing_city"]');
    validator.validate('phone', '[name="billing_phone"]');
    validator.validate('email', '[name="billing_email"]');
    validator.validate('submit', 'button[name="woocommerce_checkout_place_order"]');
  }
}

async function searchPageFunctions() {
  const niceSelectModule = await import('./modules/niceSelect.js');
  new niceSelectModule.default('.js-filter-sort select');
}

async function thanksPageFunctions() {
  GA_purchase();
}

// ======================================================
document.addEventListener('DOMContentLoaded', async () => {
  window.lazyLoadInstance = new LazyLoad({
    cancel_on_exit: false,
    threshold: 150,
    unobserve_entered: true,
  });
  new modal('.c-modal', '.l-modal-container');
  new storage('[data-lang]');
  new tabs('.js-tab-mobile-menu');
  new accordion('.js-accordion__item', '.js-accordion');
  dropdown();
  menu();

  const pageClass = document.querySelector('main')?.classList?.value || '';

  switch (pageClass) {
    case 'p-main':
      await mainPageFunctions();
      break;

    case 'p-shop':
      await shopPageFunctions();
      break;

    case 'p-product':
      await productPageFunctions();
      break;

    case 'p-checkout':
      await checkoutPageFunctions();
      break;

    case 'p-shop p-search':
      await searchPageFunctions();
      break;

    case 'p-thank':
      await thanksPageFunctions();
      break;

    case 'p-cart':
    case 'p-page is-page':
    case 'p-reviews':
    default:
      break;
  }
});
