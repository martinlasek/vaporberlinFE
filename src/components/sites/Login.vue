<template>

  <standard-layout>
    <template slot="content">

      <page-header> LOGIN </page-header>

      <white-box-small>

        <form-error purpose="danger" v-if="hasErrors" :errorMessages="errorMessages"/>
        <email-field toEmit="updateEmail" @updateEmail="val => email = val"/>
        <password-field toEmit="updatePassword" @updatePassword="val => password = val"/>
        <submit-button text="Login" toEmit="submit" @submit="login" />
        <spinner :isActive="spinner" />

      </white-box-small>

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
  import {login, fetchUser} from '../../api/api'

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
        email: '',
        password: '',
        spinner: false,
        hasErrors: false,
        errorMessages: []
      }
    },

    methods: {
      login() {
        if (this.email === '' && this.password === '') {
          this.errorMessages.push('you must fill out the fields.');
          this.hasErrors = true;
          return;
        }

        this.spinner = true;
        login(this.email, this.password, this.handleResponse);
      },

      handleResponse(resp) {
        this.spinner = false;

        if (resp.error) {
          this.handleResponseErrors(resp);
        } else {
          const token = resp.data.token;
          this.$store.dispatch('setToken', token);
          fetchUser();
          this.$router.push({name: 'topics'});
        }
      },

      handleResponseErrors(resp) {
        this.errorMessages = resp.messages;
        this.hasErrors = true;
      }
    }
  }
</script>