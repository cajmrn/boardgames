<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <!-- <v-col cols="12"> -->
        <!-- <RouterLink to="/games_v2">Check out Games V2</RouterLink> -->
        <v-img max-height='200' :src="p_image"></v-img>
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>

<script lang="ts">
import home_poster from '@/assets/poster_shield.png'

export default {
  name: 'HomeView'
  ,computed:{
    p_image(){
      return home_poster
    }
  }
}
</script>

<style>
._child{
  height: 100%;
  width: 100%;
  position:absolute;
}

</style>