<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style  >
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  height: 130px;
}
.register input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register input:focus,
.login input:focus {
  outline: none;
}
.register button:hover,
.login button:hover {
  opacity: 0.8;
}
.register button,
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: #3cbced;
  cursor: pointer;
}
</style>
