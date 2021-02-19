<template>
  <div class="container" style="margin-top: 40px">
    <h2>SOAL ke {{questions.id}}: {{questions.exercise}}?</h2>
    <div id="line">
    <span style="color: yellow ; font-size: 30px">
      SCORE: {{poin}}
    </span>
    <div class="wrapper-chat">
      <form action="" @submit.prevent="sendMessage">
        <label for="" style="color: white; margin-right: 10px">Chat</label>
        <input type="text" v-model="message">
        <button type="submit" class="btn btn-success" style="margin: 0 0 0 20px">Send</button>
      </form>
    </div>
    </div>
    <div class="wrapper">
      <div id="" style="color: black">
        <Chat :messages="messages"></Chat>
      </div>
    </div>
    <div class="wrapper-answer">
      <form action="" @submit.prevent="sendAnswer">
        <label for="" style="color: white; margin-right: 10px">Jawaban</label>
        <input type="text" v-model="answer">
        <button type="submit" class="btn btn-success" style="margin: 0 0 0 20px">Jawab</button>
      </form>
    </div>
  </div>
  <!-- this._vm.$socket.emit('someEvent', someData); -->
</template>

<script>
import Chat from '../components/chatting'
export default {
  name: 'MainPage',
  components: {
    Chat
  },
  data () {
    return {
      question: 'tes page',
      i: Math.ceil(Math.random() * 5),
      message: '',
      name: '',
      answer: ''
    }
  },
  computed: {
    questions () {
      return this.$store.state.question
    },
    messages () {
      return this.$store.state.messages
    },
    poin () {
      return this.$store.state.poin
    }
  },
  sockets: {
    connect () {
      console.log('-------conect')
    }
  },
  methods: {
    sendMessage () {
      const newMessage = {
        text: this.message,
        id: +new Date(),
        name: this.name
      }
      this.$socket.emit('newMessage', newMessage)
      this.messages.push(newMessage)
      this.message = ''
    },
    sendAnswer () {
      const answer = {
        id: this.questions.id,
        answer: this.answer
      }
      this.$store.dispatch('checkAnswer', answer)
      this.answer = ''
      this.angka = 0
    }
  },
  created () {
    this.name = localStorage.Username
    this.$socket.emit('newQuestion', 1)
  }
}
</script>

<style>
h2 {
  color: aliceblue;
}

.wrapper{
  /* max-height: 480px; */
  overflow-y: auto;
  width: 800px;
  height: 450px;
  margin: 0 0 0 150px;
  background-color: #709fb0;
  border-radius: 20px;
  box-shadow: 0px 0px 24px -5px rgba(0,0,0,0.75);
}
.wrapper-answer{
  margin: 20px 0 0 -420px
}

.wrapper-chat{
  margin: 0 0 10px 330px
}
#line {
  display: flex;
  margin-left: 150px;
}
</style>
