<template>
  <!-- <div class="home">
    <h1>No one's Home yet</h1>
    <p>Just look at <RouterLink to="/games">Games</RouterLink> for now.</p>
  </div> -->
  <v-container>
    <v-row align="center">
      <v-col cols="12">
        
        <RouterLink to="/games_v2">Check out Games V2</RouterLink>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<style>
.home {
  min-height: 100vh;
  text-align: center;
}
</style>