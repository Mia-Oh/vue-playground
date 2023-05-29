<template>
  <div>
    <h1>Full Name : {{ fullName }}</h1>
    <button type="button" @click="changeName">Change</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Brian",
      lastName: "Kang",
      fullName: "",
    };
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
  },
  methods: {
    changeName() {
      this.firstName = "Young Hyun";
    },
  },
};
</script>
>
