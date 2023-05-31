<!-- actions : 뮤테이션을 일으키는 곳, state 변화를 주기 위해 dispatch -->
<template>
  <div>
    <button type="button" @click="subCounter">-</button>
    <button type="button" @click="addCounter">+</button>
  </div>
</template>
<script>
import { mapActions } from "vuex"; // mapActions로 actions에 접근함
export default {
  methods: {
    ...mapActions(["addCounter", "subCounter"]),
  },
};
</script>
