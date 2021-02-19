import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import store from '../store'
const socket = new VueSocketIO({
  debug: true,
  connection: 'https://tebak-lokasi.herokuapp.com',
  vuex: {
    store,
    actionPrefix: 'SOCKET_'
  }
})

Vue.use(socket)
