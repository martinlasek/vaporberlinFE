<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  require('./assets/styles/css/bootstrap.min.css');
  require('./assets/styles/fonts.css');

  export default {
    name: 'app'
  }
</script>

<style lang="less">
  html {
    background: linear-gradient(135deg,#f46a78 0%,#fabb8f 100%);
    font-family: Lato;
    min-height: 100%;

    body {
      background: transparent;
    }
  }
</style>
