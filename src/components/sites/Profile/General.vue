<template>
  <div class="general">
    <div class="row">
      <div class="col-xs-12">
        <text-field toEmit="firstName" fieldName="firstname" label="FIRSTNAME"></text-field>
      </div>
      <div class="col-xs-12">
        <text-field toEmit="lastName" fieldName="lastname" label="LASTNAME"></text-field>
      </div>
      <div class="col-xs-12">
        <text-field toEmit="website" label="WEBSITE" fieldName="website"></text-field>
      </div>
      <div class="col-xs-12">
        <text-field toEmit="company" label="COMPANY" fieldName="company"></text-field>
      </div>
      <div class="col-xs-12">
        <custom-button text="Save" @click.native="save"/>
      </div>
    </div>
    <div class="row">
    </div>
  </div>
</template>
<script>
  import TextField from '../../elements/TextField.vue'
  import CustomButton from '../../elements/CustomButton.vue'

  export default {
    components: { TextField, CustomButton },

    data() {
      return {
        patchData: {}
      }
    },

    methods: {
      save() {
        console.log("save");
      }
    },

    mounted() {
      // fetch general information
    }
  }
</script>
