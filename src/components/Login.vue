<template>
  <img class="logo" alt="logo" src="../assets/logo.jpg" />
  <h1>Login</h1>
  <div class="login">
    <input type="email" placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />

    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign up</router-link>
    </p>
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
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-infor", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      } else {
        alert("Email or password problem");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-infor");
    if (user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style>
</style>