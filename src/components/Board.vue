<template>
  <div class="board" :class="boardClass">
    <div class="row" v-for="row in boardSize" :key="row">
      <div class="cell"
           v-for="col in boardSize"
           :class="cellClass"
           :key="col"
           @click="onCellClick(row, col)">
        <div :class="getSymbolClass(row,col)"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Game from '../Game'

  export default {
    name: 'Board',
    props: {
      game: {
        type: Game,
        required: true
      },
      boardSize: {
        type: Number,
        required: true,
        default: 3
      }
    },
    data() {
      return {
        newCellRowIdx: -1,
        newCellColIdx: -1
      }
    },
    computed: {
      boardClass() {
        return `cells${this.boardSize}`
      },
      cellClass() {
        console.log('getCellClass')
        if (this.newCellRowIdx >= 0 && this.newCellColIdx >= 0) {
          return 'new'
        }
        return ''
      }
    },
    methods: {
      onCellClick(row, col) {
        this.newCellRowIdx = -1
        this.newCellColIdx = -1
        if (this.game.placeValue(row - 1, col - 1)) {
          this.newCellRowIdx = row
          this.newCellColIdx = col
        }
      },
      getSymbolClass(row, col) {
        console.log('getSymbolClass1')
        return this.game.getCellSymbol(row - 1, col - 1)
      }
    }
  }
</script>
<style lang="scss">
  @import '../scss/variables.scss';
  .board {
    width: $board-size;
    height: $board-size;
    /*border: 1px solid black;*/
    display: flex;
    flex-direction: column;
    background-color: $main-bg-color;
    padding: 4px;
    font-size: 80px;

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
    }

    .cell.new {
      animation-duration: 0.4s;
      animation-name: new-symbol;
      animation-fill-mode: forwards;
      animation-delay: 0.15s;
      transform: scale(0);
    }
  }

  @keyframes new-symbol {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }

  .board.cells4 {
    font-size: 60px;
  }

  .board.cells5 {
    font-size: 50px;
  }

  .board.cells6 {
    font-size: 40px;
  }
</style>
