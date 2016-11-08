<template>
	<div class="panel panel-default">
		<div class="panel-body">
			<span class="h1">{{details.LastPrice}}</span>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: mapGetters({
		details: 'quoteDetails'
	})
}
</script>