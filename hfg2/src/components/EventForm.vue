<template>
    <v-form @submit.prevent="post_event">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <span class="text-h5">Event Details</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12" >
                    <v-text-field
                    v-model="isDay.title"
                    label="title"
                    required
                    >
                    </v-text-field>
                    <v-row>
                        <v-col cols="6">
                            <v-select label="Game" v-model="game_selection" theme="dark" :items="['Brass Birmingham','Smartphone','Pax Rennaissance']">
                            </v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="isDay.startDate"
                                label="Date"
                                required
                                type="date"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="4">
                            <v-text-field
                                v-model="isDay.exp.base"
                                label="Base Exp"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                v-model="isDay.exp.win"
                                label="Win Exp"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                v-model="isDay.exp.loss"
                                label="Loss Exp"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-select 
                            label="Venue"
                            theme="dark"
                            v-model="game_venue"
                            :items="['Maison Cam','Russian Basement','Ian Fortress','HFG']">
                            </v-select>
                        </v-col>
                        <v-col cols="2">
                            <v-card title="BGG-Weight" text="3.46"></v-card>
                        </v-col>
                        <v-col cols="2">
                            <v-card title="BGG-Rating" text="4.8"></v-card>
                        </v-col>
                        <v-col class="text-center" cols="4">
                            <v-btn type="submit" v-model="testbutton">
                            {{isUpdate}}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>

            </v-row>
            <v-row>
                <v-col cols="9">
                    <ExperienceSummaryList></ExperienceSummaryList>
                </v-col>
                <v-col cols="3">
                    <RouterLink to="/experiences">
                        <v-btn block>Generate Experience</v-btn>
                    </RouterLink>
                </v-col>        
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
import { useMikeDbEventStore } from "@/stores/events"
import { mapStores } from "pinia";
import ExperienceSummaryList  from "./ExperienceSummaryList.vue"

export default {
    components:{
        ExperienceSummaryList
    }
    ,data() {
        return {
            game_selection: ""
            ,bggRating:""
            ,bggWeight:""
            ,game_venue:""
            ,new_event:{}
            ,testbutton:""
        }
    }
    ,computed:{
        ...mapStores(useMikeDbEventStore)
        ,eventDetails(){
            return this.eventsStore.selected_event
        }
        ,selectedDay(){
            return this.eventsStore.selected_day
        }
        ,isDay(){
            return this.eventDetails.startDate ? this.eventDetails:this.selectedDay
        }
        ,isUpdate(){
            return this.eventDetails.id ? "Update":"Add"
        }
    }
    ,methods:{
        post_event(){
            if(!this.eventDetails.id){
                this.add()
            }
            else{
                this.update()
            }
        }
        ,add() {
            console.log("selected day" + this.isDay)
            console.log("selected event"+ this.eventDetails )
            
            const _event = {
                "startDate":this.isDay.startDate
                ,"title":this.isDay.title
                ,"game":this.game_selection
                ,"attendees":[]
                ,"tgc_weight": this.bggWeight
                ,"tgc_rating": this.bggRating
                ,"tgc_experiences": []
                ,"exp":{
                    "base": this.isDay.exp.base
                    ,"win": this.isDay.exp.win
                    ,"loss": this.isDay.exp.loss
                    }
                ,"winner":0
                ,"venue": this.game_venue
            }
            this.new_event = _event
            console.log('adding a new event:', this.isDay)
            this.eventsStore.postNewEvent(this.new_event)
        },
        update(){
            console.log('updating an existing event:', this.isDay)
        }
    }
}
</script>
<style>

</style>