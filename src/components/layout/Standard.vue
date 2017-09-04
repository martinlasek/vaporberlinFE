<template>
  <div>
    <stdNavigation></stdNavigation>
    <slot name="hero"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
  import stdNavigation from './Navigation'

  export default {

    components: { stdNavigation }
  }
</script>

<style>

</style>