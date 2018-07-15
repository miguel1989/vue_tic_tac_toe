import Game from '@/Game'
// http://www.chaijs.com/api/bdd/
describe('Game initialization', () => {
  it('should init game correctly when player count is to small', () => {
    let game = new Game(1)
    expect(game.playerCount).to.equal(2)
  })
  it('should init game correctly when player count is to big', () => {
    let game = new Game(10)
    expect(game.playerCount).to.equal(2)
  })
  it('should init game correctly when board is to small', () => {
    let game = new Game(2, 1)
    expect(game.playerCount).to.equal(2)
    expect(game.boardSize).to.equal(3)
  })
})
