<template>
  <div class="form-group email">
    <label for="email" class="label">
      EMAIL
    </label>
    <input id="email" type="email" class="form-control" v-model="email">
  </div>
</template>

<script>
  export default {

    props: {
      toEmit: ''
    },

    data() {
      return {
        email: ''
      }
    },

    watch: {

      email(val) {

        this.$emit(this.toEmit, val);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/EmailField.less";
</style>