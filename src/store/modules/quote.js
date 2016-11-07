import * as types from '../mutation-types'

// initial state
const state = {
    symbol: null,
    details: {}
}

const mutations = {
	[types.RECIEVE_QUOTE] (state, { quote }) {
		state.details = quote
	}
}

export default {
  state,
  mutations
}