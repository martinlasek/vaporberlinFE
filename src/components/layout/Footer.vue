<template>
  <div class="footer">
    <div class="container">
      <div class="col-xs-4">
        <a href="https://github.com/vapor/vapor" target="_blank">Built with Vapor</a>
      </div>
      <div class="col-xs-4 text-center">
        <router-link :to="{name: 'versions'}">
          {{ version }}
        </router-link>
      </div>
      <div class="col-xs-4 text-right">
        <router-link :to="{name: 'about'}">About</router-link>
        <router-link :to="{name: 'imprint'}">Imprint</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {versions} from '../../utils/versions'

  export default {
    computed: {
      version() {
        return versions[0].number
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/Footer.less";
</style>
