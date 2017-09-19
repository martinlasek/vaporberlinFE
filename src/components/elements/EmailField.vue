<template>
  <div class="form-group email">
    <label class="label">
      EMAIL
    </label>
    <input
      v-validate="'required|email'"
      name="email"
      type="text"
      class="form-control"
      v-model="email"
    >
    <span :class="{'glyphicon glyphicon-ok': true, 'visible': !errors.has('email') && showIsValid}"></span>
    <span :class="{'glyphicon glyphicon-remove': true, 'visible': errors.has('email')}"></span>
    <error-message v-show="errors.has('email')">
      {{ errors.first('email') }}
    </error-message>
  </div>
</template>

<script>
  import ErrorMessage from './ErrorMessage.vue';

  export default {
    components: { ErrorMessage },

    props: {
      toEmit: '',
      showIsValid: {default: false}
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