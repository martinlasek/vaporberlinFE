<template>

  <standard-layout>
    <template slot="content">

      <div class="text-center header">
        REGISTER TO VOTE TOPICS!
      </div>

      <white-box>

        <div class="form-group email">
          <label for="email" class="label">
            EMAIL
          </label>
          <input id="email" type="email" class="form-control" v-model="email">
        </div>

        <div class="form-group password">
          <label for="password" class="label">
            PASSWORD
          </label>
          <div class="input-group">
            <input id="password" type="password" class="form-control" v-model="password">
            <span v-if="showPassword" class="password-helper"> {{ password }} </span>
            <span class="input-group-btn">
              <button class="btn" @click="togglePassword">
                <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
              </button>
            </span>
          </div>
        </div>

        <div class="form-group submit">
          <button class="btn register">
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

  export default {

    components: { StandardLayout, WhiteBox },

    data() {

      return {
        showPassword: false,
        password: '',
        email: ''
      }
    },

    methods: {

      togglePassword() {

        this.showPassword = !this.showPassword;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/Register.less";
</style>