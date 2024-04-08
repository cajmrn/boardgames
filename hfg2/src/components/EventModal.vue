<template>
    <v-row justify="center">
      <v-col cols="12">
        <v-dialog v-model="dialog" theme="dark" persistent>
          <v-container class="rounded-lg">
            <EventForm 
              style="background-color: #4E4F50; border:2px solid rgb(33,33,33);">
              </EventForm>
            <v-row>
              <v-col cols="12" class="text-right">
                <v-btn  
                  block 
                  type="button" 
                  style="background-color: rgb(33,33,33);" 
                  size="large"
                  @click="closeForm">Close</v-btn>
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

</style>