<template>
  <div class="form-group password">

    <label class="label">
      PASSWORD
    </label>

    <div class="input-group">
      <input
        v-validate="'required'"
        name="password"
        type="password"
        :class="['form-control', { 'hidden': showPassword }]"
        v-model="password"
      >
      <input
        type="text"
        :class="['form-control', { 'hidden': !showPassword }]"
        v-model="password"
      >
      <span class="input-group-btn">
        <button class="btn" @click="togglePassword">
          <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
        </button>
      </span>
    </div>
    <span :class="{'glyphicon glyphicon-remove': true, 'visible': errors.has('password')}"></span>

    <error-message v-if="errors.has('password')">
      {{ errors.first('password') }}
    </error-message>

  </div>
</template>

<script>
  import ErrorMessage from './ErrorMessage.vue';

  export default {
    components: { ErrorMessage },

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