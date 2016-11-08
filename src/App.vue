<template>
  <div>
    <site-navbar></site-navbar>
    <main class="container" id="app">
      <h1 class="page-title">{{details.Name}}</h1>
      <page-nav></page-nav>
      <router-view default="overview"></router-view>
    </main>
  </div>
</template>

<script>

import SiteNavbar from "./components/site-navbar.vue"
import Overview from "./components/overview.vue"
import PageNav from "./components/page-nav.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: { SiteNavbar, Overview, PageNav }, 
  computed: mapGetters({
    details: 'quoteDetails',
    symbol: 'symbol'
  }),
  created() {
		this.$store.dispatch('getQuote', this.symbol)
	}
}
</script>