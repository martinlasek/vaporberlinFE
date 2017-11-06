<template>
  <div class="general">
    <div class="row">
      <div class="col-xs-12">
        <text-field
          toEmit="change"
          @change="val => patchData.email = val"
          fieldName="email"
          :text="email"
          :disabled="true"
        />
      </div>
      <div class="col-xs-12">
        <custom-button text="Delete" @click.native="deleteUser"/>
      </div>
      <spinner :isActive="spinner" />
    </div>
  </div>
</template>
<script>
  import TextField from '../../elements/TextField.vue'
  import CustomButton from '../../elements/CustomButton.vue'
  import Spinner from '../../elements/Spinner.vue'
  import {logout, deleteUser} from '../../../api/api'

  export default {
    components: { TextField, CustomButton, Spinner },

    computed: {
      email() {
        return this.$store.getters.getUser['email'];
      }
    },

    data() {
      return {
        patchData: {},
        spinner: false
      }
    },
/**
 *  text-field gotta take its value from store
 *  fire up the change
 *  here we will use da patcha data and
 *  on succeesso dispatch to the store
 *  where the text-field will notice da change
 *  and update it's value
 * **/
    methods: {

      deleteUser() {
        this.spinner = true;
        deleteUser(this.handleResponse)
      },

      handleResponse(resp) {
        this.spinner = false;

        if (resp.error) {
          console.log(resp.messages);
        } else {
          logout();
        }
      }
    }
  }
</script>
