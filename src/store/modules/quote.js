import * as types from '../mutation-types'

const mutations = {
	[types.RECIEVE_QUOTE] (state, { quote }) {
		state.quote = quote
	}
}