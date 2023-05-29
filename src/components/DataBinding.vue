<template>
  <input @keyup.enter="keyupEnter()" />
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
};
</script>
