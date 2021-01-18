<template>
  <div class="main">
    <div class="container">
      <div>
        <h1>4</h1>
        <img src="@/assets/pokeball.png" alt="" />
        <h1>4</h1>
      </div>
      <h1>Not Found</h1>
      <router-link :to="{ name: 'home' }">Main Page</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.main {
  @include mainPage(
    100vh,
    100%,
    linear-gradient(0deg, $quarter-color 0%, $main-color 100%)
  );
  @include flexColumn(center);
  h1 {
    color: $secondary-color;
    font-family: Pokemon;
    font-size: 3rem;
    margin: 0;
  }
  .container {
    @include flexColumn(center);
    div {
      @include flexRow(center);
      img {
        width: 60px;
      }
    }
    a {
      background: $secondary-color;
      padding: 10px 20px;
      border-radius: 50px;
      font-size: 1.5rem;
      font-family: Bebas Neue;
    }
  }
}
</style>
