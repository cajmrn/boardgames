import {defineStore} from 'pinia'
import { _mikedb,MIKEDB_VENUE_URL } from './_mikedb'

export const useMikeDbVenueStore = defineStore('venues',{
    state: () => {
        return {
            _venues: []
        }
    }
    ,getters:{
        venueList: (state) => state._venues
    }
    ,actions:{
        async get_all_venues(){
            return await _mikedb.get(MIKEDB_VENUE_URL)
                .then(response => {
                    this._venues = response.data
                })
                .catch((err)=> console.log(err))
        }
    }
})