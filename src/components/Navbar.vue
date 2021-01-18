<template>
  <div class="logo-search">
    <div class="logo">
      <h1>Pokedex</h1>
      <img :src="require('@/assets/pokeball.png')" alt="pokeball" />
    </div>
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: {
    SearchBar
  },
  computed: {
    pokemon() {
      return this.$store.state.pokemonName;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.logo-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  .logo {
    position: relative;
    transition: 0.5s;
    h1 {
      color: $secondary-color;
      font-family: Pokemon;
      letter-spacing: 4px;
      -webkit-box-reflect: below -30px linear-gradient(to bottom, transparent, transparent, black);
      padding: 0;
      transition: 0.5s;
    }
    &:hover {
      color: $tertiary-color;
      transform: scale(1.1);
    }
    img {
      @include absoluteLeftTop(18px, 43%);
      width: 25px;
      z-index: 1;
    }
  }
}
</style>
