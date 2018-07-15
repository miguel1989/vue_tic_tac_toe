import {SYMBOL_CLASS_MAP, SYMBOL_VALUES} from './const'

export default class Game {
  constructor(playerCount = 2, boardSize = 3) {
    if (playerCount < 2 || playerCount > SYMBOL_VALUES.length) {
      playerCount = 2
    }
    if (boardSize < 3) {
      boardSize = 3
    }
    this.playerCount = playerCount
    this.boardSize = boardSize
    this.totalSize = boardSize * boardSize
    this.cells = new Array(this.totalSize)
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
    let idx = row * this.boardSize + col
    if (idx < 0 || idx >= this.totalSize) {
      return false
    }
    if (this.cells[idx]) {
      return false
    }
    this.cells.splice(idx, 1, this.nextValue)
    this.isFinished = this._isFinished()
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

  _isFinished() {
    for (let i = 0; i < this.availableValues.length; i++) {
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
    for (let j = 0; j < this.boardSize; j++) {
      let idx = j * this.boardSize
      let row = this.cells.slice(idx, idx + this.boardSize)
      result = this._checkRow(row, symbol) || result
    }
    return result
  }

  _checkVertically(symbol) {
    let result = false
    for (let i = 0; i < this.boardSize; i++) {
      let row = []
      for (let j = 0; j < this.boardSize; j++) {
        let idx = j * this.boardSize + i
        row.push(this.cells[idx])
      }
      result = this._checkRow(row, symbol) || result
    }
    return result
  }

  _checkDiagonally(symbol) {
    let idxLeft = 0
    let idxRight = this.boardSize - 1
    let rowLeft = []
    let rowRight = []
    for (let i = 0; i < this.boardSize; i++) {
      rowLeft.push(this.cells[idxLeft])
      rowRight.push(this.cells[idxRight])
      idxLeft += this.boardSize + 1
      idxRight += this.boardSize - 1
    }
    return this._checkRow(rowLeft, symbol) || this._checkRow(rowRight, symbol)
  }

  _checkRow(row, symbol) {
    let count = 0
    for (let i = 0; i < this.boardSize; i++) {
      if (row[i] === symbol) {
        count++
      }
    }
    return count === this.boardSize
  }

  getCellSymbol(row, col) {
    let idx = row * this.boardSize + col
    let cell = this.cells[idx]
    if (SYMBOL_CLASS_MAP[cell]) {
      return SYMBOL_CLASS_MAP[cell]
    }
    return ''
  }

  _initCells() {
    for (let i = 0; i < this.totalSize; i++) {
      this.cells[i] = null
    }
  }
}
