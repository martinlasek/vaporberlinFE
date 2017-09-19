<template>
  <div class="form-group">
    <ul :class="purposeClass">
      <li v-for="error in errorMessages">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

    props: {
      purpose: {default: 'default'},
      errorMessages: null
    },

    computed: {

      purposeClass() {

        return 'form-error ' + this.purpose;
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/FormError.less";
</style>