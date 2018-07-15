<template>
  <div>
    <div class="welcome-header">Welcome to TIC TAC TOE Vue Game</div>
    <div class="select-header">Select your game</div>
    <div class="game-options">
      <div class="game-option" @click="startGame">2 Players. Board 3x3</div>
      <div class="game-option" @click="startGame3x3">3 Players. Board 3x3</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Welcome',
    methods: {
      startGame() {
        this.$emit('start-game', 2, 3)
      },
      startGame3x3() {
        this.$emit('start-game', 3, 3)
      }
    }
  }
</script>
<style>
  .welcome-header {
    font-size: 36px;
    margin-bottom: 16px;
  }
  .select-header {
    font-weight: bold;
    margin-bottom: 16px;
  }
  .game-options {
    display: flex;
  }
  .game-option {
    border: 1px solid red;
    border-radius: 3px;
    padding: 4px;
    margin: 0 4px;
    cursor: pointer;
  }
</style>
