<template>
  <div class="text-center header">
    {{ text }}
  </div>
</template>

<script>
  export default {

    props: {

      text: {required: true}
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/PageHeader.less";
</style>