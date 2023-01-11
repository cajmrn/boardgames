<template>
    <Transition name="modal-animation">
      <div v-show="modalActive" class="event-modal">
        <Transition name="modal-animation-inner">
          <div v-show="modalActive" class="event-modal-inner">
            <!-- Modal Content  -->
            <!-- <slot /> -->
            <EventForm></EventForm>
            <div class="button">
              <button type="button" @click="closeForm">Close</button>
            </div>
           
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
    ,methods:{
      closeForm() {
        this.$emit('close')
      }
    }
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
.button {
  padding-top: 25px;
  padding-right: 20px;
  display: flex;
  justify-content: right;
}

.modal-animation-enter-active,
.modal-animation-leave-active{
  transition: opacity 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

</style>