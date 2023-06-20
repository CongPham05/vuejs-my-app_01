<template>
  <Header />
  <h1>Welcome to my Home Page</h1>
  <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Contact</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
    <tr v-for="restaurant in listRestaurant" :key="restaurant.id">
      <td>{{ restaurant.id }}</td>
      <td>{{ restaurant.name }}</td>
      <td>{{ restaurant.contact }}</td>
      <td>{{ restaurant.address }}</td>
      <td class="action">
        <router-link :to="'/update-restaurant/' + restaurant.id" class="btn"
          >Update</router-link
        >
        <button class="btnDelete btn" @click="handleDelete(restaurant.id)">
          Delete
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "HomePage",
  data() {
    return {
      listRestaurant: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    async handleDelete(id) {
      let res = await axios.delete("http://localhost:3000/restaurants/" + id);

      if (res.status == 200) {
        this.loadingRestaurats();
      } else {
        console.error(res);
      }
    },
    async loadingRestaurats() {
      let res = await axios.get("http://localhost:3000/restaurants");
      if (res.status == 200) {
        this.listRestaurant = res.data;
      } else console.error(res);
    },
  },

  beforeMount() {
    let user = localStorage.getItem("user-infor");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
  mounted() {
    this.loadingRestaurats();
  },
};
</script>

<style scoped>
table,
td,
th {
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

th,
td {
  padding: 12px;
}
.action {
  text-align: center;
}
.btn {
  border: none;
  color: white;
  padding: 6px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px;
  cursor: pointer;
  border-radius: 4px;
}
.btn:hover {
  cursor: pointer;
  opacity: 0.5;
}
.btnDelete {
  background-color: red;
}
a {
  background-color: #008cba;
}
</style>