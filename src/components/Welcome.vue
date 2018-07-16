<template>
  <div>
    <div class="welcome-header">Welcome to TIC TAC TOE Vue Game</div>
    <div class="select-header">Select your game</div>
    <div class="game-option-wrap">
      <div class="game-option-header">2 players</div>
      <div class="game-options">
        <div class="game-option" @click="startGame(2,3)">Board 3x3</div>
        <div class="game-option" @click="startGame(3,4)">Board 4x4</div>
      </div>
    </div>
    <div class="game-option-wrap">
      <div class="game-option-header">3 players</div>
      <div class="game-options">
        <div class="game-option" @click="startGame(3, 4)">Board 4x4</div>
        <div class="game-option" @click="startGame(3, 5)">Board 5x5</div>
      </div>
    </div>
    <div class="game-option-wrap">
      <div class="game-option-header">4 players</div>
      <div class="game-options">
        <div class="game-option" @click="startGame(4, 4)">Board 4x4</div>
        <div class="game-option" @click="startGame(4, 5)">Board 5x5</div>
        <div class="game-option" @click="startGame(4, 6)">Board 6x6</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Welcome',
    methods: {
      startGame(playerCount, boardSize) {
        this.$emit('start-game', playerCount, boardSize)
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
  .game-option-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }
  .game-option-header {
    margin-bottom: 4px;
  }
  .game-options {
    display: flex;
  }
  .game-option {
    border: 1px solid red;
    border-radius: 3px;
    padding: 4px;
    margin-right: 4px;
    cursor: pointer;
  }
  .game-option:hover {
    background-color: rosybrown;
  }
</style>
