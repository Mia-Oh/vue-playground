<template>
  <div>
    <slot-modal-layout>
      <template v-slot:header>
        <!-- <h1>This is header</h1> -->
      </template>
      <template v-slot:default>
        <p>popup content 1</p>
        <p>popup content 2</p>
      </template>
      <template v-slot:footer>
        <button type="button">Close</button>
      </template>
    </slot-modal-layout>
  </div>
</template>
<script>
import SlotModalLayout from "./SlotModalLayout.vue";
export default {
  components: {
    SlotModalLayout,
  },
};
</script>
