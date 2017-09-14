<template>
  <nav class="container">
    <div class="logo">
      <router-link to="/">vapor.berlin</router-link>
    </div>
    <div class="menu">
      <router-link :to="{name: 'topics'}">topics</router-link>
      <router-link :to="{name: 'register'}">register</router-link>
      <router-link :to="{name: 'login'}">login</router-link>
    </div>
  </nav>
</template>

<style lang="less">
  @import "../../assets/styles/css/min/Navigation.less";
</style>