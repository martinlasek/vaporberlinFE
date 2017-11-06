<template>
  <div class="form-group">
    <label class="label">
      {{ generatedLabel }}
    </label>
    <input
      :name="fieldName"
      type="text"
      class="form-control"
      :value="text"
      @change="fireEnter"
      :disabled="disabled"
    >
  </div>
</template>

<script>
  export default {

    props: {
      toEmit: {required: true},
      fieldName: {required: true},
      text: {default: ''},
      disabled: {default: false},
      label: {default: ''}
    },

    computed: {
      generatedLabel() {
        if (this.label === '') return this.fieldName.toUpperCase();
        return this.label.toUpperCase();
      }
    },

    data() {
      return {
        value: this.text
      }
    },

    methods: {
      fireEnter(val) {
        this.$emit('change', val.target.value)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/TextField.less";
</style>
