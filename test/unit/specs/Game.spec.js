import Game from '@/Game'
// http://www.chaijs.com/api/bdd/
describe('Game private logic for 2 players, board 3x3', () => {
  let game
  beforeEach(() => {
    game = new Game()
  })
  it('should placeValue correctly', () => {
    expect(game.nextValue).to.equal('x')
    expect(game.playerCount).to.equal(2)
    expect(game.placeValue(0, 0)).to.equal(true)
    expect(game.nextValue).to.equal('o')
    expect(game.placeValue(0, 0)).to.equal(false)
    expect(game.nextValue).to.equal('o')
    expect(game.placeValue(0, 1)).to.equal(true)
    expect(game.nextValue).to.equal('x')
  })
  it('should placeValue to wrong row & col correctly', () => {
    expect(game.placeValue(5, 5)).to.equal(false)
    expect(game.nextValue).to.equal('x')
  })
  it('should placeValue to negative row & col correctly', () => {
    expect(game.placeValue(-5, -5)).to.equal(false)
    expect(game.nextValue).to.equal('x')
  })
  it('should checkHorizontally "x" false & "o" true', () => {
    let row1 = ['x', 'o', 'x']
    let row2 = ['o', 'o', 'o']
    let row3 = ['x', 'o', 'x']
    game.cells = row1.concat(row2, row3)
    expect(game._checkHorizontally('x')).to.equal(false)
    expect(game._checkHorizontally('o')).to.equal(true)
  })
  it('should checkHorizontally "x" true & "o" false', () => {
    let row1 = ['x', 'o', 'x']
    let row2 = ['o', 'x', 'o']
    let row3 = ['x', 'x', 'x']
    game.cells = row1.concat(row2, row3)
    expect(game._checkHorizontally('o')).to.equal(false)
    expect(game._checkHorizontally('x')).to.equal(true)
  })
  it('should checkVertically "x" false & "o" true', () => {
    let row1 = ['x', 'o', 'x']
    let row2 = ['o', 'o', 'o']
    let row3 = ['x', 'o', 'x']
    game.cells = row1.concat(row2, row3)
    expect(game._checkVertically('x')).to.equal(false)
    expect(game._checkVertically('o')).to.equal(true)
  })
  it('should checkVertically "x" true & "o" false', () => {
    let row1 = ['x', 'o', 'x']
    let row2 = ['x', 'x', 'o']
    let row3 = ['x', 'o', 'x']
    game.cells = row1.concat(row2, row3)
    expect(game._checkVertically('o')).to.equal(false)
    expect(game._checkVertically('x')).to.equal(true)
  })
  it('should checkDiagonally "x" false & "o" true', () => {
    let row1 = ['o', 'x', 'x']
    let row2 = ['x', 'o', 'x']
    let row3 = ['x', 'x', 'o']
    game.cells = row1.concat(row2, row3)
    expect(game._checkDiagonally('x')).to.equal(false)
    expect(game._checkDiagonally('o')).to.equal(true)
  })
  it('should checkDiagonally "x" true & "o" false', () => {
    let row1 = ['o', 'o', 'x']
    let row2 = ['o', 'x', 'o']
    let row3 = ['x', 'o', 'o']
    game.cells = row1.concat(row2, row3)
    expect(game._checkDiagonally('o')).to.equal(false)
    expect(game._checkDiagonally('x')).to.equal(true)
  })
  it('should _calcNextValue', () => {
    expect(game.nextValue).to.equal('x')
    game._calcNextValue()
    expect(game.nextValue).to.equal('o')
    game._calcNextValue()
    expect(game.nextValue).to.equal('x')
    game._calcNextValue()
    expect(game.nextValue).to.equal('o')
  })
  it('should getCellSymbol correctly', () => {
    let row1 = [null, 'o', 'x']
    let row2 = ['q', 'z', 'a']
    let row3 = ['w', null, null]
    game.cells = row1.concat(row2, row3)
    expect(game.getCellSymbol(0, 0)).to.equal('')
    expect(game.getCellSymbol(0, 1)).to.equal('far fa-circle')
    expect(game.getCellSymbol(0, 2)).to.equal('fa fa-times')
    expect(game.getCellSymbol(1, 0)).to.equal('fas fa-transgender')
    expect(game.getCellSymbol(1, 1)).to.equal('fas fa-puzzle-piece')
    expect(game.getCellSymbol(1, 2)).to.equal('fab fa-amazon')
    expect(game.getCellSymbol(2, 0)).to.equal('')
  })
})
