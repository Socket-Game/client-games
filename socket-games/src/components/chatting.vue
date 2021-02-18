<template>
  <div class="container" id="chatBox">
    <div class="chatbox">
      // tambahan part
      <label for="">Message</label>
      <input v-model='message' type="text"/>
      <input @click="sendMessage" type="submit" value='kirim'>
      <ul>
        <li v-for="message in messages" :key='message.id' :class='[message.name == name ? 'kiri':'kanan']'></li>
        <div>
          <small>{{message.name}}</small>
          <span>{{message.text}}</span>
        </div>
      </ul>
      // batas
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.name,
      message: "",
    }
  },
  sockets: {
    connect () {
      console.log('-------conect');
    },
    serverMessage(message){
      console.log('-----------dari server');
      this.messages.push(newMessage)

    }
  },
  methods: {
    sendMessage() {
      let newMessage = {
        text: this.message,
        id: +new Date(),
        name: this.name 
      }
      this.$socket.emit("newMessage", newMessage)
      this.messages.push(newMessage)
      // versi awal
      this.$socket.emit("newMessage", {message: "Hello from client"})
      //versi akhir
      // this.$socket.emit("newMessage", {text: this.message, id: +(newDate ()), name: this.name})
    }
  },
  created() {
    if(!localStorage.name){
      // this.fetchName
    }
  }
}
</script>

<style>

</style>