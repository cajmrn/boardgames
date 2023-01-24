<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>Experiences</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-list 
                    lines="one"
                    max-height="150"
                >
                    <ExperienceSummaryItem 
                        v-for="_experience in eventExperiences" 
                        key="_experience.id" 
                        :_experience="_experience"
                    ></ExperienceSummaryItem>
                </v-list>
            </v-expansion-panel-text>
        </v-expansion-panel>
</v-expansion-panels>
        
</template>
<script>
import { useMkeDBExperienceStore } from "@/stores/experiences";
import { mapState, mapStores } from "pinia";
import  ExperienceSummaryItem  from "./ExperienceSummaryItem.vue"

export default{
    components:{
        ExperienceSummaryItem
    }
    ,computed:{
        ...mapStores(useMkeDBExperienceStore)
        ,...mapState(useMkeDBExperienceStore,['_experiences'])
        // ,...mapGetters(useMkeDBExperienceStore,['eventExperiences'])
        ,eventExperiences(){
            return this.experiencesStore.eventExperiences(this.experiencesStore.event_id)
        }
    }
    ,mounted(){
        
        this.experiencesStore.getAllExperiences()
        console.log("all experiences", this._experiences)
        console.log('experience_event_id', this.experiencesStore.event_id)
    }
}

</script>