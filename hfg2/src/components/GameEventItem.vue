<template>
<v-card class="mx-auto" max-width="1000">
    <v-img
      height="200px"
	    :src = "game_event?.img_url"
      cover
    ></v-img>

    <v-card-title> {{ game_event?.name }}</v-card-title>

    <v-card-subtitle> Rating: {{ game_event?.bgg_rating }} | Weight: {{ game_event?.bgg_weight }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card>
          <v-card-text> Event 1 </v-card-text>
        </v-card>
        <v-card>
          <v-card-text> Event 2 </v-card-text>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script lang="ts">
  import type {game_event} from '@/stores/game_event'

  export default {
    data: () => ({
      show: false,
    })
    ,props:
    {
      game_event: {} as typeof game_event
    }
  }
</script>
