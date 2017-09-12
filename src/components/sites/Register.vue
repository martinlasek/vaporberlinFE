<template>

  <standard-layout>
    <template slot="content">

      <div class="text-center header">
        REGISTER TO VOTE TOPICS!
      </div>

      <white-box>

        <email-field toEmit="updatedEmail" @updatedEmail="val => email = val" />

        <password-field toEmit="updatePassword" @updatePassword="val => password = val" />

        <div class="form-group submit">
          <button class="btn register" @click="register">
            register
          </button>
        </div>
      </white-box>

    </template>
  </standard-layout>

</template>

<script>
  import StandardLayout from '../layout/Standard.vue'
  import WhiteBox from '../elements/WhiteBox.vue'
  import EmailField from '../elements/EmailField.vue'
  import PasswordField from '../elements/PasswordField.vue'

  export default {

    components: { StandardLayout, WhiteBox, EmailField, PasswordField },

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

<style lang="less" scoped>
  @import "../../assets/styles/css/min/Register.less";
</style>