<template>
  <h2 v-bind:value="title"></h2>
</template>
<script>
export default {
  data() {
    return {
      title: "Dynamic page title",
    };
  },
};
</script>
