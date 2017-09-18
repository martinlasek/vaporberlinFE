<template>

  <standard-layout>
    <template slot="content">

      <page-header> REGISTER TO VOTE TOPICS! </page-header>

      <white-box-small>

        <email-field toEmit="updatedEmail" @updatedEmail="val => email = val" />
        <password-field toEmit="updatePassword" @updatePassword="val => password = val" />
        <submit-button text="Register" toEmit="submit" @submit="register"/>
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
  import {register} from '../../api/api'

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
        password: '',
        email: '',
        spinner: false
      }
    },

    methods: {

      register() {

        this.spinner = true;
        register(this.email, this.password, this.handleRegisterResponse);
      },

      handleRegisterResponse(regResp) {
        console.log(regResp);
        // http status 200 OK
        if (regResp.status === 200) {

          const user = regResp.data;
          this.$store.dispatch('setUser', user);
          this.$router.push({name: 'profile'});
        }

        if (regResp.status === 409) {

          this.spinner = false;
        }
      }
    }
  }
</script>