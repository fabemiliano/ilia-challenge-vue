<template>
  <div v-if="!isLoading">
    <div :style="{ filter: style }" class="main">
      <BackButton />
      <Header />
      <div class="container">
        <img :src="pokemonDetails.imageUrlHiRes" alt="" />
        <DetailedCard />
      </div>
    </div>
    <Modal v-if="showModal" />
  </div>
  <Loading v-else />
</template>

<script>
import DetailedCard from "@/components/DetailedCard.vue";
import BackButton from "@/components/BackButton.vue";
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    DetailedCard,
    BackButton,
    Header,
    Modal,
  },
  props: {
    id: {
      type: String,
    },
  },
  methods: mapActions(["getPokemonCardById"]),
  created() {
    this.getPokemonCardById(this.id);
  },
  computed: {
    style() {
      const ret = this.showModal ? "blur(10px)" : "blur(0)";
      console.log(ret);
      return ret;
      // return this.showModal ? "10px" : 0;
    },
    ...mapState(["pokemonDetails", "showModal", "isLoading"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.main {
  @include flexColumn(flex-end);
  @include mainPage(
    100vh,
    100%,
    linear-gradient(0deg, $quarter-color 0%, $main-color 100%)
  );
  transition: 0.5s;
  .container {
    @include flexColumn(center);
    height: 75%;
    margin-bottom: 40px;
    padding-top: 40px;
    width: 90%;
    max-width: 300px;
  }
}

@media (min-width: 768px) {
  .main {
    .container {
      @include flexRow(space-around);
      flex-direction: row;
      width: 80%;
      max-width: none;
      img {
        max-height: 90%;
      }
      .cardInfo {
        width: 300px;
        height: 150px;
        .right {
          justify-content: flex-start;
        }
      }
    }
  }
}
</style>
