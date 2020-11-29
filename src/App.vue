<template>
  <div id="app">
    <div class="">
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";
  *{
    margin: 0;
    padding: 0;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-family: $font-hei;
    font-size: 16px;
    line-height: 1.5;
  }
</style>
