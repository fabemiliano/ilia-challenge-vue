<template>
  <div class="flags">
    <img
      :class="locale === 'en' ? styles.border : styles.normal"
      src="@/assets/uk.png"
      alt="uk flag"
      @click="setLocale('en')"
    />
    <img
      :class="locale === 'br' ? styles.border : styles.normal"
      src="@/assets/br.png"
      alt="br flag"
      @click="setLocale('br')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale,
      styles: {
        border: {
          border: "4px solid $secondary-color",
          "border-radius": "50%"
        },
        normal: {}
      }
    };
  },
  methods: {
    setLocale(language) {
      this.$i18n.locale = language;
      this.locale = language;
      console.log(this.$i18n.locale);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.flags {
  @include absoluteLeftTop(10px, 10px);
  @include flexRow(center);
  margin-bottom: 40px;
  .border {
    border: 4px solid $secondary-color;
    border-radius: 50%;
  }
  img {
    width: 30px;
    cursor: pointer;
  }
}
</style>
