import {defineStore} from 'pinia'
import {_mikedb, MIKEDB_GAME_URL} from '@/stores/_mikedb'

export const useMikeDBGameStore = defineStore('mikedb_games',{
    state : () => {
        return {
            _mikedb_games:[]
        }
    }
    ,getters:{
        mikedb_gamelist: (state) => state._mikedb_games
    }
    ,actions: {
        async getAllGames() {
            return await _mikedb.get(MIKEDB_GAME_URL)
                .then(response => {
                    this._mikedb_games = response.data
                })
                .catch((err)=> console.log(err))
        }
    }

})