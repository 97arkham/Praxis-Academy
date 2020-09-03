<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" :sukoco="name" :cobas="arr"/> <!-- belajar array -->
   
    <gridsatu />
     <modal />
    <!-- <tree2 /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import modal from './components/modal.vue'
// import tree2 from './components/tree2.vue'
import gridsatu from './components/gridsatu.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    modal,
    gridsatu,
     
    // tree2
  },
  data() {
    return {
     name: "irun",
     arr:["a","b","c"]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
