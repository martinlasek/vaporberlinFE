<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <text-field toEmit="email" fieldName="email" label="OLD EMAIL"></text-field>
      </div>
      <div class="col-xs-12">
        <text-field toEmit="email" fieldName="email" label="NEW EMAIL"></text-field>
      </div>
      <div class="col-xs-12">
        <custom-button text="save"/>
      </div>
    </div>
  </div>
</template>
<script>
  import TextField from '../../elements/TextField.vue'
  import CustomButton from '../../elements/CustomButton.vue'

  export default {

    components: { TextField, CustomButton },

    mounted() {
      // fetch security information
    }
  }
</script>
