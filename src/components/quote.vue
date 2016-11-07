<template>
	<div class="panel panel-primary">
		<header class="panel-heading">
			<h1 class="panel-title">{{details.Name || "--" }}</h1>
		</header>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: mapGetters({
		details: 'getQuote'
	}),
	props: {
		symbol:{
			type: String,
			default: "MSFT"
		}
	},
	created() {
		this.$store.dispatch('getQuote')
	}
}
</script>