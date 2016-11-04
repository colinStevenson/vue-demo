import quote from '../api/quote'
import * as types from './mutation-types'

export const getQuote = ({ commit }) => {
	quote.getQuote( quote => {
		commit(types.RECIEVE_QUOTE, {quote})
	})
}