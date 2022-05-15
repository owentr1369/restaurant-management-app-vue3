<template>
  <div class="login">
    <h1>Login</h1>
    <div class="login-input">
      <input type="email" v-model="email" placeholder="Enter email" />
      <input type="password" v-model="password" placeholder="Enter password" />
      <button v-on:click="login">Login</button>
      <p>
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.log(result);
      if (result.status == 200) {
        // The HTTP 200 OK success status response code indicates
        // that the request has succeeded. A 200 response is
        // cacheable by default.
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.login {
  display: block;
  margin-top: 12px;
}
.login-input input {
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
.login-input button {
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