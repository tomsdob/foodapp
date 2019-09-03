import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Burger from '@/components/Burger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Food App',
      component: Home
    },
    {
      path: '/burger',
      name: 'Burger Menu',
      component: Burger
    }
  ]
})
