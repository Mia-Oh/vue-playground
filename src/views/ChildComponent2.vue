<template>
  <button type="button" @click="childFunc" ref="btn">
    자식 컴포넌트 데이터 변경
  </button>
</template>
<script>
export default {
  data() {
    return {
      msg: "message",
    };
  },
  methods: {
    childFunc() {
      this.msg = "changed messgage";
      console.log("눌림");
    },
  },
};
</script>
