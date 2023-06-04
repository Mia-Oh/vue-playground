<template>
  <div class="mypage">
    <template v-for="idx in 3">
      <template>
        <div :key="`${idx}`" class="this">
          <p class="ch">This is index {{ idx }}</p>
          <span>반복 확인 1 </span>
          <span>반복 확인 2 </span>
          <span>반복 확인 3 </span>
        </div>
      </template>
    </template>
  </div>
</template>
<script>
export default {};
</script>
<style>
.this:last-child span:last-of-type {
  color: darkgreen;
  font-weight: bold;
}
</style>
