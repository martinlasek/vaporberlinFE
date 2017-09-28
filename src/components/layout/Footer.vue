<template>
  <div class="footer">
    <div class="container">
      <div class="col-xs-4">
        <a href="https://github.com/vapor/vapor" target="_blank">Built with Vapor</a>
      </div>
      <div class="col-xs-4 text-center">
        <router-link :to="{name: 'versions'}">
          1.0.1
        </router-link>
      </div>
      <div class="col-xs-4 text-right">
        <router-link :to="{name: 'about'}">About</router-link>
        <router-link :to="{name: 'imprint'}">Imprint</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/Footer.less";
</style>
