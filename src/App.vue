<template>
  <div class="container" id="app">
    <h1 class="page-header">{{ msg }}</h1>
    <div class="panel panel-primary">
      <header class="panel-heading">
        <h1 class="panel-title">Essential Links</h1>
      </header>
      <div class="panel-body">
        <ul class="list-unstyled">
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div class="panel panel-primary">
      <header class="panel-heading">
        <h1 class="panel-title">Ecosystem</h1>
      </header>
      <div class="panel-body">
        <ul class="list-unstyled">
          <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue Demo'
    }
  }
}
</script>

<style>

</style>