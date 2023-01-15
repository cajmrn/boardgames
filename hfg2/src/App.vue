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
        <RouterLink to="/games">
          <v-app-bar-title>Games</v-app-bar-title>
        </RouterLink>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
      ></v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView/>
      </v-container>
    </v-main>
    
  </v-app>
  
</template>

<script lang="ts">
 
  import {RouterLink, RouterView} from 'vue-router'

  export default {
    data(){
      return{
        theme:""
      }
    }
    ,components: {
      RouterLink,
      RouterView,
    }
    ,methods:{
      onClick() {
       this.theme = this.theme === 'light' ? 'dark' : 'light'
      }
    }
  }
</script>

<style scoped>

</style>
