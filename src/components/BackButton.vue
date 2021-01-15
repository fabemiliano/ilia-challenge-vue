<template>
  <div class="arrowLeft">
    <font-awesome-icon icon="arrow-left"></font-awesome-icon>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../sass_utilities/variables";

.arrowLeft {
  @include flexRow(center);
  @include absoluteLeftTop(0, 50%);
  @include iconBg(50px, 50px, 50%, $aux-color);
  color: $quarter-color;
  transition: 0.5s;
  &:hover {
    background: $quarter-color;
    color: $aux-color;
  }
}
</style>
