<template>
<v-form @submit="add">
    <v-container>
        <v-row>
            <h3>Event Details</h3>
        </v-row>
        <v-row>
            <v-col cols="12" md="12">
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
                            v-model="eventDetails.startDate"
                            label="Date"
                            required
                            type="date"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
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
                    <v-col cols="10"></v-col>
                    <v-col cols="1">
                        <v-btn type="submit">
                        Add
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider></v-divider>
        </v-row>
        <v-row>
            <v-col cols="8">
                <p>No Experiences yet!</p>
            </v-col>
            <v-col cols="4" md="4">
                <RouterLink to="/experiences">
                    <v-btn block>Generate Experience</v-btn>
                </RouterLink>
            </v-col>        
        </v-row>
    </v-container>
    
</v-form>

<!---
<form @submit="add">
    <div>
        <h1>Event Details</h1>
    </div>
    <div class="field">
        <label class="label">Event Title</label>
        <div class="control">
            <input v-model="eventDetails.title" class="input" type="text"/>
        </div>
    </div>
    <div class="field">
        <label class="label">Game</label>
        <div class="control">
            <input v-model="eventDetails.game" class="input" type="text" />
        </div>
    </div>
    <div class="field">
        <label class="label">Date</label>
        <div class="control">
            <input v-model="eventDetails.startDate" class="input" type="date" />
        </div>
    </div>
    <button type="submit">Add</button>
    <button type="button" @click="alertme">Alert</button>
</form>
    <div class="experiences">
        <div class="experiences-header">
            <RouterLink to="/experiences">
                <button type="button">Generate Experience</button>
            </RouterLink>
        </div>    
        <div class="experiences-list">
            <ul>
                <li>test</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
            </ul>
        </div>
    </div> -->
</template>
<script>
import { useMikeDbStore } from "@/stores/events"
import { mapStores } from "pinia";

export default {
    data(){
        return{
            eventDetails: {}
        }   
    }
    ,computed:{
        ...mapStores(useMikeDbStore)
        ,eventDetails(){
            return this.eventsStore.selected_event
        }
    }
    ,methods:{
        add() {
            console.log(this.title)
            this.eventsStore.postNewEvent({"startDate":this.eventDetails.startDate, "title":this.eventDetails.title, "attendees":[0,1,2,3]})
        }
        ,alertme(){
            console.log(this.eventsStore.event_id)
            console.log(this.eventsStore.eventById(this.eventsStore.event_id))
            console.log(this.eventsStore.selected_event);
        }
    }
}
</script>
<style scoped>

</style>