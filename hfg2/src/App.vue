<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <nav>
        <RouterLink to="/"><h3>Home</h3></RouterLink>
        <RouterLink to="/games"><h3>Games</h3></RouterLink>
        <RouterLink to="/events"><h3>Events</h3></RouterLink>
        <RouterLink to="/commissioners"><h3>Commissioners</h3></RouterLink>
      </nav>
    </div>
  </header>
  <RouterView class="content"/> -->
  <v-app :theme="theme">
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
      >Toggle Theme</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>Content area</v-container>
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
header {
  max-height: 100vh;
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
    }

.logo {
  display: inline-block;
  max-height: 50px;
  padding-top: 1vh;
}

.wrapper {
  flex-grow: 0.8;
  text-align: center;
  vertical-align: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0.5rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  font-weight: bolder;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.content {
  border-top: 1px dashed lightgray;
}
</style>
