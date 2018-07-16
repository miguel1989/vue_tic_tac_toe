import Game from '@/Game'
// http://www.chaijs.com/api/bdd/
describe('Game simulation when 3 players and board is 4x4', () => {
  let game
  beforeEach(() => {
    game = new Game(3, 4)
  })
  it('should fast end game, and the winner will be "x"', () => {
    expect(game.nextValue).to.equal('x')
    expect(game.playerCount).to.equal(3)
    expect(game.boardSize).to.equal(4)

    expect(game.placeValue(0, 0)).to.equal(true)
    expect(game.nextValue).to.equal('o')
    expect(game.placeValue(1, 0)).to.equal(true)
    expect(game.nextValue).to.equal('q')
    expect(game.placeValue(2, 0)).to.equal(true)
    expect(game.nextValue).to.equal('x')

    expect(game.placeValue(0, 1)).to.equal(true)
    expect(game.nextValue).to.equal('o')
    expect(game.placeValue(1, 1)).to.equal(true)
    expect(game.nextValue).to.equal('q')
    expect(game.placeValue(2, 1)).to.equal(true)
    expect(game.nextValue).to.equal('x')

    expect(game.placeValue(0, 2)).to.equal(true)
    expect(game.nextValue).to.equal('o')
    expect(game.placeValue(1, 2)).to.equal(true)
    expect(game.nextValue).to.equal('q')
    expect(game.placeValue(2, 2)).to.equal(true)
    expect(game.nextValue).to.equal('x')

    expect(game.placeValue(0, 3)).to.equal(true)
    expect(game.isFinished).to.equal(true)
    expect(game.winnerSymbol).to.equal('x')
  })
})
