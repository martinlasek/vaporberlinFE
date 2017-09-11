<template>
  <div>
    <standard-navigation />

    <div class="hero container">
      <slot name="hero" />
    </div>

    <div class="container">
      <slot name="content" />
    </div>

    <slot name="footer" />
  </div>
</template>

<script>
  import StandardNavigation from './Navigation'

  export default {

    components: { StandardNavigation }
  }
</script>