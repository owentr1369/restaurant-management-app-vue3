<template>
  <HeaderComp />
</template>
<script>
import HeaderComp from "./components/HeaderComp.vue";
export default {
  // setup() {
  // },
  components: { HeaderComp },
};
</script>
<style>
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav a {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
