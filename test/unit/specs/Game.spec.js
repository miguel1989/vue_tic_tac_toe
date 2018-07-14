import Game from '@/Game'

describe('Game logic', () => {
  let game
  beforeEach(() => {
    game = new Game()
  })
  it('should checkHorizontally "x" false & "o" true', () => {
    let row1 = ['x', 'o', 'x']
    let row2 = ['o', 'o', 'o']
    let row3 = ['x', 'o', 'x']
    game.cells = row1.concat(row2, row3)
    expect(game.checkHorizontally('x')).to.equal(false)
    expect(game.checkHorizontally('o')).to.equal(true)
  })
  it('should checkHorizontally "x" true & "o" false', () => {
    let row1 = ['x', 'o', 'x']
    let row2 = ['o', 'x', 'o']
    let row3 = ['x', 'x', 'x']
    game.cells = row1.concat(row2, row3)
    expect(game.checkHorizontally('o')).to.equal(false)
    expect(game.checkHorizontally('x')).to.equal(true)
  })
  it('should checkVertically "x" false & "o" true', () => {
    let row1 = ['x', 'o', 'x']
    let row2 = ['o', 'o', 'o']
    let row3 = ['x', 'o', 'x']
    game.cells = row1.concat(row2, row3)
    expect(game.checkVertically('x')).to.equal(false)
    expect(game.checkVertically('o')).to.equal(true)
  })
  it('should checkVertically "x" true & "o" false', () => {
    let row1 = ['x', 'o', 'x']
    let row2 = ['x', 'x', 'o']
    let row3 = ['x', 'o', 'x']
    game.cells = row1.concat(row2, row3)
    expect(game.checkVertically('o')).to.equal(false)
    expect(game.checkVertically('x')).to.equal(true)
  })
  it('should checkDiagonally "x" false & "o" true', () => {
    let row1 = ['o', 'x', 'x']
    let row2 = ['x', 'o', 'x']
    let row3 = ['x', 'x', 'o']
    game.cells = row1.concat(row2, row3)
    expect(game.checkDiagonally('x')).to.equal(false)
    expect(game.checkDiagonally('o')).to.equal(true)
  })
  it('should checkDiagonally "x" true & "o" false', () => {
    let row1 = ['o', 'o', 'x']
    let row2 = ['0', 'x', 'o']
    let row3 = ['x', 'o', 'o']
    game.cells = row1.concat(row2, row3)
    expect(game.checkDiagonally('o')).to.equal(false)
    expect(game.checkDiagonally('x')).to.equal(true)
  })
})
