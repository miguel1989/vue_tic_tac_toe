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
      let idx = j * BOARD_SIZE
      let row = this.cells.slice(idx, idx + BOARD_SIZE)
      result = this.checkRow(row, symbol) || result
    }
    return result
  }

  checkVertically(symbol) {
    let result = false
    for (let i = 0; i < BOARD_SIZE; i++) {
      let row = []
      for (let j = 0; j < BOARD_SIZE; j++) {
        let idx = j * BOARD_SIZE + i
        row.push(this.cells[idx])
      }
      result = this.checkRow(row, symbol) || result
    }
    return result
  }

  checkDiagonally(symbol) {
    let result = false
    let idxLeft = 0
    let idxRight = BOARD_SIZE - 1
    let rowLeft = []
    let rowRight = []
    for (let i = 0; i < BOARD_SIZE; i++) {
      rowLeft.push(this.cells[idxLeft])
      rowRight.push(this.cells[idxRight])
      idxLeft += BOARD_SIZE + 1
      idxRight += BOARD_SIZE - 1
    }
    result = this.checkRow(rowLeft, symbol) || result
    result = this.checkRow(rowRight, symbol) || result
    return result
  }

  checkRow(row, symbol) {
    let count = 0
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (row[i] === symbol) {
        count++
      }
    }
    return count === BOARD_SIZE
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
