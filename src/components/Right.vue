<!-- getters : state를 가지고 오기 위해서 이용 -->
<template>
  <div>{{ counter }}</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["counter"]), // getter에 접근하게 함
  },
};
</script>
