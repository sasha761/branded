<template>
  <div class="c-sort js-filter-sort">
    <select v-model="selected" @change="handleSelectChange" name="orderby" class="orderby" >
      <option 
        v-for="(value, key) in options" 
        :key="key" 
        :value="key"
      >
        {{ value }}
      </option>
    </select>
  </div>
</template>

<script>
// import niceSelect from '../js/niceSelect.js'

export default {
  data() {
    return {
      selected: Object.keys(this.options)[0]
    }
  },

  props: {
    options: {
      type: Object,
      required: true,
      default: false
    },
    filterParam: {
      type: String,
      required: true,
      default: false
    }
  },

  emits: {
    "select-filter": value => typeof value === "string" && value.length > 0
  },

  created() {
    const windowData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    );

    if (windowData[this.filterParam]) {
      this.selected = windowData[this.filterParam];
    }
  },

  methods: {
    handleSelectChange() {
      
      this.$emit('select-filter', this.selected)
    }
  },

  watch: {
    selected() {
      const url = new URL(window.location.href);
      const params = url.searchParams;
      params.set(this.filterParam, this.selected);

      const newUrl = `${url.pathname}?${params.toString()}`;

      window.history.pushState(null, document.title, newUrl);
    }
  }
}
</script>
