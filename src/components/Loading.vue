<template>
  <div>
    <div class="main">
      <img :src="require('@/assets/pokeball.png')" />
      <div>
        <span v-for="(letter, index) in word" :key="letter + index">{{
          letter
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    word() {
      const loading = this.$t("loading");
      return loading.split("");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.main {
  @include mainPage(
    100vh,
    100%,
    linear-gradient(0deg, $quarter-color 0%, $main-color 100%)
  );
  @include flexColumn(center);
  img {
    width: 100px;
    animation: animate linear 3s infinite;
  }
  span {
    @include text(5rem, $tertiary-color);
    animation: animatespan 5s linear infinite;
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: ($i * 0.1s);
      }
    }
  }
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animatespan {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
