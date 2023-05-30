<template>
  <div>
    <slot name="myName" v-bind:user="user">
      <input :value="user.lastName" />
    </slot>
  </div>
</template>
<script>
export default {
  name: "ScopeSlotLayout",
  data() {
    return {
      user: {
        firstName: "Wonpil",
        lastName: "Kim",
      },
    };
  },
};
</script>
