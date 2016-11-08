<template>
	<div class="navbar-form navbar-right">
		<div class="form-group">
			<input v-model="inputSymbol" type="text" class="form-control" placeholder="Search">
		</div>
		<button class="btn btn-primary" v-on:click="updateSymbol">Go</button>
	</div>
</template>
<script>
import * as types from '../store/mutation-types'
export default {

	data() {
		return {
			inputSymbol: ""
		}
	},
	methods: {
		updateSymbol(){
			this.$store.dispatch('setSymbol', this.inputSymbol)
		}
	}
}
</script>