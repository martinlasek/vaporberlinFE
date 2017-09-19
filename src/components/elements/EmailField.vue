<template>
  <div class="form-group email">
    <label class="label">
      EMAIL
    </label>
    <input
      v-validate="'required|email'"
      name="email"
      type="text"
      class="form-control"
      v-model="email"
      @blur="visited"
    >
    <span :class="{'glyphicon glyphicon-ok': true, 'visible': revealTick && !errors.has('email') && showIsValid}" aria-hidden="true"></span>
    <span :class="{'glyphicon glyphicon-remove': true, 'visible': revealTick && errors.has('email')}" aria-hidden="true"></span>
    <error-message v-if="errors.has('email')">
      {{ errors.first('email') }}
    </error-message>
  </div>
</template>

<script>
  import ErrorMessage from './ErrorMessage.vue';

  export default {
    components: { ErrorMessage },

    props: {
      toEmit: '',
      showIsValid: {default: false}
    },

    data() {
      return {
        email: '',
        revealTick: false
      }
    },

    methods: {
      visited() {
        this.revealTick = true;
      }
    },

    watch: {
      email(val) {
        this.$emit(this.toEmit, val);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/styles/css/min/EmailField.less";
</style>