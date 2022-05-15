<template>
  <nav>
    <router-link class="nav-item" to="/">Home</router-link> |
    <router-link class="nav-item" to="/add">Add Restaurant</router-link> |
    <router-link v-on:click="logout" class="nav-item" to="#"
      >Logout</router-link
    >
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "HeaderComp",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #333;
  overflow: hidden;
}
.nav-item {
  float: left;
  color: #f2f2f2;
  padding: 14px 14px;
  text-align: center;
  font-size: 1.1rem;
  text-decoration: none;
  margin-right: 6px;
}
.nav-item:hover {
  background-color: #ddd;
  color: #333;
}
</style>