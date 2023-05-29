<template>
  <div>
    <button type="button" @click="checkChild">자식 컴포넌트 조회</button>
    <child-component2 ref="child_component2" />
  </div>
</template>
<script>
import ChildComponent2 from "./ChildComponent2.vue";
export default {
  components: { "child-component2": ChildComponent2 },
  computed: {
    msg() {
      return this.$refs.child_component2.msg;
    },
  },
  methods: {
    checkChild() {
      alert(this.msg);
    },
  },
};
</script>
