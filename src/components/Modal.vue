<template>
  <div class="modal">
    <button @click="showModal" class="exit">
      <font-awesome-icon icon="times" color="#fff" />
    </button>
    <div class="attackInfo">
      <p>{{ attack.name }}</p>
      <p>Mana: -{{ attack.convertedEnergyCost }}</p>
      <p>{{ $t("damage") }}: {{ attack.damage }}</p>
      <p>{{ $t("description") }}: {{ attack.text }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState(["attack"]),
  methods: mapActions(["showModal"])
};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.modal {
  @include absoluteLeftTop(50%, 50%);
  background: $quarter-color;
  border-radius: 40px;
  height: 40vh;
  max-width: 500px;
  padding: 20px;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 1;
  p {
    @include text(2rem, $tertiary-color);
    &:first-child {
      font-size: 3rem;
    }
    &:last-child {
      font-size: 1rem;
    }
  }
  .exit {
    @include absoluteRightTop(10px, 10px);
    @include flexRow(center);
    @include iconBg(40px, 40px, 50%, $quarter-color);
    transition: 0.5s;
    svg {
      path {
        fill: $tertiary-color;
        transition: 0.5s;
      }
    }
    &:hover {
      background: $tertiary-color;
      svg {
        path {
          fill: $quarter-color;
        }
      }
    }
  }
  .attackInfo {
    @include flexColumn(space-around);
    height: 100%;
  }
}

@media (min-width: 768px) {
  .main {
    p {
      &:last-child {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
