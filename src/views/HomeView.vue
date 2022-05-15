<template>
  <div class="home">
    <h1>Home Page</h1>
    <h2>Hello {{ this.name }}, welcome back</h2>
    <table class="table-home" border="1">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Actions</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>
          {{ item.id }}
        </td>
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.contact }}
        </td>
        <td>
          {{ item.address }}
        </td>
        <td>
          <router-link :to="'/update/' + item.id">Update</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user)[0].name;
    if (!user) {
      this.$router.push({ name: "signup" });
    }
    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurant = result.data;
    console.log(this.restaurant);
  },
};
</script>
<style scoped>
.table-home {
  margin: auto;
}
td {
  width: 160px;
  height: 40px;
}
</style>
