<template>
  <div class="main">
    <Navbar />
    <Cards />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Cards,
    Navbar
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
}
</style>
