<template>
    <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-primary"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 4"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="250"
          width="150"
          @click="toggle"
        >
        <v-img height="100%" cover>
                <v-avatar
                    color="grey"
                    size="180"
                    rounded="0"
                >
                    <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
                <v-list-item
                    class="text-white"
                    title="Marcus Obrien"
                    subtitle="Network Engineer"
                ></v-list-item>
            </v-img>  
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="400"
      >
        <div class="d-flex fill-height align-center justify-center">
            <CommissionerDetail></CommissionerDetail>
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>
<script>
import CommissionerDetail from './CommissionerDetail.vue';

    export default{
        components:{
    CommissionerDetail
}
        ,data(){
            return{
                model: null

            }
        }
    }
</script>