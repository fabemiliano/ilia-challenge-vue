<template>
  <div v-if="!isLoading" class="main">
    <div class="nav">
      <Language />
      <Navbar />
    </div>
    <Cards />
  </div>
  <Loading v-else />
</template>

<script>
import Cards from "@/components/Cards.vue";
import Navbar from "@/components/Navbar.vue";
import Language from "@/components/Language.vue";
import { mapActions, mapState } from "vuex";

export default {
  created() {
    this.getPokemonCards();
  },
  computed: mapState(["isLoading"]),
  methods: mapActions(["getPokemonCards"]),

  components: {
    Cards,
    Navbar,
    Language
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
  overflow: scroll;
  .nav {
    @include flexColumn(space-between);
    width: 90%;
    margin: auto;
    margin-top: 40px;
    h1 {
      color: $secondary-color;
      font-family: Pokemon;
      letter-spacing: 4px;
      -webkit-box-reflect: below -30px linear-gradient(to bottom, transparent, transparent, black);
      padding: 0;
      transition: 0.5s;
    }
  }
}
</style>
