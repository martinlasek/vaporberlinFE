<template>
  <button class="btn btn-custom pull-right" >
    {{ text }}
  </button>
</template>

<script>

  export default {

    props: {
      text: {required: true}
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/CustomButton";
</style>
