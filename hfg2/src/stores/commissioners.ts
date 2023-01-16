import {defineStore} from 'pinia'
import {_mikedb, MIKEDB_COMMISSIONER_URL} from "@/stores/_mikedb";


export const useMikeDbSCommissionertore =  defineStore('commissioners',{
    state: () => {
        return {
            _commissioners : []
            ,_commissioner_id : null
            ,_selected_commissioner: {}
        }
    },
    getters:{
        commissionersList: (state) => state._commissioners
        ,commissioner_id: (state) => state._commissioner_id
        ,commissionerById: (state) => {return (_id:any) => state._commissioners.filter(_i => _i['id'] === _id)}
        ,selected_commissioner: (state) => state._selected_commissioner
    },
    actions:{
        async getAllCommissioners(){
            return await _mikedb.get(MIKEDB_COMMISSIONER_URL)
                .then(response => {
                    this._commissioners = response.data
                })
                .catch((err) => console.log(err))
        },
        async postNewCommissioner(_commissioner_details: any) {
            return await _mikedb.post(MIKEDB_COMMISSIONER_URL,_commissioner_details)
            .then(response => {
                console.log(response)
            })
            .catch((err) => console.log(err));
        },
        async getCommissioner(_id: any){
            return await _mikedb.get(MIKEDB_COMMISSIONER_URL+_id)
            .then(response =>{
                console.log(response)
            } )
            .catch((err) => console.log(err))
        }
        ,setCommissionerId(_id:any){
            this._commissioner_id = _id
        }
        ,setClickedCommissioner(_id:any){
            this._selected_commissioner = this._commissioners.filter(_i =>  _i['id'] === _id)[0]
        }
        ,resetClickedCommissioner(){
            this._selected_commissioner = {}
        }
    }
})