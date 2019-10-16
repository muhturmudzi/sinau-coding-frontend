<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <span>
        <h2>
          <span>
            <i class="material-icons">
              notes
            </i>
          </span>
          Porto<b style="color: red">folio</b>
        </h2>
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <router-link to="/home">Home</router-link>
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/kontak">Kontak</router-link>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
  .ul .li .router-link {
    color: black
  }

  .navbar {
    background-color: blueviolet;
  }

  .active-bngt {
    color: red;
    font-weight: bolder;
  }
</style>