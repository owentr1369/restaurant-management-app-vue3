<template>
  <div class="update">
    <img
      src="../assets/kisspng-monumental-restaurant-logo-cafe-5af54f49045985.8762634515260260570178.png"
      alt=""
    />
    <form class="update-form">
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        v-model="restaurant.name"
      />
      <input
        type="text"
        name="contact"
        placeholder="Enter contact"
        v-model="restaurant.contact"
      />
      <input
        type="text"
        name="address"
        placeholder="Enter address"
        v-model="restaurant.address"
      />
      <button type="button" v-on:click="updateRestaurant">
        Update restaurant
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      restaurant: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      let result = await axios.put(
        `http://localhost:3000/restaurants/${this.$route.params.id}`,
        {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          address: this.restaurant.address,
        }
      );
      console.log(result);
      if (result.status == 200) {
        // The HTTP 200 OK success status response code indicates
        // that the request has succeeded. A 200 response is
        // cacheable by default.
        this.$router.push({ name: "home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signup" });
    }
    const result = await axios.get(
      `http://localhost:3000/restaurants/${this.$route.params.id}`
    );
    this.restaurant = result.data;
    console.log(this.restaurant);
  },
};
</script>
<style scoped>
.update {
  display: block;
  margin-top: 12px;
}
img {
  width: 100px;
}
.update-form input {
  min-width: 400px;
  width: 60%;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  border-radius: 3px;
  margin-top: 12px;
}
.update-form button {
  min-width: 400px;
  width: 50%;
  height: 38px;
  border: 0px;
  border-radius: 3px;
  background: skyblue;
  color: #fff;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  font-weight: 700;
  font-size: 1rem;
}
</style>