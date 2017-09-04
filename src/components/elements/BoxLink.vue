<template>
  <div class="box-link">
    <a :href="route" :target="target"></a>
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

    props: {
      title: {required: true},
      route: {required: true},
      target: {default: ''}
    }
  }
</script>

<style lang="less">
  .box-link {
    background-color: #ffffff;
    border-radius: 8px;
    height: 200px;
    margin: 15px auto;
    overflow: hidden;
    padding: 30px;
    position: relative;
    text-align: center;
    max-width: 350px;

    a {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }

    .title {
      height: 20%;

      h2 {
        font-size: 14px;
        font-weight: 700;
        margin: 0;
        text-transform: uppercase;
      }
    }

    .body {
      display: flex;
      height: 80%;

      .btn {
        background: #f21f43;
        color: #ffffff;
        margin: auto;
        min-width: 200px;
      }

      .glyphicon-chevron-up {
        font-size: 18px;
        padding-left: 5px;
        padding-right: 15px;
      }

      img {
        margin: auto;
        width: 200px;
        height: auto;
      }
    }
  }
</style>