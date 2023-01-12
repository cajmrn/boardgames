import {defineStore} from 'pinia'
import {_mikedb, MIKEDB_EVENT_URL} from "@/stores/_mikedb";

export const useMikeDbStore =  defineStore('events',{
    state: () => {
        return {
            _game_events : []
            ,_event_id : null
            ,_selected_event: {}
        }
    },
    getters:{
        eventList: (state) => state._game_events
        ,event_id: (state) => state._event_id
        ,eventById: (state) => {return (_id:any) => state._game_events.filter(_i => _i.id === _id)}
        ,selected_event: (state) => state._selected_event
    },
    actions:{
        async getAllEvents(){
            return await _mikedb.get(MIKEDB_EVENT_URL)
                .then(response => {
                    this._game_events = response.data
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
        ,setEventId(_id:any){
            this._event_id = _id
        }
        ,setClickedEvent(_id:any){
            this._selected_event = this._game_events.filter(_i =>  _i.id === _id)
        }
    }
})


