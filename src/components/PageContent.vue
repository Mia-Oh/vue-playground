<template>
  <P>{{ content }}</P>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: "페이지 내용을 위한 구역 입니다.",
    },
  },
};
</script>
