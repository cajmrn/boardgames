<template>
    <v-form>
        <v-row>
            <v-col cols="9">
                <h3>Experience Details</h3>
            </v-col>
            <v-col cols="3" class="text-end">
                Date: {{ today }}
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-img height="100%" cover>
                    <v-avatar
                        color="grey"
                        size="200"
                        rounded="0"
                    >
                        <v-img 
                            cover 
                            src="https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__opengraph/img/yB7L3YXH4kjbgzWB19p_FF5Ko7E=/fit-in/1200x630/filters:strip_icc()/pic3490053.jpg">
                        </v-img>
                    </v-avatar>
                </v-img>
            </v-col>  
            <v-col cols="9">
                <v-text-field
                    label="Event Title"
                    density="compact"
                    v-model="event_title"
                    disabled
                ></v-text-field>
                <v-text-field
                    label="Game"
                    density="compact"
                    v-model="event_game"
                    disabled
                ></v-text-field>
                <v-text-field
                    label="Experience Summary"
                    density="compact"
                    v-model="summary"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            label="Score"
                            density="compact"
                            v-model="score"
                        ></v-text-field>
                        <v-checkbox
                            label="Is Winner"
                            density="compact"
                            v-model="is_winner"
                        ></v-checkbox>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="7">
                <v-row>
                    <v-col cols="10">
                        <v-slider
                            label="Rating"
                            :max="10"
                            step="1"
                            v-model="rating"
                            track-color="white"
                            hide-details
                        ></v-slider>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field 
                            density="compact" 
                            hide-details 
                            v-model="rating"
                            variant="outlined"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="10">
                        <v-slider
                            label="Weight"
                            :max="10"
                            step="1"
                            v-model="weight"
                            track-color="white"
                            hide-details
                        ></v-slider> 
                    </v-col>
                    <v-col cols="2">    
                        <v-text-field 
                            density="compact" 
                            hide-details 
                            v-model="weight"
                            variant="outlined"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea 
                    label="Corrections"
                    density="compact"
                    v-model="corrections"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea 
                    density="compact"
                    label="Strategy"
                    v-model="strategy"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea 
                    density="compact"
                    label="Final Comments"
                    v-model="comments"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12" md="10">
                <v-file-input 
                    label="File Upload"
                    density="compact"
                    v-model="upload"
                    multiple
                ></v-file-input>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn @click="post_experience">Submit</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
import {useMkeDBExperienceStore} from '@/stores/experiences'
import { mapStores } from 'pinia';

export default {
    data(){
        return{
            summary:""
            ,strategy:""
            ,corrections:""
            ,is_winner: Boolean
            ,score: 0
            ,rating:0
            ,weight:0
            ,comments:""
            ,upload:[]
            ,_experience:{}
        }
    }
    ,computed:{
        ...mapStores(useMkeDBExperienceStore)
        ,event_title(){
            return this.experiencesStore.passedEvent.title
        }
        ,event_game(){
            return this.experiencesStore.passedEvent.game
        }
        ,event_id(){
            return this.experiencesStore.passedEvent.id
        }
        ,today(){
            return new Date().toISOString().substring(0,10)
        }
    }
    ,methods:{
        post_experience(){
            this.add()
        }
        , async add(){
            const temp_exp={
                "submitted_by": 596121520725219
                ,"submitted_date": this.today
                ,"event_id":this.event_id
                ,"summary": this.summary
                ,"strategy": this.strategy
                ,"corrections":this.corrections
                ,"is_winner": this.is_winner
                ,"score": this.score
                ,"rating": this.rating
                ,"weight": this.weight
                ,"comments":this.comments
                ,"pics":this.upload
            }
            this._experience = temp_exp

            console.log(this._experience)
            await this.experiencesStore.postNewExperience(this._experience)
                .then(() =>{
                    console.log('sucess, now need to add the id to the event:')                    
                })
                .catch(err => console.log(err))
            await this.experiencesStore.setExpSummary(this.experiencesStore._created_experience)
            
            //need to figure out how to not do this. need a cleaner solution that a full refresh.
            this.$router
                .push({path:'/events'})
                .then(() => this.$router.go())
        }
    }
}


</script>