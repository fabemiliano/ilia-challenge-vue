<template>
  <div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://db.onlinewebfonts.com/c/f4d1593471d222ddebd973210265762a?family=Pokemon");

body {
  margin: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

p {
  margin: 0;
  padding: 0;
  font-family: Bebas Neue;
}

a,
button {
  text-decoration: none;
  cursor: url("./assets/cursor.png"), auto;
}
</style>
