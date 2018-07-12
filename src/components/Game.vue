<template>
  <div class="game">
    <div v-if="board" class="row" v-for="row in BOARD_SIZE" :key="row">
      <div class="cell" v-for="col in BOARD_SIZE" :key="col" @click="onCellClick(row, col)">
        <div :class="getClassValue(row,col)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  const BOARD_SIZE = 3
  const TOTAL_SIZE = BOARD_SIZE * BOARD_SIZE
  export default {
    name: 'Game',
    data() {
      return {
        board: null,
        BOARD_SIZE: BOARD_SIZE
      }
    },
    methods: {
      initBoard() {
        this.board = new Array(TOTAL_SIZE)
        for (let i = 0; i < TOTAL_SIZE; i++) {
          this.board[i] = null
        }
      },
      onCellClick(row, col) {
        row = row - 1
        col = col - 1
        let idx = row * BOARD_SIZE + col
        this.board.splice(idx, 1, 'x')
      },
      getClassValue(row, col) {
        row = row - 1
        col = col - 1
        console.log(`row = ${row}, col = ${col}`)
        let idx = row * BOARD_SIZE + col
        let cell = this.board[idx]
        if (cell === 'x') {
          return 'fa fa-times'
        }
        if (cell === 'o') {
          return 'far fa-circle'
        }
        return ''
      }
    },
    mounted() {
      this.initBoard()
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
