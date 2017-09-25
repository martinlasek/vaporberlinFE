<template>
  <nav class="container">
    <div class="logo">
      <router-link to="/">vapor.berlin</router-link>
    </div>
    <div class="menu">
      <router-link :to="{name: 'topics'}">topics</router-link>
      <router-link v-if="!isAuthenticated" :to="{name: 'register'}">register</router-link>
      <router-link v-if="!isAuthenticated" :to="{name: 'login'}">login</router-link>
      <span class="no-border" v-if="isAuthenticated">
        Account
        <ul class="submenu">
          <li>emailmeso@oftenas.yu</li>
          <li @click="logout">logout</li>
        </ul>
      </span>
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