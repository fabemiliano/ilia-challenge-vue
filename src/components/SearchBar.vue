<template>
  <div class="search">
    <input
      type="text"
      placeholder="search pokemon"
      :value="pokemonTyped"
      @input="typePokemonInInput"
    />
    <div>
      <font-awesome-icon icon="search" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    pokemonTyped: state => state.pokemonTyped
  }),
  methods: {
    typePokemonInInput(e) {
      this.$store.dispatch("typePokemon", e.target.value);
    }
  },
  updated() {
    this.typePokemon(this.pokemonTyped);
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.search {
  position: relative;
  @include flexRow(flex-end);
  &:hover {
    input {
      width: 150px;
    }
  }
  input {
    @include iconBg(35px, 35px, 10px, "");
    box-sizing: border-box;
    font-family: Bebas Neue;
    font-size: 1rem;
    padding-left: 10px;
    outline: none;
    transition: 0.5s;
  }
  div {
    @include absoluteRightTop(0, 0);
    @include flexRow(center);
    @include iconBg(35px, 35px, 10px, $secondary-color);
  }
}

@media (min-width: 768px) {
  .search {
    &:hover {
      input {
        width: 350px;
      }
    }
    input {
      width: 50px;
      height: 50px;
      padding-left: 20px;
      font-size: 1rem;
    }
    div {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
