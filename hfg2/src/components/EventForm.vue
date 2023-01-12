<template>
<form @submit="add">
    <div>
        <h1>Event Details</h1>
    </div>
    <div class="field">
        <label class="label">Game</label>
        <div class="control">
            <input v-model="eventName" class="input" type="text"/>
        </div>
    </div>
    <div class="field">
        <label class="label">Date</label>
        <div class="control">
            <input v-model="eventDate" class="input" type="date" />
        </div>
    </div>
    <button type="submit">Add</button>
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
import { mapStores, mapState } from "pinia";
export default {
    data(){
        return{
            eventName:""
            ,eventDate:""
        }   
    }
    ,computed:{
        ...mapStores(useMikeDbStore)
    }
    ,methods:{
        add() {
            this.eventsStore.postNewEvent({"startDate":this.eventDate, "title":this.eventName, "attendees":[0,1,2,3]})
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
.experiences-header{
    display:flex;
    justify-content: right;
    padding-top: 15px;
}
</style>