import * as types from '../mutation-types'

// initial state
const state = {
    symbol: "KO",
    details: {}
}

const mutations = {
	[types.RECIEVE_QUOTE] (state, { quote }) {
		state.details = quote
	},
  [types.UPDATE_SYMBOL] (state, symbol) {
    state.symbol = symbol
  }
}

export default {
  state,
  mutations
}