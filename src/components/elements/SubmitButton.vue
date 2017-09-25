<template>
  <div class="form-group submit">
    <button class="btn" @click="clicked">
      {{ text }}
    </button>
  </div>
</template>


<script>
  export default {
    props: {
      toEmit: '',
      text: {default: 'Submit'}
    },

    methods: {
      clicked() {
        this.$emit(this.toEmit);
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/SubmitButton.less";
</style>