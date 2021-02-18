<template>
  <div class="container" id="chatBox">
    <div class="chatbox">
      <label for="">Message</label>
      <input v-model='message' type="text"/>
      <input @click.prevent="sendMessage" type="submit" value='kirim'>
      <ul>
        <li v-for="pesan in messages"
        :key='pesan.id'
        :class="[ pesan.name == name ? 'right' : 'left' ]">
        <div class="message-item">
          <small>{{pesan.name}}</small>
          <span>{{pesan.text}}</span>
        </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      message: ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
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
      // this.$socket.emit('newMessage', newMessage)
      this.$socket.emit('newMessage', newMessage)
      this.messages.push(newMessage)
      this.message = ''
      // versi awal
      // this.$socket.emit('newMessage', { message: 'Hello from client' })
      // this.$socket.emit("newMessage", {text: this.message, id: +(newDate ()), name: this.name})
    }
  },
  created () {
    this.name = localStorage.Username
  }
}
</script>

<style scoped>
li{
  border-bottom: 2px solid #eee;
  list-style: none;
  padding: 10px 0;
}
  .message-item * {
    display: block;
  }
  .left{
    text-align: left;
  }
  .right{
    text-align: right;
  }
</style>
