import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsCopy: []
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS (state, data) {
      state.products = data
      state.productsCopy = [...data]
    }
  },
  actions: {
    async data({commit}) {
      try {
        setTimeout(() => {
          const data = [
            {
              id: 1,
              title: 'Daffodils',
              description: 'Spring flowers, white and yellow'
            },
            {
              id: 2,
              title: 'Roses',
              description: 'Spring and Summer flowers, all colors'
            },
            {
              id: 3,
              title: 'Poppy',
              description: 'Spring flower, mostly red, rarely white'
            },
            {
              id: 4,
              title: 'Chamomile',
              description: 'Spring and Summer flower, used as herbal medicine'
            },
            {
              id: 5,
              title: 'Eisendell',
              description: 'Winter flower, start shaped, found on mountain tops'
            }
          ]
          commit('SET_PRODUCTS', data)
        }, 1000)
      } catch(error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
