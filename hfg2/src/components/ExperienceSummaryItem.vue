<template>
    <RouterLink to="/experiences">
    <v-list-item>
        <v-row>
        <v-col cols="2">
            <v-avatar color="black" rounded="0">
                <v-icon color="white">mdi-notebook-edit</v-icon>
            </v-avatar>
        </v-col>
        <v-col cols="8">
            {{_experience.summary}}
        </v-col>
        <v-col cols="2">
            {{_experience.rating }}
        </v-col>
    </v-row>
    </v-list-item>
    </RouterLink>
</template>
<script>
    export default {
        name:"ExperienceSummaryItem"
        ,props:{
            _experience:{}
        }
    }
</script>