import Game from '@/Game'
// http://www.chaijs.com/api/bdd/
describe('Game simulation (kind of integration test)', () => {
  let game
  beforeEach(() => {
    game = new Game()
  })
  it('should fast end game, and the winner will be "x"', () => {
    expect(game.nextValue).to.equal('x')
    expect(game.playerCount).to.equal(2)
    expect(game.placeValue(0, 0)).to.equal(true)
    expect(game.isFinished).to.equal(false)
    expect(game.winnerSymbol).to.equal('')
    expect(game.nextValue).to.equal('o')

    expect(game.placeValue(1, 0)).to.equal(true)
    expect(game.isFinished).to.equal(false)
    expect(game.winnerSymbol).to.equal('')
    expect(game.nextValue).to.equal('x')

    expect(game.placeValue(0, 1)).to.equal(true)
    expect(game.isFinished).to.equal(false)
    expect(game.winnerSymbol).to.equal('')
    expect(game.nextValue).to.equal('o')

    expect(game.placeValue(2, 0)).to.equal(true)
    expect(game.isFinished).to.equal(false)
    expect(game.winnerSymbol).to.equal('')
    expect(game.nextValue).to.equal('x')

    expect(game.placeValue(0, 2)).to.equal(true)
    expect(game.isFinished).to.equal(true)
    expect(game.winnerSymbol).to.equal('x')
    expect(game.nextValue).to.equal('o')

    expect(game.placeValue(2, 2)).to.equal(false)
    expect(game.isFinished).to.equal(true)
    expect(game.winnerSymbol).to.equal('x')
    expect(game.nextValue).to.equal('o')
  })
  it('should fast end game, and the winner will be "o"', () => {
    expect(game.nextValue).to.equal('x')
    expect(game.playerCount).to.equal(2)
    expect(game.placeValue(0, 0)).to.equal(true) // x
    expect(game.placeValue(1, 0)).to.equal(true) // o
    expect(game.placeValue(0, 1)).to.equal(true) // x
    expect(game.placeValue(1, 1)).to.equal(true) // o
    expect(game.placeValue(2, 1)).to.equal(true) // x
    expect(game.placeValue(1, 2)).to.equal(true) // o
    expect(game.isFinished).to.equal(true)
    expect(game.winnerSymbol).to.equal('o')
    expect(game.nextValue).to.equal('x')
  })
  it('should end game, no one wins', () => {
    expect(game.nextValue).to.equal('x')
    expect(game.playerCount).to.equal(2)
    expect(game.placeValue(1, 1)).to.equal(true) // x
    expect(game.placeValue(1, 0)).to.equal(true) // o
    expect(game.placeValue(0, 0)).to.equal(true) // x
    expect(game.placeValue(2, 2)).to.equal(true) // o
    expect(game.placeValue(2, 0)).to.equal(true) // x
    expect(game.placeValue(0, 2)).to.equal(true) // o
    expect(game.placeValue(0, 1)).to.equal(true) // x
    expect(game.placeValue(2, 1)).to.equal(true) // o
    expect(game.placeValue(1, 2)).to.equal(true) // x
    expect(game.isFinished).to.equal(true)
    expect(game.winnerSymbol).to.equal('')
    expect(game.nextValue).to.equal('o')
  })
})
