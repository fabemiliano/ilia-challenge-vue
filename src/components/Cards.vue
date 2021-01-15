<template>
  <div class="container">
    <router-link
      class="card"
      :to="{ name: 'details', params: { id: pokemon.id } }"
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :style="{ backgroundColor: typeColor(pokemon) }"
    >
      <div>
        <p>{{ pokemon.name }}</p>
        <p>{{ pokemon.id }}</p>
        <img
          v-show="pokemon.types"
          :src="typeIcon(pokemon)"
          alt=""
          width="20px"
        />
      </div>
      <img :src="pokemon.imageUrl" :alt="pokemon.name" />
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TypesMixin } from "@/mixins/TypesMixin";
export default {
  created() {
    this.getPokemonCards();
  },
  computed: {
    ...mapState(["pokemons"])
  },
  mixins: [TypesMixin]
};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.container {
  display: flex;
  width: 90%;
  margin: 10px auto;
  overflow-x: scroll;
  .card {
    @include flexColumn(space-between);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5),
      -5px -5px 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border: 5px solid black;
    margin: 25px 10px;
    min-height: 350px;
    padding: 10px;
    position: relative;
    transition: 0.5s;
    min-width: 200px;
  }
}

@media only screen and (min-width: 768px) {
  .container {
    overflow: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
