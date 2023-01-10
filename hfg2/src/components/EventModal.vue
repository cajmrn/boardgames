<template>
    <Transition name="modal-animation">
      <div v-show="modalActive" class="event-modal">
        <Transition name="modal-animation-inner">
          <div v-show="modalActive" class="event-modal-inner">
            <!-- Modal Content  -->
            <!-- <slot /> -->
            <EventForm></EventForm>
            <!--<button>Close</button>-->
          </div>
        </Transition>
      </div>
    </Transition>
</template>
<script lang="ts">
  import EventForm from './EventForm.vue';

  export default {
    components: {
      EventForm
    },
    props: ["modalActive"]
  };
</script>
<style scoped>
.event-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color:black;
  position: fixed;
  top:0;
  left:0;
  background-color: rgba(255,255,255,0.7);
  z-index:1;
  
}
.event-modal-inner{
  position: relative;
  max-width: 640px;
  width: 80%;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 64px 16px;
}

</style>