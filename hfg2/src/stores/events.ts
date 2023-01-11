import {defineStore} from 'pinia'
import {_mikedb, MIKEDB_EVENT_URL} from "@/stores/_mikedb";

export const useMikeDbStore =  defineStore('events',{
    state: () => {
        return {
            game_events : []
        }
    },
    getters:{
        eventList: (state) => state.game_events
    },
    actions:{
        async getAllEvents(){
            return await _mikedb.get(MIKEDB_EVENT_URL)
                .then(response => {
                    this.game_events = response.data
                })
                .catch((err) => console.log(err))
        },
        async postNewEvent(_eventdetails: any) {
            return await _mikedb.post(MIKEDB_EVENT_URL,_eventdetails)
            .then(response => {
                console.log(response)
            })
            .catch((err) => console.log(err));
        },
        async getEvent(_id: any){
            return await _mikedb.get(MIKEDB_EVENT_URL+_id)
            .then(response =>{
                console.log(response)
            } )
            .catch((err) => console.log(err))
        }
    }
})


