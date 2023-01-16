<template>
    <v-container>
        <v-divider></v-divider>
        <v-row>
            <CommissionerSummary></CommissionerSummary>
        </v-row>  
        <v-divider></v-divider>
    </v-container>
</template>
<script>
import CommissionerSummary from '@/components/CommissionerSummary.vue';
export default{
    components:{
    CommissionerSummary
}
}
</script>