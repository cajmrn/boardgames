<template>
    
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>Experiences</v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-list lines="two">
                    <ExperienceSummaryItem></ExperienceSummaryItem>
                </v-list>
            </v-expansion-panel-text>
            
        </v-expansion-panel>
</v-expansion-panels>
        
</template>
<script>
import  ExperienceSummaryItem  from "./ExperienceSummaryItem.vue"

export default{
    components:{
        ExperienceSummaryItem
    }
}

</script>