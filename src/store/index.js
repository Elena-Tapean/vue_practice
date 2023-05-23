import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsCopy: [],
    basket: []
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS (state, data) {
      state.products = data
      state.productsCopy = [...data]
    },
    ADD_TO_BASKET (state, product) {
      state.basket.push(product)
    },
    BUY_PRODUCT (state, product) {
      state.basket.buy(product)
    },
    DELETE_PRODUCT (state, {id}) {
      const index = state.basket.findIndex(product => +product.id === +id)
      state.basket.splice(index, 1)
    }
  },
  actions: {
    async data({commit}) {
      try {
        setTimeout(() => {
          const data = [
            {
              id: 1,
              image: require('../assets/daffodils.jpg'),
              title: 'Daffodils',
              description: 'Spring flowers bringing you new friends',
              price: 10
            },
            {
              id: 2,
              image: require('../assets/roses.jpg'),
              title: 'Roses',
              description: 'Spring and Summer flowers brining you new loves',
              price: 25
            },
            {
              id: 3,
              image: require('../assets/hyacinth.jpg'),
              title: 'Hyacinth',
              description: 'Spring flowers aiding you with its therapeutic perfume and joyful colors',
              price: 30
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
