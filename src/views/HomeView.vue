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
import mixin from "@/mixins/mixin";

export default {
  name: "HomeView",
  mixin: [mixin],
  created() {
    this.helloDay6();
  },
  components: {
    HelloWorld,
    Left,
    Right,
  },
};
</script>
