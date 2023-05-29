<template>
  <div>
    <child-component ref="child_component" />
    <child-component @send-message="sendMessage" />
    <button type="button" @click="changeChildData">Change Child Data</button>
  </div>
</template>
<script>
import ChildComponent from "../views/ChildComponent.vue";

export default {
  components: { ChildComponent },
  methods: {
    changeChildData() {
      this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
    },
    sendMessage(data) {
      console.log(data);
    },
  },
  mounted() {
    this.$refs.child_component.$refs.btn.click();
    this.$refs.child_component.callFromParent();
  },
};
</script>
