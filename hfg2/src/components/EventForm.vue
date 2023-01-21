<template>
    <v-form @submit.prevent="add">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <span class="text-h5">Event Details</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12" >
                    <v-text-field
                    v-model="eventDetails.title"
                    label="title"
                    required
                    >
                    </v-text-field>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                v-model="eventDetails.game"
                                label="Game"
                                required
                            ></v-text-field>
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
                                label="Base Exp"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Win Exp"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Loss Exp"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3" offset="10">
                            <v-btn type="submit">
                            Add
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
    }
    ,methods:{
        add() {
            console.log("selected day" + this.selectedDay.startDate)
            console.log(this.eventDetails.startDate)
            
            // const new_event = {
            //     startDate:this.

            // }
            //this.eventsStore.postNewEvent({"startDate":this.eventDetails.startDate, "title":this.eventDetails.title, "attendees":[0,1,2,3]})
        }
        ,alertme(){
            console.log(this.eventsStore.event_id)
            console.log(this.eventsStore.eventById(this.eventsStore.event_id))
            console.log(this.eventsStore.selected_event);
        }
    }
}
</script>
<style>

</style>