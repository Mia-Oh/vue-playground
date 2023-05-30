<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>page for slot example as well</p>
    <br />
    <slot-use-modal-layout />
  </div>
</template>
<script>
import SlotUseModalLayout from "./Slot/SlotUseModalLayout.vue";
export default {
  components: {
    SlotUseModalLayout,
  },
};
</script>
