import {defineStore} from 'pinia'
import {_mikedb, MIKEDB_EVENT_URL} from "@/stores/_mikedb";

export const useMikeDbEventStore =  defineStore('events',{
    state: () => {
        return {
            _game_events : []
            ,_event_id : null
            ,_selected_event: {}
            ,_selected_day: {}
        }
    },
    getters:{
        eventList: (state) => state._game_events
        ,event_id: (state) => state._event_id
        ,eventById: (state) => {return (_id:any) => state._game_events.filter(_i => _i['id'] === _id)}
        ,selected_event: (state) => state._selected_event
        ,selected_day: (state) => state._selected_day
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
        ,resetClickedDay(){
            this._selected_day = {}
        }
        ,setClickedDay(_d:any){
            this._selected_day = {
                "startDate":_d
                ,"exp":{
                    "base":0
                    ,"win":0
                    ,"loss":0
                }
                ,"tgc_experiences":[]
                ,"winner":0
                ,"venue":0
            }
        }
        ,setClickedEvent(_id:any){
            this._selected_event = this._game_events.filter(_i =>  _i['id'] === _id)[0]
        }
        ,resetClickedEvent(){
            this._selected_event = {}
        }
        ,get_today(){
            return new Date().toISOString().substring(0,10)
        }
    }
})


