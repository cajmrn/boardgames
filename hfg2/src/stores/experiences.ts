import {defineStore } from "pinia"
import { _mikedb, MIKEDB_EXPERIENCE_URL} from "@/stores/_mikedb"
import { useMikeDbEventStore } from "@/stores/events"

export const useMkeDBExperienceStore = defineStore('experiences',{
    
    state: () => {
        return {
            _experiences : []
            ,_passed_event: {}
            ,_created_experience:{}
        }
    }
    ,getters:{
        passedEvent:(state) => {
            const _eventStore = useMikeDbEventStore(); //TODO: How do I make this globally acceessible.
            return _eventStore.exp_event
        }

    }
    ,actions:{
        async getAllExperiences() {
            return await _mikedb.get(MIKEDB_EXPERIENCE_URL)
                .then((response) =>{
                    this._experiences = response.data
                })
                .catch((err) => console.log(err))
        }
        ,async getExperience(_id:any){
            return await _mikedb.get(MIKEDB_EXPERIENCE_URL + _id)
                .then(response =>{
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        ,async postNewExperience(_experienceDetails:any){
            return await _mikedb.post(MIKEDB_EXPERIENCE_URL, _experienceDetails)
                .then(response => {
                    console.log(response)
                    this._created_experience = response
                })
                .catch(err => {
                    console.log(err)
                })
        }
        ,async setExpSummary(_exp:any){
            const _eventStore = useMikeDbEventStore();
            const _e = await _eventStore.setExpSummary(_exp)
            console.log("this is the event that I'm going to work with", _e)
            if(_e){
                (_e["tgc_experiences"] as unknown as any[]).push(_exp.data.id)  
            }
            await _eventStore.patchEvent(_e)
            console.log(_eventStore.patched_event)
        }
    }
})