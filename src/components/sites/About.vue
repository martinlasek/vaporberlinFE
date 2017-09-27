<template>
  <standard-layout>
    <template slot="content">
      <page-header>
        ABOUT
      </page-header>
      <white-box-small>
        <h4>Purpose</h4>
        <p>Decide by voting what topics shall be presented on the next meetup!</p>
        <br>
        <h4>Technology</h4>
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