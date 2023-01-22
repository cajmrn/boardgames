<template>
    <v-row justify="center">
      <v-col cols="12">
        <v-dialog v-model="dialog" theme="dark" persistent>
          <v-container class="rounded-lg">
            <EventForm style="background-color: #4E4F50; border:2px solid rgb(33,33,33);"></EventForm>
            <v-row>
              <v-col cols="12" class="text-right">
                <v-btn  block type="button" style="background-color: rgb(33,33,33);" @click="closeForm">Close</v-btn>
              </v-col>
            </v-row>
        </v-container>
        </v-dialog>
      </v-col>
    </v-row>
</template>
<script lang="ts">
  import EventForm from './EventForm.vue';

  export default {
    computed:{
      dialog(){
        return this.modalActive
      }
    }
    ,components: {
      EventForm
    }
    ,props: ["modalActive"]
    ,methods:{
      closeForm() {
        this.$emit('close')
      }
    }
  };
</script>
<style>
/* .event-modal {
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
  max-width: 960px;
  width: 80%;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 16px 16px;
}

.modal-animation-enter-active,
.modal-animation-leave-active{
  transition: opacity 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
} */

</style>