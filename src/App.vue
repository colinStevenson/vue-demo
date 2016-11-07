<template>
  <div class="container" id="app">
    <h1 class="page-header">{{ msg }}</h1>
    <lookup></lookup>
    <quote symbol="GE"></quote>
  </div>
</template>

<script>

import Quote from "./components/quote.vue"
import Lookup from "./components/lookup.vue"

export default {
  name: 'app',
  components: { Quote,  Lookup },
  data () {
    return {
      msg: 'Vue Demo'
    }
  }
}
</script>

<style>

</style>