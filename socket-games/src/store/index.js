import Vue from 'vue'
import Vuex from 'vuex'
import routes from '@/router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    username (context, payload) {
      localStorage.setItem('Username', payload)
      routes.push({ name: 'MainPage' })
    }
  },
  modules: {
  }
})
