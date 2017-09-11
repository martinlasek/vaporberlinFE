import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/sites/Home'
import Topics from '@/components/sites/Topics'
import Register from '@/components/sites/Register'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
