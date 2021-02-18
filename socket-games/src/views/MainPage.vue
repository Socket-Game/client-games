<template>
  <div class="container">
    <h2>QUESTION</h2>
    <h2>"{{questions}}"</h2>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      question: 'tes page',
      i: Math.ceil(Math.random() * 5)
    }
  },
  computed: {
    questions () {
      return this.$store.state.question.exercise
    }
  },
  created () {
    this.$store.dispatch('fetchQuestion', this.i)
  }
}
</script>

<style>
h2 {
  color: aliceblue;
}
</style>
