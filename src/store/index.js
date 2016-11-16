import Vue from 'vue'
import Vuex from 'vuex'
import quote from './modules/quote'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules:{
		quote
	},
	strict: debug
})