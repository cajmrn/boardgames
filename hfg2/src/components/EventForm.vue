<template>
<form @submit="add">
    <div>
        <h1>Add New Game</h1>
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
</form>
</template>
<script>
import { _mikedb } from '@/stores/_mikedb';
export default {
    data(){
        return{
            eventName:""
            ,eventDate: ""
        }
        
    },
    methods:{
        add() {
            alert(this.eventName + " on " + this.eventDate)
        }
    }
}
</script>
<style>
</style>