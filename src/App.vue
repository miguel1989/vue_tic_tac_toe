<template>
  <div id="app">
    <header>
    </header>
    <main>
      <div><img src="./assets/logo.png" alt="Vue.js PWA"></div>
      <Game/>
    </main>
  </div>
</template>

<script>
  import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
  import Game from './components/Game'

  export default {
    name: 'app',
    components: {
      Game
    }
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
