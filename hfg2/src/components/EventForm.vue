<template>
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
            <button type="button">Generate Experience</button>
        </div>
        <div class="experiences-list">
            <ul>
                <li>test</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { useMikeDbStore } from "@/stores/events"
import { mapStores } from "pinia";

const emptyevent = {
    "startDate": ""
    ,"game": ""
    ,"title":""
}
export default {
    data(){
        return{
            eventDetails: {}
        }   
    }
    ,mounted(){
        Object.assign(this.eventDetails, emptyevent || {})
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

form {
    border-bottom: 2px solid black;
    padding-bottom: 15px;
}
.field{
    padding-bottom: 10px;
}
.input{
    width: 100%;
}
.experiences-header{
    display:flex;
    justify-content: right;
    padding-top: 15px;
}
</style>