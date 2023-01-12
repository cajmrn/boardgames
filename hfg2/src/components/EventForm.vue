<template>
<form @submit="add">
    <div>
        <h1>Event Details</h1>
    </div>
    <div class="field">
        <label class="label">Game</label>
        <div class="control">
            <input v-model="eventName" class="input" type="text" />
        </div>
    </div>
    <div class="field">
        <label class="label">Date</label>
        <div class="control">
            <input v-model="eventDate" class="input" type="date" />
        </div>
    </div>
    <button type="submit">Add</button>
    <button type="button" @click="alertme">alert</button>
</form>
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
</style>