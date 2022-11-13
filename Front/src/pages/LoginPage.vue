<script>
export default {
  name: 'LoginPage',
  data(){
      return {
          inputLogin: {
              email: "",
              password: ""
          }
      }
  },
  methods: {
      login(email, password) {
          let url = "http://localhost:3000/api/auth/login"
          let paramsFetch = {
              method: "POST",
              body: JSON.stringify({email, password}),
              headers: {
                  'Content-Type': 'application/json'
              }
          }
          fetch(url, paramsFetch)
              .then(res => res.json())
              .then((res) => {
                localStorage.setItem("email", email)
                console.log(email, password)
                  if (res.userId && res.token) {
                      localStorage.setItem("userId", res.userId)
                      localStorage.setItem("token", res.token)
                      console.log(localStorage)
                      this.$router.push("/feed");
                  } else {
                      alert("Paire email/mot de passe incorrecte ! ");
                  }
              })
              .catch(error => console.log(error))
      }
  }
}
</script>
<template>
  <section class="vh-100 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')">
  <div class="h-100 gradient-custom-3">
  <div class="d-flex gap-3 head"> <img src="../assets/globe1.svg"/> <h1>Groupomania</h1></div>
     <div class="welcome">Bienvenue sur votre réseau social d'entreprise</div>
     <div class="container">
      <div class="d-flex">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-center mb-5">CONNEXION</h2>

              <form class="needs-validation" novalidate>

                <div class="form-outline mb-3 was-validated">
                  <label for="validationCustom01" class="form-label">Adresse email</label>
		<input type="email" class="form-control form-control-lg" id="email" v-model="email" name="email" placeholder="exemple@gmail.com" required/>
    <div class="invalid-feedback mb-3">
      Veuillez saisir une adresse mail valide.
    </div>
    <div class="valid-feedback mb-3">
      Champ valide.
    </div>
  </div>
                <div class="form-outline mb-3 was-validated">
                  <label class="form-label" for="form3Example1cg">Mot de passe</label>
                  <input type="password" name="password" id="password" v-model="password" class="form-control form-control-lg" placeholder="password" required/>
                  <div class="invalid-feedback mb-3">
      Veuillez saisir votre mot de passe.
    </div>
    
                  </div>
                  <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Se souvenir de moi
      </label>
    </div>
    
    <router-link to="/passwordForget" class="nav-link active"  aria-current="page"><ins>Mot de passe oublié</ins></router-link>
    <div class="d-grid gap-2 mx-auto">
    <button class=" btn btn-lg mx-auto" type="submit" @click.prevent= "() =>login(this.email, this.password, this.$router)">Se connecter</button></div>
    <span class="align-baseline"><div class="mt-4 d-flex inscription gap-4">Pas encore de compte ?<router-link to="/signup" class="nav-link active mb-3" aria-current="page" ><ins>S'inscrire</ins></router-link></div></span>
                </form>
                </div>
                </div>
                </div>
                </div>
  </div>
  </section>
</template>
<style scoped>
html,
body {
  height: 100%;
  font-family: lato-black, sans-serif !important;
  background: linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%);
  align-items: center;
  background-size: contain;
}

.card{
  width: 60%;
  margin: auto;
}

.card-body{
  padding: 2rem !important;
}
.btn-lg{
  margin-top: 7%;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: max-content;
}

.w-50{
  margin-top: 7%;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: max-content;
}
.btn{
  width: 30%;
  text-align: center;
    background-color: #FFD7D7;
    align-items: center;
    justify-content: center;
    width: max-content;
}

img{
  scale: 4;
  margin-right: 3%;
}
.gradient-custom-3 {
/* fallback for old browsers */
background: #ffd7d7;
background: linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%);
}

.head{
display: flex;
justify-content: center;
padding-top: 3%;
margin-bottom: 1%;
padding-left: 0%;
padding-right: 0%;
}

h1{
  font-size: 6.5vh;
  padding-top: 0.5%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
}
.btn:hover{
    background-color: #28a745 !important;
}


.welcome{
  font-size: xx-large;
justify-content: center;
display: flex;
margin-bottom: 5%;
}

.form-signin {
  max-width: 330px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
      @media(max-width: 768px) {
  
        .head{
          padding-top: 7vh;
margin-bottom: 5vh;
      }
      .card{
        width: 70%;
      }

      h2{
        font-size: x-large;
        width: max-content;
        margin: auto;
      }
      h1{
        font-size: 5vh;
      }
      .welcome{
        font-size: x-large;
text-align: center;
margin-bottom: 12%;
      }}
      @media (min-width: 992px) {
        .card{
  width: 40%;
  margin: auto;
}

.bg-image{
  background-size: cover;
}

      }
</style>