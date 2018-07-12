import {BOARD_SIZE, TOTAL_SIZE} from './const'

const VALUES = ['x', 'o', 'q']
const CLASS_MAP = {
  'x': 'fa fa-times',
  'o': 'far fa-circle',
  'q': 'fas fa-transgender'
}
export default class Game {
  constructor(playerCount = 2) {
    if (playerCount < 2) {
      playerCount = 2
    }
    this.cells = new Array(TOTAL_SIZE)
    this.playerCount = playerCount
    this.availableValues = VALUES.slice(0, playerCount)
    this.nextValue = this.availableValues[0]
    this.initCells()
  }

  onCellClick(row, col) {
    console.log(row)
    let idx = row * BOARD_SIZE + col
    if (this.cells[idx]) {
      return
    }
    this.cells.splice(idx, 1, this.nextValue)
    this.getNextValue()
  }

  getNextValue() {
    let idxOfCurrentValue = this.availableValues.indexOf(this.nextValue)
    let possibleValues = this.availableValues.slice(idxOfCurrentValue + 1)
    if (possibleValues.length > 0) {
      this.nextValue = possibleValues[0]
    } else {
      this.nextValue = this.availableValues[0]
    }
  }

  getCellVal(row, col) {
    let idx = row * BOARD_SIZE + col
    let cell = this.cells[idx]
    if (CLASS_MAP[cell]) {
      return CLASS_MAP[cell]
    }
    return ''
  }

  initCells() {
    for (let i = 0; i < TOTAL_SIZE; i++) {
      this.cells[i] = null
    }
  }
}
