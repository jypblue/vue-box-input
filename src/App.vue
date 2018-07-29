<template>
  <div id="app">
    <vue-box-input
    @input="handleWordsInput"
    @image-paste="handleImageFileGet"
    @message-send="handleMessageSend"
    >

    </vue-box-input>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleWordsInput(val) {
      console.log('input:', val);
    },
    handleImageFileGet(val) {
      console.log('imageFile:',val);
    },
    handleMessageSend(val) {
      console.log('message:',val);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
