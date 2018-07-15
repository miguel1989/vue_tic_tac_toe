<template>
  <div  class="game">
    <div class="row" v-for="row in BOARD_SIZE" :key="row">
      <div class="cell" v-for="col in BOARD_SIZE" :key="col" @click="onCellClick(row, col)">
        <div :class="getCellClassValue(row,col)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {BOARD_SIZE} from '../const'
  import Game from '../Game'

  export default {
    name: 'Game',
    props: {
      playerCount: {
        type: Number,
        required: false,
        default: 2
      },
      boardSize: {
        type: Number,
        required: false,
        default: 3
      }
    },
    data() {
      return {
        game: new Game(this.playerCount, this.boardSize),
        BOARD_SIZE: BOARD_SIZE
      }
    },
    methods: {
      onCellClick(row, col) {
        this.game.placeValue(row - 1, col - 1)
      },
      getCellClassValue(row, col) {
        return this.game.getCellSymbol(row - 1, col - 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .game {
    width: 400px;
    height: 400px;
    /*border: 1px solid black;*/
    display: flex;
    flex-direction: column;
    background-color: #80CBC4;
    padding: 4px;
  }

  .row {
    flex: 1;
    display: flex;
  }

  .cell {
    margin: 4px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E0F2F1;
    border-radius: 4px;
    font-size: 42px;
  }
</style>
