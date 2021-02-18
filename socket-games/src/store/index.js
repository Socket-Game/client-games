import Vue from 'vue'
import Vuex from 'vuex'
import routes from '@/router/index'
import axios from '../API/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question: {}
  },
  mutations: {
    setQuestion (state, payload) {
      state.question = payload
    }
  },
  actions: {
    username (context, payload) {
      localStorage.setItem('Username', payload)
      routes.push({ name: 'MainPage' })
    },
    fetchQuestion (context, id) {
      axios({
        url: `/questions/${id}`,
        method: 'GET'
      }).then((response) => {
        context.commit('setQuestion', response.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
