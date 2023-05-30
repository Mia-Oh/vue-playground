<template>
  <div>
    <scope-slot-layout>
      <!-- slotProps: 자식에서 슬롯 요소에서 바인딩 시킨 user 데이터를 가지고 있음 -->
      <template v-slot:myNmae="slotProps">
        <input :value="slotProps.user.lastName" />
      </template>
    </scope-slot-layout>
  </div>
</template>
<script>
import ScopeSlotLayout from "./ScopeSlotLayout.vue";
export default {
  components: {
    ScopeSlotLayout,
  },
};
</script>
