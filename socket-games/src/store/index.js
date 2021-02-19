import Vue from 'vue'
import Vuex from 'vuex'
import routes from '@/router/index'
import axios from '../API/index.js'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question: {},
    messages: []
  },
  mutations: {
    setQuestion (state, payload) {
      state.question = payload
      console.log(payload)
    },
    addMessage (state, newMessage) {
      state.messages.push(newMessage)
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
        console.log(response)
        context.commit('setQuestion', response.data)
        // context.commit('setQuestion', response.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    SOCKET_serverMessage (context, messages) {
      context.commit('addMessage', messages)
    },
    SOCKET_serverQuestion (context, messages) {
      // context.commit('addMessage', messages)
      // context.commit('setQuestion', messages)
      context.dispatch('fetchQuestion', messages)
      // console.log(messages)
    },
    checkAnswer (context, payload) {
      axios({
        method: 'GET',
        url: `/questions/${payload.id}`
      }).then((response) => {
        if (response.data.answer === payload.answer.toUpperCase()) {
          swal('Success!', 'You answer is wrong!', 'success')
          let id = ++payload.id
          if (id === 6) {
            id = 1
          }
          context.dispatch('fetchQuestion', id)
        } else {
          swal('Wrong!', 'You answer is wrong!', 'error')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
