import * as types from '../mutation-types'

// initial state
const state = {
    symbol: "KO",
    details: {},
    loading: true
}

const getters = {
  quoteDetails (state){
    return state.details
  },
  symbol (state){
    return state.symbol
  },
  loading (state){
    return state.loading
  }
}

const mutations = {
	[types.RECIEVE_QUOTE] (state, { quote }) {
		state.details = quote
    state.loading = false
	},
  [types.UPDATE_SYMBOL] (state, symbol) {
    state.symbol = symbol
    state.loading = true
  }
}

export default {
  state,
  getters,
  mutations
}