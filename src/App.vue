<template>
  <div id="app">
    <header>
    </header>
    <main>
      <div><img src="./assets/logo.png" alt="Vue.js PWA"></div>
      <Welcome v-if="!isGameStarted" @start-game="startGame"/>
      <Game v-if="isGameStarted"
            :player-count="playerCount"
            :board-size="boardSize"
            @end-game="endGame"/>
    </main>
  </div>
</template>

<script>
  import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
  import Welcome from './components/Welcome'
  import Game from './components/Game'

  export default {
    name: 'app',
    components: {
      Game,
      Welcome
    },
    data() {
      return {
        isGameStarted: false,
        playerCount: 2,
        boardSize: 3
      }
    },
    methods: {
      startGame(playerCount = 2, boardSize = 3) {
        this.playerCount = playerCount
        this.boardSize = boardSize
        this.isGameStarted = true
      },
      endGame() {
        this.isGameStarted = false
      }
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
