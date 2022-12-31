import {defineStore} from 'pinia'
import {_mikedb, MIKEDB_EVENT_URL} from "@/stores/_mikedb";

export const useMikeDbStore =  defineStore('events',{
    state: () => {
        return {
            events : []
        }
    },
    getters:{
        eventList: (state) => state.events
    },
    actions:{
        async getAllEvents(){
            return await _mikedb.get(MIKEDB_EVENT_URL)
                .then((events) => (this.events = events.data))
        }
    }
})


