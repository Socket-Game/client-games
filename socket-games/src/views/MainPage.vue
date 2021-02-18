<template>
  <div class="container" style="margin-top: -40px">
    <h2>SOAL: {{question}}?</h2>
    <div class="wrapper-chat">
      <form action="">
        <label for="" style="color: white; margin-right: 10px">Chat</label>
        <input type="text">
        <button type="submit" class="btn btn-primary" style="margin: 0 0 0 20px">Send</button>
      </form>
    </div>
    <div class="wrapper">
      <div id="" style="color: black">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque nihil voluptas pariatur molestias rem aliquam dolorem fugit magnam, suscipit quidem facere voluptatum accusamus vitae labore consectetur esse inventore consequatur!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque nihil voluptas pariatur molestias rem aliquam dolorem fugit magnam, suscipit quidem facere voluptatum accusamus vitae labore consectetur esse inventore consequatur!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque nihil voluptas pariatur molestias rem aliquam dolorem fugit magnam, suscipit quidem facere voluptatum accusamus vitae labore consectetur esse inventore consequatur!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque nihil voluptas pariatur molestias rem aliquam dolorem fugit magnam, suscipit quidem facere voluptatum accusamus vitae labore consectetur esse inventore consequatur!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque nihil voluptas pariatur molestias rem aliquam dolorem fugit magnam, suscipit quidem facere voluptatum accusamus vitae labore consectetur esse inventore consequatur!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati cumque nihil voluptas pariatur molestias rem aliquam dolorem fugit magnam, suscipit quidem facere voluptatum accusamus vitae labore consectetur esse inventore consequatur!</p>
      </div>
    </div>
    <div class="wrapper-answer">
      <form action="">
        <label for="" style="color: white; margin-right: 10px">Jawaban</label>
        <input type="text">
        <button type="submit" class="btn btn-primary" style="margin: 0 0 0 20px">Jawab</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      question: 'tes baru'
    }
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
  background-color: aliceblue;
}
.wrapper-answer{
  margin: 20px 0 0 -420px
}

.wrapper-chat{
  margin: 0 0 10px 450px
}
</style>
