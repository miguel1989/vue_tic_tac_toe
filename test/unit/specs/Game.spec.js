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
    expect(game.checkHorizontally('x')).to.be.false
    expect(game.checkHorizontally('o')).to.be.true
  })
  it('should checkHorizontally "x" true & "o" false', () => {
    let row1 = ['x', 'o', 'x']
    let row2 = ['o', 'x', 'o']
    let row3 = ['x', 'x', 'x']
    game.cells = row1.concat(row2, row3)
    expect(game.checkHorizontally('o')).to.be.false
    expect(game.checkHorizontally('x')).to.be.true
  })
})
