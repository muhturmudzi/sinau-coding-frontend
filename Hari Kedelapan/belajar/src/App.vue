<template>
  <div id="app">
    <div class="container-fluid">
      <navbar/>
    </div>

    <div class="container-fluid">
      <router-view></router-view>
    </div>

    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  </div>
</template>

// npm i

<script>
  import navbar from "./components/navbar"
  export default {
    name: "app",
    components: {
      navbar
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
  }
</style>