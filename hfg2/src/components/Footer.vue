<template>
    <v-row  justify="end" align="end">
        <v-col cols="12">
            <v-img max-height='100' :src="p_image">
            </v-img>
        </v-col>
    </v-row>
</template>
<script>
	import home_poster from '@/assets/poster_shield.png'
    export default {
        computed:{
            p_image() {
				return home_poster
			}
        }

    }
</script>