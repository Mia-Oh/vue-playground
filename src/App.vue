<template>
  <div id="app">
    <header-layout />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mypage">My Page</router-link> |
      <router-link to="/databinding">Data Binding</router-link> |
      <router-link to="/watch">Watch</router-link> |
      <router-link to="/computed">Computed</router-link> |
      <router-link to="/parentcomponent">Parent Component</router-link> |
      <router-link to="/nestedcomponent">Nested Component</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
import HeaderLayout from "./components/HeaderLayout.vue";
export default {
  components: {
    "header-layout": HeaderLayout,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
