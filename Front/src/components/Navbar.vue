<script>
    export default{
        name:"Navbar",
        data() {
    return {
      isLoggedInUser: false
    }
  },
  created() {
    const token = localStorage.getItem("token")
    if (token != null) {
      this.isLoggedInUser = true
    }
  },
  methods: {
    logoutUser() {
      localStorage.clear()
      this.$router.go()
    }
  }
}
</script>
<template>
    <header>
  <nav class="navbar navbar-expand-md navbar-dark" aria-label="Fourth navbar example">
    
    <div class="container-fluid">
      <router-link to="/feed" class="navbar-brand "><img src="../assets/globe.svg"/> Groupomania</router-link>
        

      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link active" aria-current="page" href="#">Fil d'actualité</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link active">Nous contacter</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/feed" class="nav-link active" @click="this.logoutUser"
            v-if="this.isLoggedInUser">Se déconnecter</router-link>
          </li>
        </ul>
        <form role="search">
          <input class="form-control" type="search" placeholder="Recherche" aria-label="Champ de recherche">
        </form>
      </div>
    </div>
  </nav> 
</header>
</template>

    <style scoped>
      .nav-link:hover{
        color: black !important;
        font-weight: 900;
      }
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
      .navbar{
        
        background-color: #FD2D01;
      }

      @media (min-width: 768px) {

      body {
  padding-bottom: 20px;
}
      }
.navbar {
  margin-bottom: 20px;
  font-family: lato-black, sans-serif;
}

    </style>
