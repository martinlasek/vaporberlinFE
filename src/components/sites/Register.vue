<template>

  <standard-layout>
    <template slot="content">

      <div class="register">
        <page-header> REGISTER TO VOTE TOPICS! </page-header>

        <white-box-small>

          <form-error purpose="danger" v-if="hasErrors" :errorMessages="errorMessages"/>
          <email-field toEmit="updatedEmail" @updatedEmail="val => email = val" @enter="register"/>
          <password-field toEmit="updatePassword" @updatePassword="val => password = val" @enter="register"/>
          <submit-button text="Register" toEmit="submit" @submit="register"/>
          <spinner :isActive="spinner" />

        </white-box-small>
      </div>

    </template>
  </standard-layout>

</template>

<script>
  import StandardLayout from '../layout/Standard.vue'
  import WhiteBoxSmall from '../elements/WhiteBoxSmall.vue'
  import EmailField from '../elements/EmailField.vue'
  import PasswordField from '../elements/PasswordField.vue'
  import SubmitButton from '../elements/SubmitButton.vue'
  import PageHeader from '../elements/PageHeader.vue'
  import FormError from '../elements/FormError.vue'
  import Spinner from '../elements/Spinner.vue'
  import {register} from '../../api/api'

  export default {

    components: {
      StandardLayout,
      WhiteBoxSmall,
      EmailField,
      PasswordField,
      SubmitButton,
      PageHeader,
      FormError,
      Spinner
    },

    data() {
      return {
        password: '',
        email: '',
        spinner: false,
        hasErrors: false,
        errorMessages: []
      }
    },

    methods: {
      register() {
        if (this.email === '' && this.password === '') {
          this.errorMessages.push('you must fill out the fields.');
          this.hasErrors = true;
          return;
        }

        this.spinner = true;
        register(this.email, this.password, this.handleResponse);
      },

      handleResponse(resp) {
        this.spinner = false;

        if (resp.error) {
          this.handleResponseErrors(resp);
        } else {
          const user = resp.data;
          this.$store.dispatch('setUser', user);
          this.$router.push({name: 'login'});
        }
      },

      handleResponseErrors(resp) {
        this.errorMessages = resp.messages;
        this.hasErrors = true;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/Register.less";
</style>