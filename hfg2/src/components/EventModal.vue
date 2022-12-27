<template>
    <Transition name="modal-animation">
      <div v-show="modalActive" class="event-modal">
        <Transition name="modal-animation-inner">
          <div v-show="modalActive" class="event-modal-inner">
            <!-- Modal Content  -->
            <slot />
            <button>Close</button>
          </div>
        </Transition>
      </div>
    </Transition>
</template>
<script lang="ts">
  export default {
    props: ["modalActive"]
  };
</script>
<style scoped>
.event-modal {
  color:white
}

</style>