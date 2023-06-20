<template>
  <div class="topnav">
    <router-link to="/" active-class="active">Home</router-link>
    <router-link to="/add-restaurant" active-class="active"
      >Add Restaurant</router-link
    >
    <a href="#" v-on:click="logout">{{ nameUser }} Logout</a>
  </div>
</template>

<script>
export default {
  name: "Header-app",
  data() {
    return {
      nameUser: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    this.nameUser = JSON.parse(localStorage.getItem("user-infor"))?.name;
  },
};
</script>

<style>
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
</style>