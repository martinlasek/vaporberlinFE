<template>
  <div class="general">
    <div class="row">
      <div class="col-xs-12">
        <text-field
          toEmit="change"
          @change="val => patchData.firstname = val"
          fieldName="firstname"
          :text="getValOf('firstname')"
        />
      </div>
      <div class="col-xs-12">
        <text-field
          toEmit="change"
          @change="val => patchData.lastname = val"
          fieldName="lastname"
          :text="getValOf('lastname')"
        />
      </div>
      <div class="col-xs-12">
        <text-field
          toEmit="change"
          @change="val => patchData.website = val"
          fieldName="website"
          :text="getValOf('website')"
        />
      </div>
      <div class="col-xs-12">
        <text-field
          toEmit="change"
          @change="val => patchData.company = val"
          fieldName="company"
          :text="getValOf('company')"
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
  import {updateUser} from '../../../api/api'

  export default {
    components: { TextField, CustomButton, Spinner },

    data() {
      return {
        patchData: {},
        spinner: false
      }
    },

    methods: {

      getValOf(userProp) {
        const value = this.$store.getters.getUser[userProp];
        if (value === null) return '';
        return value;
      },

      save() {
        this.spinner = true;
        updateUser(this.patchData, this.handleResponse)
      },

      handleResponse(resp) {
        this.spinner = false;

        if (resp.error) {
          console.log(resp.messages);
        } else {
          this.$store.dispatch('setUser', resp.data);
        }
      }
    }
  }
</script>
