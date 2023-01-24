<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="2" offset="1">
        <v-img max-height='200' :src="p_image">
        </v-img>
      </v-col>
      <v-col cols="3">
      Committee for the advancement of complicated boardgames
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      Abandon hope all ye who enter here
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