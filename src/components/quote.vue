<template>
	<div class="panel panel-primary">
		<header class="panel-heading">
			<h1 class="panel-title">{{details.Name}}</h1>
		</header>
		<div class="panel-body">
			<h1>{{details.LastPrice}}</h1>
			<p>{{details.Message}}</p>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: mapGetters({
		details: 'quoteDetails',
		symbol: 'symbol'
	}),
	// props: {
	// 	symbol:{
	// 		type: String,
	// 		default: "KO"
	// 	}
	// },
	created() {
		this.$store.dispatch('getQuote', this.symbol)
	}
}
</script>