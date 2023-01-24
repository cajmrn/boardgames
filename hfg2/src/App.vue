<template>
  <v-app :theme="theme">
    <v-app-bar :elevation="5">
      <v-btn>
        <RouterLink to="/">
          <v-app-bar-title>Home</v-app-bar-title>
        </RouterLink>
      </v-btn>
      <v-btn>
        <RouterLink to="/events">
          <v-app-bar-title>Events</v-app-bar-title>
        </RouterLink>
      </v-btn>
      <v-btn>
        <RouterLink to="/commissioners">
          <v-app-bar-title>Commissioners</v-app-bar-title>
        </RouterLink>
      </v-btn>
      <v-btn>
        <RouterLink to="/games_v2">
          <v-app-bar-title>Games</v-app-bar-title>
        </RouterLink>
      </v-btn>
      <v-spacer></v-spacer>
      
      <v-btn v-if="!isAuthenticated" @click="run_login">
        login
      </v-btn>
      <v-btn v-else @click="run_logout">logout</v-btn>
     <!-- <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
      ></v-btn>-->
    </v-app-bar>
    <v-main>
        <RouterView/>
    </v-main>
    <Footer v-if="$route.path !== '/'" />
  </v-app>

  
</template>

<script lang="ts">
 
import {RouterLink, RouterView} from 'vue-router'
import Footer from './components/Footer.vue'

  export default {
    data(){
      return{
        theme:""
        ,user: this.$auth0.user
        ,isAuthenticated: this.$auth0.isAuthenticated
        ,isLoading: this.$auth0.isLoading
      }
    }
    ,components: {
      RouterLink,
      RouterView
      ,Footer
    }
    ,methods:{
      onClick() {
       this.theme = this.theme === 'light' ? 'dark' : 'light'
      }
      ,run_login() {
        this.$auth0.loginWithRedirect()
      }
      ,run_logout() {
        this.$auth0.logout({returnTo: window.location.origin})
      }
    }
  }
</script>

<style>

</style>
