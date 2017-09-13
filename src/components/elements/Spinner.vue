<template>
  <div :class="['cover', {'isActive': isActive}]">
    <div class="loader"></div>
  </div>
</template>

<script>
  export default {

    props: {

      isActive: {default: false}
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/Spinner.less";
</style>