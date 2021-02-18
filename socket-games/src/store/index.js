import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    username (context, payload) {
      localStorage.setItem('Username', payload)
    }
  },
  modules: {
  }
})
