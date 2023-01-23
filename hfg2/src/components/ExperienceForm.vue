<template>
    <v-form>
        <v-row>
            <v-col cols="9">
                <h3>Experience Details</h3>
            </v-col>
            <v-col cols="3" class="text-end">
                Date: {{ today }}
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-img height="100%" cover>
                    <v-avatar
                        color="grey"
                        size="200"
                        rounded="0"
                    >
                        <v-img 
                            cover 
                            src="https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__opengraph/img/yB7L3YXH4kjbgzWB19p_FF5Ko7E=/fit-in/1200x630/filters:strip_icc()/pic3490053.jpg">
                        </v-img>
                    </v-avatar>
                </v-img>
            </v-col>  
            <v-col cols="9">
                <v-text-field
                    label="Event Title"
                    density="compact"
                    v-model="game_title"
                    disabled
                ></v-text-field>
                <v-text-field
                    label="Game"
                    density="compact"
                    v-model="game_game"
                    disabled
                ></v-text-field>
                <v-text-field
                    label="Experience Summary"
                    density="compact"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            label="Score"
                            density="compact"
                        ></v-text-field>
                        <v-checkbox
                            label="Is Winner"
                            density="compact"
                        ></v-checkbox>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="7">
                <v-row>
                    <v-col cols="10">
                        <v-slider
                            label="Rating"
                            :max="10"
                            step="1"
                            hide-details
                        ></v-slider>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field 
                            density="compact" 
                            hide-details 
                            variant="outlined"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="10">
                        <v-slider
                            label="Weight"
                            :max="10"
                            step="1"
                            hide-details
                        ></v-slider> 
                    </v-col>
                    <v-col cols="2">    
                        <v-text-field 
                            density="compact" 
                            hide-details 
                            variant="outlined"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea 
                    label="Corrections"
                    density="compact"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea 
                    density="compact"
                    label="Strategy"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea 
                    density="compact"
                    label="Final Comments"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12" md="10">
                <v-file-input 
                    label="File Upload"
                    density="compact"
                ></v-file-input>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn>Submit</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
import {useMkeDBExperienceStore} from '@/stores/experiences'
import { mapStores } from 'pinia';

export default {
    computed:{
        ...mapStores(useMkeDBExperienceStore)
        ,game_title(){
            return this.experiencesStore.passedEvent.title
        }
        ,game_game(){
            return this.experiencesStore.passedEvent.game
        }
        ,today(){
            return new Date().toISOString().substring(0,10)
        }
    }
}


</script>