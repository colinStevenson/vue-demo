<template>
    <header class="navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <span class="navbar-brand">
                    <span class="glyphicon glyphicon-tree-conifer"></span>
                </span>
            </div>
            <lookup v-if="user.authenticated"></lookup>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <router-link  to="/overview">Overview</router-link>
                </li>
                <li v-if="!user.authenticated">
                    <router-link  to="/login">Login</router-link>
                </li>
                <li v-if="!user.authenticated">
                    <router-link  to="/signup">Sign Up</router-link>
                </li>
                <li v-if="user.authenticated">
                    <a to="/login" @click="logout()">Logout</a>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
import Lookup from "./lookup.vue"
import auth from '../../auth'

export default {
  name: 'site-navbar',
  components: { Lookup },
  data() {
      return {
          user: auth.user
      }
  },
  methods: {
      logout(){
          auth.logout();
      }
  }
}
</script>
<style>
    .navbar-brand{
        background: #000;
        border-radius: 999px;
        line-height: 40px;
        width: 40px;
        height: 40px;
        font-size: 24px;
        padding: 0;
        text-align: center;
        margin-top: 10px;
    }
    .navbar-nav > li > .router-link-active{
        
        background-color: #15a589;
        cursor: default;
        
    }
</style>