<template>
  <div class="login">
    <img
      src="../assets/kisspng-monumental-restaurant-logo-cafe-5af54f49045985.8762634515260260570178.png"
      alt=""
    />
    <h1>Login</h1>
    <div class="login-input">
      <input type="email" v-model="email" placeholder="Enter email" />
      <input type="password" v-model="password" placeholder="Enter password" />
      <button v-on:click="signUp">Login</button>
      <p>
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
.login {
  display: block;
  margin-top: 12px;
}
img {
  width: 100px;
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