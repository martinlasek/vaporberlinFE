<template>
  <div class="box-link">
    <a v-if="external" :href="route" :target="target"></a>
    <router-link v-else :to="route" :target="target"></router-link>
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
      target: {default: ''},
      external: {default: false}
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/BoxLink.less";
</style>