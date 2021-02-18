import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.Username) {
        console.log('masih ada')
      } else {
        next()
      }
    }
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.Username) {
        next()
      } else {
        console.log('belum isi username')
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
