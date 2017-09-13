<template>
  <div class="form-group password">

    <label for="password" class="label">
      PASSWORD
    </label>

    <div class="input-group">

      <input id="password" type="password" :class="['form-control', { 'hidden': showPassword }]" v-model="password">

      <input id="password-show" type="text" :class="['form-control', { 'hidden': !showPassword }]" v-model="password">

      <span class="input-group-btn">
        <button class="btn" @click="togglePassword">
          <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
        </button>
      </span>
    </div>

  </div>
</template>

<script>
  export default {

    props: {
      toEmit: ''
    },

    data() {
      return {
        showPassword: false,
        password: ''
      }
    },

    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword;
      }
    },

    watch: {
      password(val) {
        this.$emit(this.toEmit, val);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/PasswordField.less";
</style>