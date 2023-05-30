<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr />
    <h2>Named Slot</h2>
    <br />
    <slot-use-modal-layout />
    <hr />
    <h2>Scope Slot</h2>
    <br />
    <scope-slot-use-layout />
  </div>
</template>
<script>
import SlotUseModalLayout from "./Slot/SlotUseModalLayout.vue";
import ScopeSlotUseLayout from "./Slot/ScopeSlotUseLayout.vue";
export default {
  components: {
    SlotUseModalLayout,
    ScopeSlotUseLayout,
  },
};
</script>
