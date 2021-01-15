<template>
  <div class="circle" :style="{ backgroundColor: color }">
    <div>
      <div>
        <img :src="img" alt="" />
      </div>
      <p>{{ pokemonDetails.name }}</p>
      <p>{{ pokemonDetails.id }}</p>
    </div>
    <p></p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import pokeTypes from "@/assets/pokeTypes";

//descobrir pq aqui da erro se nao fiz o ternario
export default {
  computed: {
    color() {
      const type = this.pokemonDetails.types[0];
      const teste = pokeTypes.find(ptype => ptype.type === type);
      const color = teste ? teste.color : "trasparent";
      return color;
    },
    img() {
      const type = this.pokemonDetails.types[0];
      const teste = pokeTypes.find(ptype => ptype.type === type);
      const img = teste ? teste.src : "./icons/metal.svg";
      return img;
    },
    ...mapState(["pokemonDetails"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.circle {
  @include absoluteLeftTop(0, 0%);
  @include flexColumn(flex-end);
  @include iconBg(40%, 100%, 50%, $aux-color);
  transform: translateY(-50%);
  p {
    @include text(2rem, $tertiary-color);
    &:last-child {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
  & > div {
    @include flexColumn(flex-end);
    div {
      @include flexColumn(center);
      @include iconBg(50px, 50px, 50%, $main-color);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2),
        0 0 30px rgba(0, 0, 0, 0.2);
      img {
        width: 50%;
      }
    }
  }
}
</style>
