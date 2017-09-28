<template>
  <standard-layout>
    <template slot="content">
      <page-header>
        ABOUT
      </page-header>
      <white-box-small>
        <h2>Purpose</h2>
        <p>Enabling you to decide what will be presented on the next meetup by creating and voting topics!</p>
        <br>
        <h2>Technology</h2>
        <p>Vapor powers the backend and VueJS powers the frontend.</p>
      </white-box-small>
    </template>
  </standard-layout>
</template>

<script>
  import StandardLayout from '../layout/Standard.vue'
  import PageHeader from '../elements/PageHeader.vue'
  import WhiteBoxSmall from '../elements/WhiteBoxSmall.vue'

  export default {
    components: { PageHeader, StandardLayout, WhiteBoxSmall }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/About.less";
</style>