<template>
  <div>
    <h1>Register Page</h1>
    <form>
      <label for="userName">UserName</label>
      <input type="text" name="userName" id="userName" /> <br />
      <label for="emailId">Email Id</label>
      <input type="email" name="emailId" id="emailId" /> <br />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" /> <br />
      <button type="submit">SignUp</button>
    </form>
    <br />
    <router-link to="/login">Login</router-link> |
    <router-link to="/">Home</router-link>
  </div>
</template>
