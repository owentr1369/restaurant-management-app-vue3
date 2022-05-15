<template>
  <div class="add">
    <img
      src="../assets/kisspng-monumental-restaurant-logo-cafe-5af54f49045985.8762634515260260570178.png"
      alt=""
    />
    <form class="add-form">
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
      <button type="button" v-on:click="addRestaurant">
        Add new restaurant
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddView",
  methods: {
    addRestaurant() {
      console.log(this.restaurant);
    },
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  // mounted() {
  //   let user = localStorage.getItem("user-info");
  //   this.name = JSON.parse(user)[0].name;
  //   if (!user) {
  //     this.$router.push({ name: "signup" });
  //   }
  // },
};
</script>
<style scoped>
.add {
  display: block;
  margin-top: 12px;
}
img {
  width: 100px;
}
.add-form input {
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
}
.add-form button {
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