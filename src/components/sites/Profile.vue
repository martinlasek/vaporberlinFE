<template>
  <standard-layout>
    <template slot="content">
      <page-header>
        PROFILE
      </page-header>
    </template>
  </standard-layout>
</template>

<script>
  import StandardLayout from '../layout/Standard.vue';
  import PageHeader from '../elements/PageHeader.vue'

  export default {

    components: { StandardLayout, PageHeader }
  }
</script>