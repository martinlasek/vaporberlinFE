<template>
  <div class="form-group">
    <label class="label">
      {{ label }}
    </label>
    <input
      name="email"
      type="text"
      class="form-control"
      v-model="value"
      @keyup.enter="fireEnter"
    >
  </div>
</template>

<script>
  export default {

    props: {
      toEmit: {required: true},
      label: {required: true},
      fieldName: {required: true}
    },

    data() {
      return {
        value: ''
      }
    },

    methods: {
      fireEnter() {
        this.$emit('enter', this.value)
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
  @import "../../assets/styles/css/min/TextField.less";
</style>
