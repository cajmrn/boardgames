<template>
    <v-form>
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
                    density="compact"
                    required
                    >
                    </v-text-field>
                    <v-row>
                        <v-col cols="6">
                            <v-select label="Game" 
                                v-model="isDay.game" 
                                theme="dark" 
                                density="compact"
                                :items="gamesList">
                            </v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                v-model="isDay.startDate"
                                label="Date"
                                required
                                type="date"
                                density="compact"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="4">
                            <v-text-field
                                v-model="isDay.exp.base"
                                label="Base Exp"
                                density="compact"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                v-model="isDay.exp.win"
                                label="Win Exp"
                                density="compact"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                v-model="isDay.exp.loss"
                                label="Loss Exp"
                                density="compact"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-select 
                            label="Venue"
                            theme="dark"
                            v-model="isDay.venue"
                            density="compact"
                            :items="venueList">
                            </v-select>
                        </v-col>
                        <v-col class="text-center" cols="8">
                            <v-row>
                                <v-col>
                                    <v-btn block @click="post_event">
                                        {{isUpdate}}
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <WaitingForAxios :_done="_done"/>
                                </v-col>
                            </v-row>
                            <v-row align="center" justify="center">
                                {{ _axios_status }}
                            </v-row>
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
                        <v-btn block  @click="navigateToExperience" :disabled="!canPass">Experience</v-btn>
                    </RouterLink> 
                </v-col>        
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
import { useMikeDbEventStore } from "@/stores/events"
import { useMikeDBGameStore } from "@/stores/mikedb_games"
import { useMikeDbVenueStore } from "@/stores/venues";
import { mapStores } from "pinia";
import ExperienceSummaryList  from "./ExperienceSummaryList.vue"
import WaitingForAxios from "./WaitingForAxios.vue";

export default {
    components:{
        ExperienceSummaryList
        ,WaitingForAxios
    }
    ,data() {
        return {
            _event:{}
            ,_done: true
            ,_axios_status:""
            ,_addLable : "Add"
            ,_updateLable :"Update"
        }
    }
    ,mounted(){
        this.mikedb_gamesStore.getAllGames()
        this.venuesStore.getAllVenues()
    }
    ,computed:{
        ...mapStores(useMikeDbEventStore)
        ,...mapStores(useMikeDBGameStore)
        ,...mapStores(useMikeDbVenueStore)
        ,gamesList(){
            return this.mikedb_gamesStore.mikedb_gamelist.slice().map(i => i.name)     
        }
        ,venueList(){
            return this.venuesStore.venueList.slice().map(i => i.name)
        }
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
            return this.canPass ? this._updateLable:this._addLable
        }
        ,canPass(){
            return (this.eventDetails.id || this.eventsStore.created_event.data)
        }
        ,eventToPass(){
            return this.eventDetails.id ? this.eventDetails : this.eventsStore.created_event.data
        }
    }
    ,unmounted(){
			this.eventsStore.setEventId(null)
	}
    ,methods:{
        post_event(){
            const _temp_event = {
                "startDate":this.isDay.startDate
                ,"title":this.isDay.title
                ,"game":this.isDay.game
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
                ,"venue": this.isDay.venue
            }
            if(!this.eventDetails.id && !this.eventsStore.created_event.data){
                this.add(_temp_event)
            }
            else{
                this.update(_temp_event)
            }
        }
        ,async add(_evt) {            
            this._event = _evt
            this._done=false
            this._axios_status=""
            await this.eventsStore.postNewEvent(this._event)
            .then(() =>{
                console.log("the created event", this.eventsStore.created_event)
                this._done=true;
                this._axios_status="Added Successfully."
                }
                
            )
        }
        ,async update(_evt){
            this._event = _evt
            this._event.id = this.eventsStore.selected_event.id
            this._done=false
            this._axios_status = ""
            await this.eventsStore.patchEvent(this._event)
                .then(()=>{
                    console.log("the updated event", this._event)
                    this._done=true;
                    this._axios_status = "Updated Successfully"
                })
        }
        ,navigateToExperience(){
            this.eventsStore.setExpEvent(this.eventToPass)
        }
    }
}
</script>
<style>

</style>