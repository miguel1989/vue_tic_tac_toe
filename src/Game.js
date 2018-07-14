import {BOARD_SIZE, TOTAL_SIZE, SYMBOL_CLASS_MAP, SYMBOL_VALUES} from './const'

export default class Game {
  constructor(playerCount = 2) {
    if (playerCount < 2 || playerCount > SYMBOL_VALUES.length) {
      playerCount = 2
    }
    this.cells = new Array(TOTAL_SIZE)
    this.playerCount = playerCount
    this.availableValues = SYMBOL_VALUES.slice(0, playerCount)
    this.nextValue = this.availableValues[0]
    this.initCells()
  }

  onCellClick(row, col) {
    let idx = row * BOARD_SIZE + col
    if (this.cells[idx]) {
      return
    }
    this.cells.splice(idx, 1, this.nextValue)
    this.calcNextValue()
  }

  calcNextValue() {
    let idxOfCurrentValue = this.availableValues.indexOf(this.nextValue)
    let possibleValues = this.availableValues.slice(idxOfCurrentValue + 1)
    if (possibleValues.length > 0) {
      this.nextValue = possibleValues[0]
    } else {
      this.nextValue = this.availableValues[0]
    }
  }

  checkIfGameEnded() {
    // for each symbol:
    // check each line horizontally
    // check each line vertically
    // check each line diagonally
    // let self = this
    this.availableValues.forEach(symbol => {

    })
  }

  checkHorizontally(symbol) {
    let result = false
    for (let j = 0; j < BOARD_SIZE; j++) {
      let count = 0
      for (let i = 0; i < BOARD_SIZE; i++) {
        let idx = j * BOARD_SIZE + i
        if (this.cells[idx] === symbol) {
          count++
        }
      }
      result = count === BOARD_SIZE || result
    }
    return result
  }

  getCellVal(row, col) {
    let idx = row * BOARD_SIZE + col
    let cell = this.cells[idx]
    if (SYMBOL_CLASS_MAP[cell]) {
      return SYMBOL_CLASS_MAP[cell]
    }
    return ''
  }

  initCells() {
    for (let i = 0; i < TOTAL_SIZE; i++) {
      this.cells[i] = null
    }
  }
}
