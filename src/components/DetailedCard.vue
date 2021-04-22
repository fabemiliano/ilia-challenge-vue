<template>
  <div class="cardInfo">
    <div class="left">
      <p>{{ $t("resistances") }}</p>
      <p>{{ $t("weaknesses") }}</p>
      <p>{{ types ? pokemonDetails.weaknesses[0].type : "" }}</p>
      <p>{{ types ? pokemonDetails.weaknesses[0].value : "" }}</p>
    </div>
    <div class="right">
      <p>{{ $t("attacks") }}</p>
      <div class="attacks">
        <button
          :style="{ backgroundColor: color }"
          v-for="attack in pokemonDetails.attacks"
          :key="attack.name"
          @click="openModal(attack.name)"
        >
          {{ attack.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import pokeTypes from "@/assets/pokeTypes";

export default {
  methods: {
    openModal(e) {
      this.showModal();
      this.setAttack(e);
    },
    ...mapActions(["getPokemonCardById", "showModal", "setAttack"])
  },
  computed: {
    types() {
      if (this.pokemonDetails.types) return true;
      return false;
    },
    color() {
      const type = this.pokemonDetails.types[0];
      const teste = pokeTypes.find(ptype => ptype.type === type);
      const color = teste ? teste.color : "trasparent";
      return color;
    },
    ...mapGetters(["getColor", "getTypeIcon", "getWeakIcon"]),
    ...mapState(["pokemonDetails"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";
.cardInfo {
  @include flexRow(space-around);
  margin-top: 30px;
  width: 100%;
  border: 1px solid $secondary-color;
  padding: 10px;
  & > div {
    & > p {
      @include text(1.5rem, $secondary-color);
      margin: 5px;
    }
  }
  .left {
    @include flexColumn(space-between);
    height: 100%;
    div {
      @include flexRow(space-around);
      p {
        @include text(1rem, $tertiary-color);
      }
    }
    img {
      width: 30px;
    }
  }
  .right {
    @include flexColumn(space-between);
    height: 100%;
    .attacks {
      @include flexColumn(center);
      width: 90%;
      button {
        @include iconBg(40px, 100px, 50px, $quarter-color);
        color: $main-color;
        font-weight: 900;
        margin: 4px;
      }
    }
  }
}
</style>
