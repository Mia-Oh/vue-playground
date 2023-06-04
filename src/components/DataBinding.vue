<template>
  <input type="text" @keyup.enter="keyupEnter" v-focus />
</template>

<script>
export default {
  name: "DataBinding",
  data() {
    return {
      selectedValue: "",
    };
  },
  methods: {
    keyupEnter() {
      alert("Enter");
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>
