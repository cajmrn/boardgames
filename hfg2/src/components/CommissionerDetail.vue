<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                Joined: 
            </v-col>
        </v-row>
        <v-row >
            <v-col cols="3">
                <v-card>
                <v-icon size="x-large"> mdi-trophy</v-icon>
                <v-card-title > Wins: 79 </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card>
                <v-icon size="large"> mdi-trophy</v-icon>
                <v-card-title > Exp: 125 </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                <v-icon size="large"> mdi-chart-line</v-icon>
                <v-card-title > Rank: Neophyte </v-card-title>
                <v-col cols="12">
                    <v-progress-linear 
                        model-value="40"
                        height="12"
                        ></v-progress-linear>
                </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>