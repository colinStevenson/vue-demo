import * as types from '../mutation-types'
import quote from '../../api/quote'

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

const actions = {
  getQuote ({ commit }, symbol) {
    quote.getQuote( symbol, quote => {
      commit(types.RECIEVE_QUOTE, {quote})
    })
  }, 
  setSymbol ({ commit, state, dispatch }, symbol) {
    commit(types.UPDATE_SYMBOL, symbol)
    dispatch('getQuote', symbol)
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
  actions,
  mutations
}