<template>
  <div class="mypage">
    <template v-for="idx in 3">
      <template>
        <p class="ch" :key="`${idx}`">This is index {{ idx }}</p>
      </template>
    </template>
  </div>
</template>
<script>
import day6Mixin from "../mixins/mixin";
export default {
  mixins: [day6Mixin], // 사용할 믹스인 파일을 배열로 등록
  created() {
    this.helloDay6();
  },
  data() {},
};
</script>
<style>
.ch:last-child {
  color: darkgreen;
}
</style>
