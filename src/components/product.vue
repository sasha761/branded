<template>
  <div
    class="c-product js-product-item"
    :data-id="product.post_id"
    data-brand="Bant Atelier"
  >
    <a :href="product.post_link" class="c-product__img">
      <picture>
        <source
          :data-srcset="product.post_img_xl"
          media="(min-width: 426px)"
          :srcset="product.post_img_xl"
        />
        <source
          :data-srcset="product.post_img_md"
          media="(max-width: 425px)"
          :srcset="product.post_img_md"
        />
        <img
          src="data:image/gif;base64,R0lGODlhBAAFAIAAAP///wAAACH5BAEAAAEALAAAAAAEAAUAAAIEjI+ZBQA7"
          :alt="product.post_title"
          width="342"
          height="435"
          class="lazy entered loaded"
          data-ll-status="loaded"
        />
      </picture>
    </a>
    <div class="c-product__text">
      <p class="c-product__text-title">
        {{ product.post_title }}
      </p>
      <p class="c-price">{{ product.post_price }} грн</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: false
    }
  } 
}
</script>
