<template>
  <div class="container" id="chatBox">
    <div class="chatbox">
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
  props: ['messages'],
  data () {
    return {
    }
  },
  computed: {
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
  #chatBox {
    color: whitesmoke;
  }
  small {
    font-weight: 400;
  }
</style>
