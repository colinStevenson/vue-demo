<template>
	<div class="panel panel-default">
		<header class="panel-heading">
			<h1 class="panel-title">
				{{details.Name}}
			</h1>
		</header>
		<div class="panel-body">
			<span class="h1">{{details.LastPrice}}</span>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: "Overview",
	computed: mapGetters({
		details: 'quoteDetails',
		symbol: 'symbol'
	}),
	created() {
		this.$store.dispatch('getQuote', this.symbol)
	}
}
</script>