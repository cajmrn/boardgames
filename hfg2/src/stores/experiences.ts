import {defineStore } from "pinia"
import { _mikedb, MIKEDB_EXPERIENCE_URL} from "@/stores/_mikedb"
import { useMikeDbEventStore } from "@/stores/events"

export const useMkeDBExperienceStore = defineStore('experiences',{
    state: () => {
        return {
            _experiences : []
            ,_passed_event: {}
        }
    }
    ,getters:{
        passedEvent:(state) => {
            const _eventStore = useMikeDbEventStore();
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
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})