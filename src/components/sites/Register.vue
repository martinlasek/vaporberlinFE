<template>

  <standard-layout>
    <template slot="content">

      <page-header text="REGISTER TO VOTE TOPICS!"/>

      <white-box-small>

        <email-field toEmit="updatedEmail" @updatedEmail="val => email = val" />
        <password-field toEmit="updatePassword" @updatePassword="val => password = val" />
        <submit-button text="Register" toEmit="submit" @submit="register"/>

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

    components: {
      StandardLayout,
      WhiteBoxSmall,
      EmailField,
      PasswordField,
      SubmitButton,
      PageHeader
    },

    data() {
      return {
        password: '',
        email: ''
      }
    },

    methods: {

      register() {

        // TODO: implement api call
      }
    }
  }
</script>