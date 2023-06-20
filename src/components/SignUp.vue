<template>
  <img class="logo" alt="logo" src="../assets/logo.jpg" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="Enter name" v-model="name" />
    <input type="email" placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />

    <button v-on:click="signUp">Sign up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        this.$router.push({ name: "Login" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-infor");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
</style>