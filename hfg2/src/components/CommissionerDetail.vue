<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-card>
                    <v-card-title>Joined</v-card-title>
                    <v-card-text>{{ selected_commissioner.joined }}</v-card-text>
                </v-card>
            </v-col>
            <v-col cols="9">
                <v-card>
                    <v-card-title>Note</v-card-title>
                    <v-card-text>{{ selected_commissioner.note }}</v-card-text>
                </v-card>
            </v-col>

        </v-row>
        <v-row >
            <v-col cols="3">
                <v-card>
                <v-icon size="x-large"> mdi-trophy</v-icon>
                <v-card-title > Wins: {{ selected_commissioner.wins }} </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                <v-icon size="large"> mdi-trophy</v-icon>
                <v-card-title > Exp: {{ selected_commissioner.exp }} </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                <v-icon size="large"> mdi-chart-line</v-icon>
                <v-card-title > Rank: {{ selected_commissioner.rank }} </v-card-title>
                <v-col cols="12">
                    <v-progress-linear 
                        model-value="40"
                        height="12"
                        ></v-progress-linear>
                </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { useMikeDbSCommissionertore } from '@/stores/commissioners';
  import { mapStores } from 'pinia';

  export default{
    computed:{
      ...mapStores(useMikeDbSCommissionertore)
      ,selected_commissioner(){
        return this.commissionersStore.selected_commissioner
      }
    }
    ,methods: {
        calculate_rank(k){
            return 1;
        }

    }
  }
</script>