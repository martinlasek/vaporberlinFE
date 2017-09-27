<template>
  <div>
    <standard-navigation />

    <div class="hero container">
      <slot name="content" />
    </div>

    <standard-footer />
  </div>
</template>

<script>
  import StandardNavigation from './Navigation';
  import StandardFooter from './Footer.vue';

  export default {

    components: { StandardNavigation, StandardFooter }
  }
</script>