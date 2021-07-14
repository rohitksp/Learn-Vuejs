<template>
  <div>
    <h1>Login Page</h1>
    <h1>{{ data }}</h1>
    <form @submit.prevent="checkData()">
      <label for="userName">UserName</label>
      <input v-model="userName" type="text" name="userName" id="userName" />
      <br />
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password" />
      <br />
      <button type="submit">Login</button>
    </form>
    <br />
    <router-link to="/signup">Sign up</router-link>|
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      data: "",
      userName: "",
      password: "",
    };
  },
  methods: {
    checkData() {
      axios
        .get(
          `https://localhost:3000/users?userName=${this.userName}&password=${this.password}`
        )
        .then((response) => {
          this.data = response.data;
          if (this.data !== []) {
            console.log("signin first")
          } else {
            console.log("logged in")
          }
          /* ? window.alert("Sign in first")
            : window.alert("logged in"); */
          /* if (this.data == []) {
            console.log("First signup the form");
          } else {
            console.log("You have successfully logged in");
          } */
          /* if (response.data === []) {
            console.log("pass", response.data);
          } else {
            console.log("fail", response.data);
          } */
        });
    },
  },
};
</script>