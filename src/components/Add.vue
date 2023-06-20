<template>
  <Header />
  <h1>Welcome to the Add My Restaurant Page</h1>
  <div class="container">
    <form v-on:submit="addRestaurant">
      <div class="row">
        <div class="col-25">
          <label for="fname">Name restaurant </label>
        </div>
        <div class="col-75">
          <input
            type="text"
            placeholder="Name restaurant"
            v-model="restaurant.name"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="country">Contact</label>
        </div>
        <div class="col-75">
          <input
            type="text"
            placeholder="Number phone"
            v-model="restaurant.contact"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="subject">Addresss</label>
        </div>
        <div class="col-75">
          <textarea
            id="subject"
            placeholder="Addresss ..."
            style="height: 200px"
            v-model="restaurant.address"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <input type="submit" value="Add new Restaurant" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "Add-Restaurant",
  data() {
    return {
      restaurant: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },
  components: {
    Header,
  },
  methods: {
    async addRestaurant(e) {
      e.preventDefault();
      let res = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        address: this.restaurant.address,
      });
      if (res.status == 201) {
        this.$router.push({ name: "Home" });
      } else {
        console.error(res);
      }
    },
  },
  mounted() {},
};
</script>

<style scoped >
input,
textarea:focus {
  outline: none;
}
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

/* Style the submit button */
input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
input[type="submit"]:hover {
  opacity: 0.7;
}
/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 70%;
  margin: auto;
}

/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>