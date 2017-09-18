<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  require('./assets/styles/css/bootstrap.min.css');
  require('./assets/styles/css/fonts.css');

  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import "assets/styles/css/min/base.less";
</style>
