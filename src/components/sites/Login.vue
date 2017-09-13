<template>

  <standard-layout>
    <template slot="content">

      <page-header text="LOGIN"/>

      <white-box-small>

        <email-field toEmit="updateEmail" @updateEmail="val => email = val"/>
        <password-field toEmit="updatePassword" @updatePassword="val => password = val"/>
        <submit-button text="Login" toEmit="submit" @submit="login"/>

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

  export default {

    components: { StandardLayout, WhiteBoxSmall, EmailField, PasswordField, SubmitButton, PageHeader },

    data() {

      return {

        email: '',
        password: ''
      }
    },

    methods: {

      login() {

        // TODO: implement api call
      }
    }
  }
</script>