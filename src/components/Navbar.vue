<template>
  <div>
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

<style lang="scss" scoped></style>
