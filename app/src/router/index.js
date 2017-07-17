import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ManagePage from '@/pages/ManagePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/manage',
      name: 'manage',
      component: ManagePage
    }
  ]
})
