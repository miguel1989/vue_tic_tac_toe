<template>
  <div class="finish-screen">
    <div class="win-screen" v-if="game.winnerSymbol">
      <div class="icon" :class="winnerSymbolClassValue"></div>
      <div>Has won</div>
    </div>
    <div v-else>
      No one has won =(
    </div>
    <div class="back-btn" @click="onBackClick">Go back</div>
  </div>
</template>
<script>
  import {SYMBOL_CLASS_MAP} from '../const'
  import Game from '../Game'
  export default {
    name: 'FinishScreen',
    props: {
      game: {
        type: Game,
        required: true
      }
    },
    computed: {
      winnerSymbolClassValue() {
        return SYMBOL_CLASS_MAP[this.game.winnerSymbol]
      }
    },
    methods: {
      onBackClick() {
        this.$emit('end-game')
      }
    }
  }
</script>
<style lang="scss">
  @import '../scss/variables.scss';
  .finish-screen {
    width: $board-size;
    height: $board-size;
    background-color: $main-bg-color;
    padding: 4px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .win-screen {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 4px;
    }
  }

  .back-btn {
    border: 1px solid black;
    border-radius: 3px;
    cursor: pointer;
  }
</style>
