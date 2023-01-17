<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12">
        <!-- <RouterLink to="/games_v2">Check out Games V2</RouterLink> -->
        <LoginForm></LoginForm>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'HomeView'
  ,components:{
    LoginForm
  }
}
</script>

<style>

</style>