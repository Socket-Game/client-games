import Vue from 'vue'
import Vuex from 'vuex'
import routes from '@/router/index'
import axios from '../API/index.js'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question: {},
    messages: [],
    poin: 0
  },
  mutations: {
    setQuestion (state, payload) {
      state.question = payload
      console.log(payload)
    },
    addMessage (state, newMessage) {
      state.messages.push(newMessage)
    },
    addPoint (state, point) {
      state.poin += point
    },
    resetPoint (state, point) {
      state.poin = 0
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
      }).catch((err) => {
        console.log(err)
      })
    },
    SOCKET_serverMessage (context, messages) {
      context.commit('addMessage', messages)
    },
    SOCKET_serverQuestion (context, messages) {
      if (messages === 1) {
        context.dispatch('fetchQuestion', messages)
      } else {
        swal('Success!', 'Your answer is right!', 'success')
        context.dispatch('fetchQuestion', messages)
      }
    },
    SOCKET_serverAddPoint (context, message) {
      context.commit('addPoint', message)
    },
    SOCKET_serverResetPoint (context) {
      swal('Success!', 'Your answer is right!', 'success')
      context.commit('resetPoint')
    },
    checkAnswer (context, payload) {
      axios({
        method: 'GET',
        url: `/questions/${payload.id}`
      }).then((response) => {
        if (response.data.answer === payload.answer.toUpperCase()) {
          let id = ++payload.id
          if (id === 6) {
            id = 1
            this._vm.$socket.emit('newQuestion', id)
            this._vm.$socket.emit('resetPoint')
          } else {
            this._vm.$socket.emit('addPoint', 10)
            this._vm.$socket.emit('newQuestion', id)
          }
          context.dispatch('fetchQuestion', id)
        } else {
          swal('Wrong!', 'Your answer is wrong!', 'error')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
