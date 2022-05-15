<template>
  <div class="sign-up">
    <img
      src="../assets/kisspng-monumental-restaurant-logo-cafe-5af54f49045985.8762634515260260570178.png"
      alt=""
    />
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped>
.sign-up {
  display: block;
  margin-top: 12px;
}
img {
  width: 100px;
}
.register input {
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
.register button {
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
}
</style>