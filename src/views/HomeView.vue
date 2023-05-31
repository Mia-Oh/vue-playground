<template>
  <div class="home">
    <HelloWorld msg="Vuex Example" />
    <right />
    <Left />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Left from "../components/Left.vue";
import Right from "../components/Right.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Left,
    Right,
  },
};
</script>
