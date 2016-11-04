<template>
  <div class="container" id="app">
    <h1 class="page-header">{{ msg }}</h1>
    <quote symbol="GE"></quote>
  </div>
</template>

<script>

import Quote from "./components/quote.vue"

export default {
  name: 'app',
  components: { Quote },
  data () {
    return {
      msg: 'Vue Demo'
    }
  }
}
</script>

<style>

</style>