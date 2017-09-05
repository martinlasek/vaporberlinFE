<template>
  <div>
    <stdNavigation></stdNavigation>
    <div class="hero container">
      <slot name="hero"></slot>
    </div>
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

  .hero {
    min-height: 300px;
  }

  /**
   ** TABLET
   */
  @media screen and (min-width: 768px) {

  }
</style>