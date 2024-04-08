import {defineStore} from 'pinia'
import type { game_event } from '@/stores/game_event';
import {_mikedb, MIKEDB_GAME_URL} from "@/stores/_mikedb";

export const useMikeDbGameEventStore =  defineStore('game_events',{
    state: () => {
        return {
            _game_events : [] as game_event[]
            ,_event_id : null
            ,_selected_event: {}
            ,_created_event: {}
            ,_exp_event:{}
            ,_patched_event: {}
        }
    }
    ,getters:{
        eventList: (state) => state._game_events
        /*,event_id: (state) => state._event_id*/
        /*,eventById: (state) => {return (_id:any) => state._game_events.filter(_i => _i['id'] === _id)}*/
        /*,selected_event: (state) => state._selected_event
        ,created_event: (state) => state._created_event
        ,exp_event: (state) => state._exp_event
        ,patched_event: (state) => state._patched_event*/
    },
    actions:{
        async getAllGameEvents(): Promise <game_event[]> {
            try{
                const response = await _mikedb.get(MIKEDB_GAME_URL);
                this._game_events = response.data;
                console.log(this._game_events)
                return this._game_events
            }catch(err){
                console.log(err)
                return []
            } 
        }
       /* ,async getEvent(_id: any){
            return await _mikedb.get(MIKEDB_EVENT_URL+_id)
            .then(response =>{
                console.log(response)
            } )
            .catch((err) => console.log(err))
        }
        ,async postNewEvent(_eventdetails: any) {
            return await _mikedb.post(MIKEDB_EVENT_URL,_eventdetails)
            .then(response => {
                console.log("response from events.ts", response)
                this._created_event = response
            })
            .catch((err) => console.log(err));
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
        ,resetCreatedEvent(){
            this._created_event = {}
        }
        ,setExpEvent(_eventToPass:any){
            this._exp_event = _eventToPass
        }
        ,get_today(){
            return new Date().toISOString().substring(0,10)
        }
        ,setExpSummary(_exp:any){
            //this will update the event with the experience.
            console.log("found event",this.eventById(_exp.data.event_id))
            return this.eventById(_exp.data.event_id)[0]
        }
        ,async patchEvent(_eventdetails:any){
            return await _mikedb.patch(MIKEDB_EVENT_URL,_eventdetails)
            .then(response => {
                console.log("response from events.ts", response)
                this._patched_event = response
            })
            .catch((err) => console.log(err));
        }
        ,async deleteEvent(_eventdetails:any){
            return await _mikedb.delete(MIKEDB_EVENT_URL, {data :_eventdetails})
            .then(resposne => {
                console.log ("response from events.ts", resposne)
            })
        }   */
    }
})


