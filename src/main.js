import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Overview from './components/Overview.vue'
import Ratings from './components/Ratings.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import store from './store'
import auth from './auth'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');  

// Check the user's auth status when the app starts
auth.checkAuth()

const routes = [
  { name: 'overview',  path: '/overview', component: Overview },
  { path: '/ratings', component: Ratings },
  { path: '/login', component: Login},
  { path: '/signup', component: Signup },
  { path: '*', redirect: '/overview'}
]

export const router = new VueRouter({ routes })


new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})

