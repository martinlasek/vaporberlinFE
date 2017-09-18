<template>

  <standard-layout>
    <template slot="content">

      <page-header> LOGIN </page-header>

      <white-box-small>

        <email-field toEmit="updateEmail" @updateEmail="val => email = val"/>
        <password-field toEmit="updatePassword" @updatePassword="val => password = val"/>
        <submit-button text="Login" toEmit="submit" @submit="login"/>
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
  import Spinner from '../elements/Spinner.vue'
  import {login} from '../../api/api'

  export default {

    components: {
      StandardLayout,
      WhiteBoxSmall,
      EmailField,
      PasswordField,
      SubmitButton,
      PageHeader,
      Spinner
    },

    data() {
      return {
        email: '',
        password: '',
        spinner: false
      }
    },

    methods: {

      login() {

        this.spinner = true;
        login(this.email, this.password, this.handleLoginResponse);
      },

      handleLoginResponse(loginResponse) {

        this.spinner = false;

        if (loginResponse.data.status === 401) {

        }

        console.log(loginResponse);
      }
    }
  }
</script>