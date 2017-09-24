<template>
  <nav class="container">
    <div class="logo">
      <router-link to="/">vapor.berlin</router-link>
    </div>
    <div class="menu">
      <router-link :to="{name: 'topics'}">topics</router-link>
      <router-link v-if="isAuthenticated" :to="{name: 'profile'}">profile</router-link>
      <router-link v-if="!isAuthenticated" :to="{name: 'register'}">register</router-link>
      <router-link v-if="!isAuthenticated" :to="{name: 'login'}">login</router-link>
      <a v-if="isAuthenticated" href="javascript:void(0);" @click="logout">logout</a>
    </div>
  </nav>
</template>

<script>
  import {isAuthenticated} from '../../api/api';
  import {logout} from '../../api/api';

  export default {

    computed: {
      isAuthenticated() {
        return isAuthenticated();
      }
    },

    methods: {
      logout() {
        logout();
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/Navigation.less";
</style>