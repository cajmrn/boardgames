<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<EventModal @close="toggleModal" :modalActive="modalActive">
				</EventModal>	
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<div id="cal">		
					<div class="calendar-controls">
					</div>
					<div class="calendar-parent">
						<calendar-view
							:items="items"
							:show-date="showDate"
							:time-format-options="{ hour: 'numeric', minute: '2-digit' }"
							:enable-drag-drop="false"
							:disable-past="disablePast"
							:disable-future="disableFuture"
							:show-times="showTimes"
							:date-classes="myDateClasses"
							:display-period-uom="displayPeriodUom"
							:display-period-count="displayPeriodCount"
							:starting-day-of-week="startingDayOfWeek"
							:class="themeClasses"
							:period-changed-callback="periodChanged"
							:current-period-label="useTodayIcons ? 'icons' : ''"
							:displayWeekNumbers="displayWeekNumbers"
							:enable-date-selection="true"
							:selection-start="selectionStart"
							:selection-end="selectionEnd"
							@date-selection-start="setSelection"
							@date-selection="setSelection"
							@date-selection-finish="finishSelection"
							@drop-on-date="onDrop"
							@click-date="onClickDay"
							@click-item="onClickItem"
						>
							<template #header="{ headerProps }">
								<calendar-view-header slot="header" :header-props="headerProps" @input="setShowDate" />
							</template>
						</calendar-view>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
	
</template>
<script lang="js">
// Load CSS from the published version
	import "../../node_modules/vue-simple-calendar/dist/style.css"
	import { CalendarView, CalendarViewHeader, CalendarMath } from "vue-simple-calendar" // published version
	import EventModal  from "@/components/EventModal.vue"
	import {ref} from 'vue'
	import { mapStores } from "pinia"
	import { useMikeDbEventStore } from "@/stores/events"



	export default {
		name: "App",
		components: {
			CalendarView,
			CalendarViewHeader,
			EventModal
		},
		data() {
			return {
				/* Show the current month, and give it some fake items to show */
				modalActive: ref(false),
				showDate: this.thisMonth(1),
				message: "",
				startingDayOfWeek: 0,
				disablePast: false,
				disableFuture: false,
				displayPeriodUom: "month",
				displayPeriodCount: 1,
				displayWeekNumbers: false,
				showTimes: true,
				selectionStart: null,
				selectionEnd: null,
				newItemTitle: "",
				newItemStartDate: "",
				newItemEndDate: "",
				useDefaultTheme: false,
				useHolidayTheme: true,
				useTodayIcons: false
				,user: this.$auth0.user
        		,isAuthenticated: this.$auth0.isAuthenticated
        		,isLoading: this.$auth0.isLoading
			}
		},
		computed: {
			userLocale() {
				return CalendarMath.getDefaultBrowserLocale
			},
			dayNames() {
				return CalendarMath.getFormattedWeekdayNames(this.userLocale, "long", 0)
			}
			,themeClasses() {
				return {
					"theme-default": /*this.useDefaultTheme*/this.$vuetify.theme, 
					"holiday-us-traditional": this.useHolidayTheme,
					"holiday-us-official": this.useHolidayTheme,
				}
			}
			
			,myDateClasses() {
				// This was added to demonstrate the dateClasses prop. Note in particular that the
				// keys of the object are `yyyy-mm-dd` ISO date strings (not dates), and the values
				// for those keys are strings or string arrays. Keep in mind that your CSS to style these
				// may need to be fairly specific to make it override your theme's styles. See the
				// CSS at the bottom of this component to see how these are styled.
				const o = {}
				const theFirst = this.thisMonth(1)
				const ides = [2, 4, 6, 9].includes(theFirst.getMonth()) ? 15 : 13
				const idesDate = this.thisMonth(ides)
				o[CalendarMath.isoYearMonthDay(idesDate)] = "ides"
				o[CalendarMath.isoYearMonthDay(this.thisMonth(21))] = ["do-you-remember", "the-21st"]
				return o
			},
			...mapStores(useMikeDbEventStore),
			items() {
				return this.eventsStore.eventList?.slice()
			}
		},
		mounted() {
			this.newItemStartDate = CalendarMath.isoYearMonthDay(CalendarMath.today())
			this.newItemEndDate = CalendarMath.isoYearMonthDay(CalendarMath.today())
      		this.eventsStore.getAllEvents()
		}
		,methods: {
			periodChanged() {
				// range, eventSource) {
				// Demo does nothing with this information, just including the method to demonstrate how
				// you can listen for changes to the displayed range and react to them (by loading items, etc.)
				//console.log(eventSource)
				//console.log(range)
			},
			thisMonth(d, h, m) {
				const t = new Date()
				return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
			},
			onClickDay(d) {
				this.selectionStart = null
				this.selectionEnd = null
				this.message = `You clicked: ${d.toLocaleDateString()}`
				this.eventsStore.resetClickedEvent()
				this.eventsStore.resetCreatedEvent()
				this.eventsStore.setClickedDay(d.toISOString().substring(0,10))
				this.toggleModal()
			},
			onClickItem(e) {
				this.message = `You clicked: ${e.title}`
				console.log(`You clicked: ${e.title}`)
				this.eventsStore.resetClickedEvent()
				this.eventsStore.setEventId(e.id)
				this.eventsStore.setClickedEvent(e.id)
				this.toggleModal()
			},
			setShowDate(d) {
				this.message = `Changing calendar view to ${d.toLocaleDateString()}`
				this.showDate = d
			},
			setSelection(dateRange) {
				this.selectionEnd = dateRange[1]
				this.selectionStart = dateRange[0]
			},
			finishSelection(dateRange) {
				this.setSelection(dateRange)
				this.message = `You selected: ${this.selectionStart.toLocaleDateString()} -${this.selectionEnd.toLocaleDateString()}`
			},
			onDrop(item, date) {
				this.message = `You dropped ${item.id} on ${date.toLocaleDateString()}`
				// Determine the delta between the old start date and the date chosen,
				// and apply that delta to both the start and end date to move the item.
				const eLength = CalendarMath.dayDiff(item.startDate, date)
				item.originalItem.startDate = CalendarMath.addDays(item.startDate, eLength)
				item.originalItem.endDate = CalendarMath.addDays(item.endDate, eLength)
			},
			toggleModal() {
				this.modalActive = !this.modalActive	
				this.eventsStore.resetCreatedEvent()
			}
		},
	}
</script>

<style>
#cal {
	display: flex;
	flex-direction: row;
	font-family: Calibri, sans-serif;
	/*width: 95vw;*/
	min-width: 30rem;
	max-width: 100rem;
	min-height: 40rem;
	margin-left: auto;
	margin-right: auto;
}
.calendar-parent {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-x: hidden;
	overflow-y: hidden;
	max-height: 80vh;
	/*background-color: white;*/
}
/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
/*
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
	min-height: 6rem;
}*/
/* These styles are optional, to illustrate the flexbility of styling the calendar purely with CSS. */
/* Add some styling for items tagged with the "birthday" class */
/*
.theme-default .cv-item.birthday {
	background-color: #e0f0e0;
	border-color: #d7e7d7;
	color: black;
}
.theme-default .cv-item.birthday::before {
	content: "\1F382"; /* Birthday cake */
/*	margin-right: 0.5em;
}*/
/* The following classes style the classes computed in myDateClasses and passed to the component's dateClasses prop. */
/*
.theme-default .cv-day.ides {
	background-color: #ffe0e0;
}
.ides .cv-day-number::before {
	content: "\271D";
}
.cv-day.do-you-remember.the-21st .cv-day-number::after {
	content: "";
}
.modal-content{
	display: flex;
	flex-direction: column;
}*/
.cv-item {
	background-color: rgba(var(--v-theme-cvItem),1.0);
}
</style>