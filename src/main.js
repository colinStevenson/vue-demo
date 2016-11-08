import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Overview from './components/overview.vue'
import Ratings from './components/ratings.vue'
import store from './store'

Vue.use(VueRouter)

const routes = [
  { name: 'overview',  path: '/overview', component: Overview },
  { path: '/ratings', component: Ratings },
  { path: '*', redirect: '/overview'}
]

const router = new VueRouter({ routes })


new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})

