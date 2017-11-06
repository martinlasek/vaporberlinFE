<template>
  <div class="general">
    <div class="row">
      <div class="col-xs-12">
        <text-field
          toEmit="change"
          fieldName="email"
          :text="email"
          :disabled="true"
        />
      </div>
      <div class="col-xs-12">
        <text-field
          toEmit="change"
          @change="val => patchData.email = val"
          fieldName="email"
          label="new email"
        />
      </div>
      <spinner :isActive="spinner" />
    </div>
    <div class="row confirm-area">
      <div class="col-xs-12">
        <custom-button text="Save" @click.native="save"/>
      </div>
    </div>
  </div>
</template>
<script>
  import TextField from '../../elements/TextField.vue'
  import CustomButton from '../../elements/CustomButton.vue'
  import Spinner from '../../elements/Spinner.vue'
  import {updateUserEmail} from '../../../api/api'

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

    methods: {

      save() {
        this.spinner = true;
        updateUserEmail(this.patchData, this.handleResponse)
      },

      handleResponse(resp) {
        this.spinner = false;

        if (resp.error) {
          console.log(resp.messages);
        } else {
          this.$store.dispatch('setUserEmail', resp.data.email);
        }
      }
    }
  }
</script>
