<template>
    <v-col cols="4" md="4">
        <v-card
            class="mx-auto"
            max-width="2400"
            rounded="0"
            variant="outlined"
            >
            <v-row>
                <v-col cols="6">
                <v-avatar
                    color="grey"
                    size="150"
                    rounded="0"
                    variant="outlined"
                >
                    <v-img cover :src="game?.thumbnailUrl"></v-img>
                </v-avatar>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col
                        class="text-h3"
                        cols="12"
                    >
                        <v-list-item
                            class="text-white"
                            title="Rating:"
                            :subtitle="game?.avgRating?.toFixed(1)"
                            ></v-list-item>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-list-item
                            class="text-white"
                            title="Weight:"
                            :subtitle="game?.avgWeight?.toFixed(1)"
                            ></v-list-item>
                    </v-col>
                </v-row>               
            </v-col>

            </v-row>
                <v-list-item
                    class="text-white"
                    title=""
                    :subtitle="game?.name"
                ></v-list-item>
        </v-card>
    </v-col>
</template>
<script lang="ts">
    import type {Game} from "@/stores/game";
    export default{
        props:{
            game: {} as typeof Game
        }
    }
</script>