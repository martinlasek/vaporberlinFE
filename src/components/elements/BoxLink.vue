<template>
  <div class="box-link">
    <a :href="route"></a>
    <slot name="image"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
  export default {

    props: {
      title: {required: true},
      route: {required: true}
    }
  }
</script>

<style>
  .box-link {
    background-color: #ffffff;
    height: 250px;
    width: 400px;
  }
</style>