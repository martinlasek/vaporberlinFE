<template>
  <div class="general">
    <div class="row">
      <div class="col-xs-12">
        <text-field
          toEmit="change"
          @change="val => patchData.firstName = val"
          fieldName="firstname" :text="getValOf('firstName')"
        />
      </div>
      <div class="col-xs-12">
        <text-field
          toEmit="change"
          @change="val => patchData.lastName = val"
          fieldName="lastname"
          :text="getValOf('lastName')"
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

    computed: {
      firstName() {
        const fn = this.$store.getters.getUser.firstName;
        if (fn === null) return '';
        return fn;
      }
    },

    data() {
      return {
        patchData: {}
      }
    },

    methods: {

      getValOf(userProp) {
        const value = this.$store.getters.getUser[userProp];
        if (value === null) return '';
        return value;
      },

      save() {
        console.log("patch object: ", this.patchData);
      }
    }
  }
</script>
