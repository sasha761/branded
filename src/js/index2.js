import lightbox     from './modules/lightbox.js';
import modal        from './modules/modal-container.js';
import tabs         from './modules/tabs.js';
import accordion    from './modules/accordion.js';
import niceSelect   from './modules/niceSelect.js';
import validation   from './modules/validation.js';
import LazyLoad     from 'vanilla-lazyload';
import storage      from './modules/local-storage.js';
import readMore     from './modules/read-more.js';
import swiperFn     from './modules/swiper.js';
import dropdown     from './modules/dropdown.js';
import menu         from './modules/menu.js';
import loadMore     from './modules/load-more.js';
import quickBuy     from './modules/quick-buy.js';
import {
  GA_add_to_cart, 
  GA_remove_from_cart, 
  GA_view_item, 
  GA_view_item_list, 
  GA_select_item,
  GA_purchase
} from './modules/google-ads.js';


document.addEventListener("DOMContentLoaded", function(event) {    
  
  window.lazyLoadInstance = new LazyLoad({
    cancel_on_exit: false,
    threshold: 150,
    unobserve_entered: true
  });

  new modal('.c-modal', '.l-modal-container');
  new storage('[data-lang]');
  new tabs('.js-tab-mobile-menu');
  
  new accordion('.js-accordion__item', '.js-accordion');
  dropdown();
  menu();

  const pageClass = document.querySelector('main').classList.value;
  const from_validator = new validation();

  switch (pageClass) {
    case 'p-main':
      swiperFn();
      break;
    case 'p-shop':
      new niceSelect('.js-filter-select, .js-filter-sort select');
      readMore();
      loadMore();
      GA_view_item_list();
      GA_select_item();
      break;  
    case 'p-product':
      swiperFn();
      new lightbox('.js-lightbox', '.js-lightbox-modal');
      if (document.querySelector("form[name='quick-buy']")) {
        from_validator.validate('firstName', '[name="name"]')
        from_validator.validate('lastName', '[name="surname"]')
        from_validator.validate('post', '[name="address"]')
        from_validator.validate('billingCity', '[name="city"]')
        from_validator.validate('phone', '[name="phone"]')
        from_validator.validate('email', '[name="email"]')
        from_validator.validate('submit', 'button[name="quick-buy-submit"]')
      }
      quickBuy();
      GA_view_item();
      GA_add_to_cart();

      break;
    case 'p-checkout':
      if (document.querySelector("form[name='checkout']")) {
        from_validator.validate('firstName', '[name="billing_first_name"]')
        from_validator.validate('lastName', '[name="billing_last_name"]')
        from_validator.validate('post', '[name="billing_address_1"]')
        from_validator.validate('billingCity', '[name="billing_city"]')
        from_validator.validate('phone', '[name="billing_phone"]')
        from_validator.validate('email', '[name="billing_email"]')
        from_validator.validate('submit', 'button[name="woocommerce_checkout_place_order"]')
      }
      break;   
    case 'p-shop p-search':
      new niceSelect('.js-filter-sort select');
      break;
    case 'p-cart':
      break;
    case 'p-thank':
      GA_purchase();
      break;       
    case 'p-page is-page':
      break;   
    case 'p-reviews':
      break; 
    default:
      break;
  }
});