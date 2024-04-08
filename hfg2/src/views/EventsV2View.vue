<template>
	<v-container>
		<v-sheet
		class="pa-4 text-center mx-auto"
    	elevation="12"
    	max-width="1000"
    	rounded="lg"
    	width="100%"
		>
		<v-card>
			<v-card-title>
				Scheduled Events
			</v-card-title>
			<v-card-actions>
				<v-btn color="orange-lighten-2" variant="text"> Schedule an Event! </v-btn>
			</v-card-actions>

		</v-card>
		
		<GameEventItem> </GameEventItem>

		</v-sheet>
		<v-sheet
			class="pa-4 text-center mx-auto"
			elevation="12"
			max-width="1000"
			rounded="lg"
			width="100%"
		>
		<h2 class="text-h5 mb-6">Past Events</h2>
				<GameEventItem
					v-for="game_event in game_events" key="game.bgg_id" :game_event="game_event"
				></GameEventItem>
		</v-sheet>
	</v-container>

</template>
<script lang="js">
// Load CSS from the published version

	import {ref} from 'vue'
	import { mapState, mapStores } from "pinia"
	import { useMikeDbGameEventStore } from "@/stores/game_events"
	import  GameEventItem  from "@/components/GameEventItem.vue"

	export default {
		name: "App",
		components: {
			GameEventItem
		},
		data() {
			return {
				/* Show the current month, and give it some fake items to show */
				modalActive: ref(false)
				,user: this.$auth0.user
        		,isAuthenticated: this.$auth0.isAuthenticated
        		,isLoading: this.$auth0.isLoading
			}
		},
		computed: {
			...mapStores(useMikeDbGameEventStore),
			game_events() {
				return this.game_eventsStore.eventList?.slice()
			}
		},
		mounted() {
			/*this.newItemStartDate = CalendarMath.isoYearMonthDay(CalendarMath.today())
			this.newItemEndDate = CalendarMath.isoYearMonthDay(CalendarMath.today())*/
      		this.game_eventsStore.getAllGameEvents()
		}
		,methods: {
			toggleModal() {
				this.modalActive = !this.modalActive	
				this.game_eventsStore.getAllGameEvents()
			}
		},
	}
</script>

<style>

</style>