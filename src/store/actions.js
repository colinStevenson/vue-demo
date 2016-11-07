import quote from '../api/quote'
import * as types from './mutation-types'

export const getQuote = ({ commit }, symbol) => {
	quote.getQuote( symbol, quote => {
		commit(types.RECIEVE_QUOTE, {quote})
	})
}

export const setSymbol = ({ commit, state }, symbol ) => {
	commit(types.UPDATE_SYMBOL, symbol)
	getQuote({ commit }, symbol)
}