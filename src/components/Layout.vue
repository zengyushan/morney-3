<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot />
    </div>
    <Nav />
  </div>
</template>
<script lang="ts">
import x from "@/assets/icons/label.svg"
export default {
    name:'Layout'
}
</script>
<style lang="scss">
.nav-wrapper{
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
    .content{
      flex-grow: 1;
      overflow: auto;
    }
}
</style>