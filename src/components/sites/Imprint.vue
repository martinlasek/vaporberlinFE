<template>
  <standard-layout>
    <template slot="content">
      <page-header>
        IMPRINT
      </page-header>
      <white-box-small>
        <div class="imprint-content">
          <h4>developed by</h4>
          <h2>Martin J. Lasek</h2>
          <p><a href="mailto:kontakt@martinlasek.de">kontakt@martinlasek.de</a></p>
          <p>
            <a href="https://github.com/MartinLasek" target="_blank">Github</a> /
            <a href="https://twitter.com/martinlasek" target="_blank">Twitter</a> /
            <a href="https://www.instagram.com/martin_lasek/" target="_blank">Instagram</a>
          </p>
        </div>
      </white-box-small>
    </template>
  </standard-layout>
</template>

<script>
  import StandardLayout from '../layout/Standard.vue'
  import PageHeader from '../elements/PageHeader.vue'
  import WhiteBoxSmall from '../elements/WhiteBoxSmall.vue'

  export default {
    components: { StandardLayout, PageHeader, WhiteBoxSmall }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/Imprint.less";
</style>