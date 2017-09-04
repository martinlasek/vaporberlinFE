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

<script>
  export default {
  }
</script>

<style lang="less">
  nav {
    display: block;
    min-height: 50px;

    .logo {
      padding: 5px 0;
      text-align: center;
      width: 100%;

      a {
        font-weight: 400;
        &:hover {
          border-bottom: 1px solid transparent;
        }
      }
    }

    .menu {
      align-content: center;
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    a {
      border-bottom: 1px solid transparent;
      color: #ffffff;
      display: inline-block;
      font-size: 22px;
      font-weight: 100;
      text-decoration: none;
      padding: 5px 10px;

      &:hover {
         border-bottom: 1px solid #ffffff;
       }
    }
  }
</style>