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
    this.isFinished = false
    this.winnerSymbol = ''
    this._initCells()
  }

  placeValue(row, col) {
    if (this.isFinished) {
      return false
    }
    let idx = row * BOARD_SIZE + col
    if (idx >= TOTAL_SIZE) {
      return false
    }
    if (this.cells[idx]) {
      return false
    }
    this.cells.splice(idx, 1, this.nextValue)
    this.isFinished = this._isEnded()
    this._calcNextValue()
    return true
  }

  _calcNextValue() {
    let idxOfCurrentValue = this.availableValues.indexOf(this.nextValue)
    let possibleValues = this.availableValues.slice(idxOfCurrentValue + 1)
    if (possibleValues.length > 0) {
      this.nextValue = possibleValues[0]
    } else {
      this.nextValue = this.availableValues[0]
    }
  }

  _isEnded() {
    for (let i = 0; i < this.availableValues.length - 1; i++) {
      let symbol = this.availableValues[i]
      if (this._checkHorizontally(symbol) || this._checkVertically(symbol) || this._checkDiagonally(symbol)) {
        this.winnerSymbol = symbol
        return true
      }
    }
    // the game is ended when there is no empty cells
    let nullValueCount = this.cells.filter(cell => !cell).length
    return nullValueCount === 0
  }

  _checkHorizontally(symbol) {
    let result = false
    for (let j = 0; j < BOARD_SIZE; j++) {
      let idx = j * BOARD_SIZE
      let row = this.cells.slice(idx, idx + BOARD_SIZE)
      result = this._checkRow(row, symbol) || result
    }
    return result
  }

  _checkVertically(symbol) {
    let result = false
    for (let i = 0; i < BOARD_SIZE; i++) {
      let row = []
      for (let j = 0; j < BOARD_SIZE; j++) {
        let idx = j * BOARD_SIZE + i
        row.push(this.cells[idx])
      }
      result = this._checkRow(row, symbol) || result
    }
    return result
  }

  _checkDiagonally(symbol) {
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
    return this._checkRow(rowLeft, symbol) || this._checkRow(rowRight, symbol)
  }

  _checkRow(row, symbol) {
    let count = 0
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (row[i] === symbol) {
        count++
      }
    }
    return count === BOARD_SIZE
  }

  getCellSymbol(row, col) {
    let idx = row * BOARD_SIZE + col
    let cell = this.cells[idx]
    if (SYMBOL_CLASS_MAP[cell]) {
      return SYMBOL_CLASS_MAP[cell]
    }
    return ''
  }

  _initCells() {
    for (let i = 0; i < TOTAL_SIZE; i++) {
      this.cells[i] = null
    }
  }
}
