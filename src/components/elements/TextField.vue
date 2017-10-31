<template>
  <div class="form-group">
    <label class="label">
      {{ label }}
    </label>
    <input
      :name="fieldName"
      type="text"
      class="form-control"
      v-model="value"
      @change="fireEnter"
    >
  </div>
</template>

<script>
  export default {

    props: {
      toEmit: {required: true},
      fieldName: {required: true},
      text: {required: true}
    },

    computed: {
      label() {
        return this.fieldName.toUpperCase()
      }
    },

    data() {
      return {
        value: this.text
      }
    },

    methods: {
      fireEnter() {
        this.$emit('change', this.value)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/TextField.less";
</style>
