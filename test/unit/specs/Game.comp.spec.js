import Vue from 'vue'
import Game from '@/components/Game'
// http://www.chaijs.com/api/bdd/
describe('Game.vue', () => {
  it('should render correct contents for next turn', () => {
    const Constructor = Vue.extend(Game)
    let props = {
      playerCount: 2,
      borderSize: 3
    }
    const vm = new Constructor({propsData: props}).$mount()
    expect(vm.$el.querySelector('.next-turn-text').textContent).to.equal('Next turn is:')
    // expect(classArr).to.deep.equal(['fa', 'fa-times', 'icon'])
    expect(vm.$el.querySelector('.next-turn-wrap .icon').classList.contains('fa-times')).to.equal(true)

    vm.game.placeValue(0, 0)
    // wait a "tick" after state change before asserting DOM updates
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.next-turn-wrap .icon').classList.contains('fa-circle')).to.equal(true)
    })
  })
})
