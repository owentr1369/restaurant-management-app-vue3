<template>
  <div class="home">
    <h1>Home Page</h1>
    <h2>Hello {{ this.name }}, welcome back</h2>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user)[0].name;
    // if (!user) {
    //   this.$router.push({ name: "signup" });
    // }
  },
};
</script>
