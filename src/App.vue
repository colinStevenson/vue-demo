<template>
  <div>
    <site-navbar></site-navbar>
    <main class="container" id="app">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

import SiteNavbar from "./components/shared/site-navbar.vue"

export default {
  name: 'app',
  components: { SiteNavbar }
}
</script>