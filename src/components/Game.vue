<template>
  <div class="game">
    <Board v-if="!game.isFinished"
           :game="game"
           :board-size="boardSize"/>
    <div v-if="!game.isFinished">
      <div>Next turn is:</div>
      <div :class="nextSymbolClassValue"></div>
    </div>
    <FinishScreen v-if="game.isFinished"
                  :game="game"
                  @end-game="endGame"/>
  </div>
</template>

<script>
  import {SYMBOL_CLASS_MAP} from '../const'
  import Game from '../Game'
  import Board from './Board'
  import FinishScreen from './FinishScreen'

  export default {
    name: 'Game',
    components: {
      Board,
      FinishScreen
    },
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
        game: new Game(this.playerCount, this.boardSize)
      }
    },
    computed: {
      nextSymbolClassValue() {
        return SYMBOL_CLASS_MAP[this.game.nextValue]
      }
    },
    methods: {
      endGame() {
        this.$emit('end-game')
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
