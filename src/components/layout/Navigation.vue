<template>
  <nav class="container">
    <div class="logo">
      <router-link to="/">vapor.berlin</router-link>
    </div>
    <div class="menu">
      <router-link to="/topics">topics</router-link>
      <router-link to="/register">register</router-link>
      <router-link to="/login">login</router-link>
    </div>
  </nav>
</template>

<style lang="less">
  @import "../../assets/styles/css/min/Navigation.less";
</style>