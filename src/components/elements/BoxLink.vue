<template>
  <div class="box-link">
    <a :href="route" :target="target"></a>
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

    props: {
      title: {required: true},
      route: {required: true},
      target: {default: ''}
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/BoxLink.less";
</style>