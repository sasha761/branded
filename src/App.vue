<template>
  <div>
    <icons />
    <modal-component />
    <header-layout :products="products" @search-product="handleSearch" />
    <div class="wrapper">
      <main class="p-shop">
        <div class="u-container">
          <nav class="c-breadcrumbs">
            <span
              ><span><a href="https://branded.com.ua/">Главная</a></span> -
              <span class="breadcrumb_last" aria-current="page">Женщинам</span></span
            >
          </nav>
          <div class="p-shop__flex">
            <div class="p-shop__sidebar">
              
            </div>
            <div class="p-shop__catalog">
              <section class="l-shop" data-categories="Женщинам" data-cat-id="17">
                <h1 class="u-h2">Женщинам</h1>
                <div class="l-filter">
                  <div
                    id="woocommerce_layered_nav-2"
                    class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
                  >
                    <form
                      method="get"
                      action="https://branded.com.ua/product-category/women/"
                      class="js-filter-form c-dropdown woocommerce-widget-layered-nav-dropdown"
                    >
                      <select
                        class="js-filter-select woocommerce-widget-layered-nav-dropdown dropdown_layered_nav_brand"
                        multiple="multiple"
                        style="display: none"
                      >
                        <option value="" selected="">Бренд:</option>
                        <option value="bant-atelier">Bant Atelier</option>
                        <option value="be-om">BeOm Design</option>
                        <option value="gruf">Era (Gruf)</option>
                        <option value="lexie">Lexie</option>
                        <option value="lucky-reef">Lucky Reef</option>
                        <option value="one-face">One Face</option>
                        <option value="staff">Staff</option>
                        <option value="vg-lingerie">VG lingerie</option>
                        <option value="volana">Volana</option>
                        <option value="los-halconez">Los Halconez</option>
                        <option value="wearme">WearMe</option>
                        <option value="dobro-brand">Dobro brand</option>
                        <option value="wox-clothing">Wox clothing</option>
                      </select>
                      <div class="nice-select">
                        <span class="current">Бренд:</span>
                        <ul class="list">
                          <li class="option selected" data-value="">Бренд:</li>
                          <li class="option" data-value="bant-atelier">Bant Atelier</li>
                          <li class="option" data-value="be-om">BeOm Design</li>
                          <li class="option" data-value="gruf">Era (Gruf)</li>
                          <li class="option" data-value="lexie">Lexie</li>
                          <li class="option" data-value="lucky-reef">Lucky Reef</li>
                          <li class="option" data-value="one-face">One Face</li>
                          <li class="option" data-value="staff">Staff</li>
                          <li class="option" data-value="vg-lingerie">VG lingerie</li>
                          <li class="option" data-value="volana">Volana</li>
                          <li class="option" data-value="los-halconez">Los Halconez</li>
                          <li class="option" data-value="wearme">WearMe</li>
                          <li class="option" data-value="dobro-brand">Dobro brand</li>
                          <li class="option" data-value="wox-clothing">Wox clothing</li>
                        </ul>
                      </div>
                      <button
                        class="woocommerce-widget-layered-nav-dropdown__submit"
                        type="submit"
                        value="Применить"
                      >
                        Применить</button
                      ><input type="hidden" name="query_type_brand" value="or" /><input
                        type="hidden"
                        name="filter_brand"
                        value=""
                      />
                    </form>
                  </div>
                  <div
                    id="woocommerce_layered_nav-3"
                    class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
                  >
                    <form
                      method="get"
                      action="https://branded.com.ua/product-category/women/"
                      class="js-filter-form c-dropdown woocommerce-widget-layered-nav-dropdown"
                    >
                      <select
                        class="js-filter-select woocommerce-widget-layered-nav-dropdown dropdown_layered_nav_color"
                        multiple="multiple"
                        style="display: none"
                      >
                        <option value="" selected="">Цвет:</option>
                        <option value="bezhevyj">Бежевый</option>
                        <option value="beliy">Белый</option>
                        <option value="bordovyj">Бордовый</option>
                        <option value="goluboy">Голубой</option>
                        <option value="grafit">Графит</option>
                        <option value="jeltiy">Желтый</option>
                        <option value="zelenyj">Зеленый</option>
                        <option value="izumrudniy">Изумрудный</option>
                        <option value="korychneviy">Коричневый</option>
                        <option value="krasniy">Красный</option>
                        <option value="malinoviy">Малиновый</option>
                        <option value="mint">Минт</option>
                        <option value="molochnyj">Молочный</option>
                        <option value="olivkovyj">Оливковый</option>
                        <option value="oranjeviy">Оранжевый</option>
                        <option value="pudra">Пудра</option>
                        <option value="rozovyj">Розовый</option>
                        <option value="svetlo-goluboj">Светло-голубой</option>
                        <option value="svetlo-korichnevyj">Светло-коричневый</option>
                        <option value="seriy">Серый</option>
                        <option value="siniy">Синий</option>
                        <option value="temno-bezhevyj">Темно-бежевый</option>
                        <option value="temno-zelenyj">Темно-зеленый</option>
                        <option value="temnyj-sinij">Темно-синий</option>
                        <option value="terrakotovyj">Терракотовый</option>
                        <option value="fioletovyj">Фиолетовый</option>
                        <option value="fistashkovyj">Фисташковый</option>
                        <option value="haki">Хаки</option>
                        <option value="cherniy">Черный</option>
                      </select>
                      <div class="nice-select">
                        <span class="current">Цвет:</span>
                        <ul class="list">
                          <li class="option selected" data-value="">Цвет:</li>
                          <li class="option" data-value="bezhevyj">Бежевый</li>
                          <li class="option" data-value="beliy">Белый</li>
                          <li class="option" data-value="bordovyj">Бордовый</li>
                          <li class="option" data-value="goluboy">Голубой</li>
                          <li class="option" data-value="grafit">Графит</li>
                          <li class="option" data-value="jeltiy">Желтый</li>
                          <li class="option" data-value="zelenyj">Зеленый</li>
                          <li class="option" data-value="izumrudniy">Изумрудный</li>
                          <li class="option" data-value="korychneviy">Коричневый</li>
                          <li class="option" data-value="krasniy">Красный</li>
                          <li class="option" data-value="malinoviy">Малиновый</li>
                          <li class="option" data-value="mint">Минт</li>
                          <li class="option" data-value="molochnyj">Молочный</li>
                          <li class="option" data-value="olivkovyj">Оливковый</li>
                          <li class="option" data-value="oranjeviy">Оранжевый</li>
                          <li class="option" data-value="pudra">Пудра</li>
                          <li class="option" data-value="rozovyj">Розовый</li>
                          <li class="option" data-value="svetlo-goluboj">Светло-голубой</li>
                          <li class="option" data-value="svetlo-korichnevyj">Светло-коричневый</li>
                          <li class="option" data-value="seriy">Серый</li>
                          <li class="option" data-value="siniy">Синий</li>
                          <li class="option" data-value="temno-bezhevyj">Темно-бежевый</li>
                          <li class="option" data-value="temno-zelenyj">Темно-зеленый</li>
                          <li class="option" data-value="temnyj-sinij">Темно-синий</li>
                          <li class="option" data-value="terrakotovyj">Терракотовый</li>
                          <li class="option" data-value="fioletovyj">Фиолетовый</li>
                          <li class="option" data-value="fistashkovyj">Фисташковый</li>
                          <li class="option" data-value="haki">Хаки</li>
                          <li class="option" data-value="cherniy">Черный</li>
                        </ul>
                      </div>
                      <button
                        class="woocommerce-widget-layered-nav-dropdown__submit"
                        type="submit"
                        value="Применить"
                      >
                        Применить</button
                      ><input type="hidden" name="query_type_color" value="or" /><input
                        type="hidden"
                        name="filter_color"
                        value=""
                      />
                    </form>
                  </div>
                  <div
                    id="woocommerce_layered_nav-4"
                    class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
                  >
                    <form
                      method="get"
                      action="https://branded.com.ua/product-category/women/"
                      class="js-filter-form c-dropdown woocommerce-widget-layered-nav-dropdown"
                    >
                      <select
                        class="js-filter-select woocommerce-widget-layered-nav-dropdown dropdown_layered_nav_size"
                        multiple="multiple"
                        style="display: none"
                      >
                        <option value="" selected="">Размер:</option>
                        <option value="37-41">37-41</option>
                        <option value="44">44</option>
                        <option value="44-46">44-46</option>
                        <option value="l-xl-2">L/XL</option>
                        <option value="40">40</option>
                        <option value="42">42</option>
                        <option value="l-xl">L-XL</option>
                        <option value="one-size">one size</option>
                        <option value="s-m">S-M</option>
                        <option value="universalnyj">Универсальный</option>
                        <option value="46">46</option>
                        <option value="48">48</option>
                        <option value="50">50</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                        <option value="xxxl">XXXL</option>
                        <option value="xs-s">XS/S</option>
                        <option value="m-l">M/L</option>
                        <option value="xl-xxl">XL/XXL</option>
                        <option value="s-m-2">S/M</option>
                      </select>
                      <div class="nice-select">
                        <span class="current">Размер:</span>
                        <ul class="list">
                          <li class="option selected" data-value="">Размер:</li>
                          <li class="option" data-value="37-41">37-41</li>
                          <li class="option" data-value="44">44</li>
                          <li class="option" data-value="44-46">44-46</li>
                          <li class="option" data-value="l-xl-2">L/XL</li>
                          <li class="option" data-value="40">40</li>
                          <li class="option" data-value="42">42</li>
                          <li class="option" data-value="l-xl">L-XL</li>
                          <li class="option" data-value="one-size">one size</li>
                          <li class="option" data-value="s-m">S-M</li>
                          <li class="option" data-value="universalnyj">Универсальный</li>
                          <li class="option" data-value="46">46</li>
                          <li class="option" data-value="48">48</li>
                          <li class="option" data-value="50">50</li>
                          <li class="option" data-value="xs">XS</li>
                          <li class="option" data-value="s">S</li>
                          <li class="option" data-value="m">M</li>
                          <li class="option" data-value="l">L</li>
                          <li class="option" data-value="xl">XL</li>
                          <li class="option" data-value="xxl">XXL</li>
                          <li class="option" data-value="xxxl">XXXL</li>
                          <li class="option" data-value="xs-s">XS/S</li>
                          <li class="option" data-value="m-l">M/L</li>
                          <li class="option" data-value="xl-xxl">XL/XXL</li>
                          <li class="option" data-value="s-m-2">S/M</li>
                        </ul>
                      </div>
                      <button
                        class="woocommerce-widget-layered-nav-dropdown__submit"
                        type="submit"
                        value="Применить"
                      >
                        Применить</button
                      ><input type="hidden" name="query_type_size" value="or" /><input
                        type="hidden"
                        name="filter_size"
                        value=""
                      />
                    </form>
                  </div>
                  <div
                    id="woocommerce_layered_nav-5"
                    class="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
                  >
                    <form
                      method="get"
                      action="https://branded.com.ua/product-category/women/"
                      class="js-filter-form c-dropdown woocommerce-widget-layered-nav-dropdown"
                    >
                      <select
                        class="js-filter-select woocommerce-widget-layered-nav-dropdown dropdown_layered_nav_sezon"
                        multiple="multiple"
                        style="display: none"
                      >
                        <option value="" selected="">Сезон:</option>
                        <option value="demisezon">Демисезон</option>
                        <option value="multi">Мульти</option>
                        <option value="zima">Зима</option>
                        <option value="leto">Лето</option>
                      </select>
                      <div class="nice-select">
                        <span class="current">Сезон:</span>
                        <ul class="list">
                          <li class="option selected" data-value="">Сезон:</li>
                          <li class="option" data-value="demisezon">Демисезон</li>
                          <li class="option" data-value="multi">Мульти</li>
                          <li class="option" data-value="zima">Зима</li>
                          <li class="option" data-value="leto">Лето</li>
                        </ul>
                      </div>
                      <button
                        class="woocommerce-widget-layered-nav-dropdown__submit"
                        type="submit"
                        value="Применить"
                      >
                        Применить</button
                      ><input type="hidden" name="query_type_sezon" value="or" /><input
                        type="hidden"
                        name="filter_sezon"
                        value=""
                      />
                    </form>
                  </div>
                </div>
                <div class="l-shop__result">
                  <div class="l-shop__result-count">
                    <p class="woocommerce-result-count">Отображение 1–16 из 750</p>
                  </div>
                  <select-filter @select-filter="sortHendler" :options="filterOrderby" filterParam="orderby" />
                </div>
                <div v-if="filteredProducts" class="l-shop__product">
                  <div class="row js-load-more">
                    <div
                      v-for="product in filteredProducts"
                      :key="product.post_id"
                      class="col-lg-3 col-md-4 col-sm-6 col-6 u-col js-gallery-item"
                    >
                      <product :product="product" />
                    </div>
                  </div>
                  <div class="c-load-icon js-load-more-icon">
                    <span class="c-spinner"> <span></span> <span></span> <span></span> </span>
                  </div>
                  <button
                    data-current-page="1"
                    data-all-pages="11"
                    data-slug="women"
                    data-count="16"
                    data-all-posts="762"
                    data-category="product_cat"
                    class="u-btn is-load-more is-medium is-black js-show-more-product"
                  >
                    Загрузить еще
                  </button>
                </div>
                <div class="c-pagination">
                  <ul>
                    <li class="is-active">
                      <span class="page-number page-numbers current">1</span>
                    </li>
                    <li>
                      <a
                        href="https://branded.com.ua/product-category/women/page/2/"
                        class="page-number page-numbers"
                        >2</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://branded.com.ua/product-category/women/page/3/"
                        class="page-number page-numbers"
                        >3</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://branded.com.ua/product-category/women/page/4/"
                        class="page-number page-numbers"
                        >4</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://branded.com.ua/product-category/women/page/5/"
                        class="page-number page-numbers"
                        >5</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://branded.com.ua/product-category/women/page/6/"
                        class="page-number page-numbers"
                        >6</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://branded.com.ua/product-category/women/page/7/"
                        class="page-number page-numbers"
                        >7</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://branded.com.ua/product-category/women/page/8/"
                        class="page-number page-numbers"
                        >8</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://branded.com.ua/product-category/women/page/9/"
                        class="page-number page-numbers"
                        >9</a
                      >
                    </li>
                    <li class="is-active"><span class="dots">…</span></li>
                    <li>
                      <a
                        href="https://branded.com.ua/product-category/women/page/47/"
                        class="page-number page-numbers"
                        >47</a
                      >
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section class="l-subs">
          <img
            class="is-img lazy"
            src="data:image/png;base64,TEVITGhbV0IyeWs4cHlvSmFkUiouN2tDTWRuag=="
            data-src="https://branded.com.ua/wp-content/themes/news/src/img/subs.jpg"
            alt="Подписаться на украинских производителей Branded"
            width="1920"
            height="647"
          />
          <div class="u-container">
            <form class="c-form js-form-register">
              <div class="c-form__title"><div class="u-h3">Будь в теме</div></div>
              <div class="c-form__checkbox">
                <div class="c-checkbox">
                  <input type="checkbox" value="man" name="gender" />
                  <p>мужчинам</p>
                </div>
                <div class="c-checkbox">
                  <input type="checkbox" value="wooman" name="gender" />
                  <p>женщинам</p>
                </div>
              </div>
              <div class="c-form__bottom">
                <input type="email" placeholder="Email" name="email" required="" />
                <input type="hidden" name="action" value="subscribe" />
                <button type="submit" class="u-btn is-black">Подписаться</button>
                <div class="js-form-answer"></div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer-layout />
    </div>
  </div>
</template>

<script>
import selectFilter from './components/SelectFilter.vue'
import headerLayout from './components/HeaderLayout.vue'
import footerLayout from './components/FooterLayout.vue'
import ModalComponent from './components/Modal.vue'
import product from './components/product.vue'
import icons from './components/iconsSvg.vue'

export default {
  name: "App",

  components: {
    selectFilter,
    headerLayout,
    footerLayout,
    ModalComponent,
    product,
    icons
  },

  data() {
    return {
      products: [],
      sortedData: false,
      sortedStr: '',
      filteredProducts: [],
      filterOrderby: {
        'date': 'По новизне',
        'price-asc': 'Цены: по возрастанию',
        'price-desc': 'Цены: по убыванию'
      }
    }
  },

  mounted() {
    this.getProducts().then((result) => (this.filteredProducts = result))
  },

  methods: {
    async getProducts() {
      return fetch('https://branded.loc/wp-json/api/archive/get_products')
        .then((result) => result.json())
        .then((rowData) => (this.products = rowData))
    },

    handleSearch(searchResults) {
      this.filteredProducts = Object.values(this.products).filter((item) =>
        item.post_title.toLowerCase().includes(searchResults.toLowerCase())
      )
      if (this.sortedData) this.handleSort()
    },

    sortHendler(selectedOption) {
      this.sortedStr = selectedOption
      this.handleSort()
    },

    handleSort() {
      if (this.sortedStr === 'price-asc') {
        this.sortedData = true
        this.filteredProducts.sort((a, b) => a.post_price - b.post_price)
      } else if (this.sortedStr === 'price-desc') {
        this.sortedData = true
        this.filteredProducts.sort((a, b) => b.post_price - a.post_price)
      } else {
        this.sortedData = false
      }
    }
  }
}
</script>
