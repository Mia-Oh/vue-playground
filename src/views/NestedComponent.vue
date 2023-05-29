<template>
  <div>
    <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달" />
    <PageContent content="from parent component to child component" />
    <page-title v-bind:title="title" />
  </div>
</template>
<script>
import PageTitle from "../components/PageTitle.vue"; // 컴포넌트 import
import PageContent from "../components/PageContent.vue";
export default {
  components: { PageTitle, PageContent }, // 현재 컴포넌트에서 사용할 컴포넌트 등록
  data() {
    return {
      title: "동적 페이지 타이틀 ",
    };
  },
};
</script>
