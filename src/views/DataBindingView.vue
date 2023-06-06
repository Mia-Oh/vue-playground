<template>
  <div>
    <DataBinding />
    <international-test />
  </div>
</template>

<script>
import DataBinding from "../components/DataBinding.vue";
import InternationalTest from "@/components/InternationalTest.vue";

export default {
  name: "DataBindingView",
  components: {
    DataBinding,
    InternationalTest,
  },
};
</script>
