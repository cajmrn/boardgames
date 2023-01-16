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
        v-for="_commish in commissioners"
        :key="_commish"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <!-- @click="toggle"-->
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="250"
          width="150"
          @click="setSelectedCommissioner(_commish),toggle()"
        >
        <v-img height="100%" cover>
                <v-avatar
                    color="grey"
                    size="150"
                    rounded="0"
                >
                    <v-img cover :src="_commish.thumbnail"></v-img>
                </v-avatar>
                <v-list-item
                    class="text-white"
                    :title="_commish.name"
                    :subtitle="_commish.rank"
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
    <!--v-if="model != null"-->
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
  import { useMikeDbSCommissionertore } from '@/stores/commissioners';
  import { mapStores } from 'pinia';

  export default{
    components:{
      CommissionerDetail
    }
    ,mounted(){
      this.commissionersStore.getAllCommissioners()
    }
    ,data(){
        return{
            model: null
        }
    }
    ,computed:{
      ...mapStores(useMikeDbSCommissionertore)
      ,commissioners(){
        return this.commissionersStore.commissionersList?.slice()
      }
    }
    ,methods:{
      setSelectedCommissioner(_commish){
        this.commissionersStore.setClickedCommissioner(_commish.id)
        console.log(this.commissionersStore.selected_commissioner)
      }
    }
  }
</script>