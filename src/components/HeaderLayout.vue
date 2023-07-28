<template>
  <header class="l-header">
    <div class="l-header__bottom u-relative">
      <div class="u-container">
        <div class="l-header__bottom-left">
          <div class="c-logo">
            <a href="https://branded.com.ua">
              <svg width="100%" height="35px"><use xlink:href="#logo"></use></svg>
            </a>
          </div>
          <ul class="c-menu">
            <li class="c-menu__item">
              <a href="https://branded.com.ua/sales" class="d-flex align-items-center">
                <svg width="18px" height="18px" style="margin-right: 6px">
                  <use xlink:href="#sales"></use>
                </svg>
                <span>Sales</span>
              </a>
            </li>
            <li class="c-menu__item">
              <a href="https://branded.com.ua/product-category/mans/"> <span>Мужчинам</span> </a>
            </li>
            <li class="c-menu__item is-active">
              <a href="https://branded.com.ua/product-category/women/"> <span>Женщинам</span> </a>
            </li>
            <li class="c-menu__item">
              <a href="#"> <span>Бренды</span> </a>
            </li>
          </ul>
        </div>
        <div class="l-header__bottom-right">
          <div
            class="aws-container"
            data-url="/?wc-ajax=aws_action"
            data-siteurl="http://brand.loc"
          >
            <form
              role="search"
              method="get"
              id="searchform"
              class="c-search"
              action="https://branded.com.ua"
            >
              <button type="submit" class="c-search__button">
                <svg width="15px" height="17px" class="is-search">
                  <use xlink:href="#search"></use>
                </svg>
              </button>
              <input type="hidden" name="post_type" value="product" />
              <input type="hidden" name="type_aws" value="true" />
              <input
                type="text"
                v-model="search"
                placeholder="Поиск"
                name="s"
                id="s"
                v-on:input="handleSearch"
              />
            </form>
          </div>
          <div class="c-service cart d-none d-sm-block">
            <div>
              <span class="c-service__count">0</span>
              <svg width="20px" height="20px"><use xlink:href="#cart"></use></svg>
            </div>
            <div class="c-service__dropdown">
              <div class="l-mini-cart widget_shopping_cart_content">
                <p class="u-h3">Корзина</p>
                <span class="l-mini-cart__count">0 товар</span>
                <p>Корзина пуста</p>
              </div>
            </div>
          </div>
          <div class="c-dropdown js-dropdown">
            <span class="c-dropdown__current">Помощь</span>
            <svg width="11px" height="7px" class="u-arrow"><use xlink:href="#arrow"></use></svg>
            <ul class="c-dropdown__list">
              <li><a href="https://branded.com.ua/dostavka-i-oplata">Доставка и оплата</a></li>
              <li><a href="https://branded.com.ua/vozvrat-i-obmen">Возврат и обмен</a></li>
              <li><a href="https://branded.com.ua/garantiya">Гарантия</a></li>
              <li><a href="https://branded.com.ua/reviews">Отзывы</a></li>
              <li><a href="tel:+38(066)3156536">+38 (066) 315 65 36</a></li>
            </ul>
          </div>
          <div class="c-lang js-lang">
            <div class="c-lang__current">
              ru
              <svg width="11px" height="7px" class="c-lang__arrow">
                <use xlink:href="#arrow"></use>
              </svg>
            </div>
            <div class="c-lang__sub">
              <a
                href="https://branded.com.ua/product-category/women/"
                class="c-lang__item is-active"
                data-lang="ru"
              >
                ru
              </a>
              <a
                href="https://branded.com.ua/uk/product-category/zhinkam/"
                class="c-lang__item"
                data-lang="uk"
              >
                uk
              </a>
            </div>
          </div>
          <div class="c-burger d-block d-sm-none" data-modal="#mobile-menu">
            <span></span> <span></span> <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },

  props: {
    products: {
      type: Object,
      required: false,
      default: false
    }
  },
  methods: {
    handleSearch() {
      // const searchResults = Object.values(this.products).filter(item =>
      //   item.post_title.toLowerCase().includes(this.search.toLowerCase())
      // );

      this.$emit('search-product', this.search)
      
    }
  }
}
</script>
