<script>
    export default {
    name: "Signup",
    data(){
      return{
        inputSignup:{
          name: "",
          email: "",
          password: ""
        }
      }
    },
    methods: {
        signup() {
            let inputDatas = {
                "name": this.inputSignup.name,
                "email": this.inputSignup.email,
                "password": this.inputSignup.password
            }
            console.log(inputDatas)
            let url = "http://localhost:3000/api/auth/signup"
            let options = {
                method: "POST",
                body: JSON.stringify(inputDatas),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            console.log(options)
            fetch(url, options)
                .then(res => res.json())
                .then((res) => {
                    if (res.userId && res.token){
                    localStorage.setItem("userId", res.userId);
                    localStorage.setItem("token", res.token);
                    alert("Compte crée avec succés. Vous pouvez désormais vous connecter.");
                    console.log(localStorage)
                    this.$router.push("/login");
                    } 
                })
                .catch(error => console.log(error))
        }
    }
}



//     methods:{
//       signup: async function (name, email, password) {
//       const body = JSON.stringify({
//         name,
//         email,
//         password,
//       })
//       const paramsFetch = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         }
//       }
//       try {
//         await axios.post("http://localhost:3000/auth/signup", body, paramsFetch)
//         this.$router.push("http://localhost:3000/auth/login") 
//       } catch (error) {
//         alert("Votre adresse mail est déjà rattachée à un compte. Veuillez vous connecter.")
//         this.$router.push("http://localhost:3000/auth/login") 
//         console.log(error)
//       }
//     }
//   }
// }
</script>
<template>
<section class="vh-100 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container">
      <div class="row d-flex">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Créer un compte</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="name" v-model="inputSignup.name"
          required/>
                  <label class="form-label" for="form3Example1cg" >Nom</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" v-model="inputSignup.email"
          name="email" class="form-control form-control-lg" required />
                  <label class="form-label" for="form3Example3cg">Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" v-model="inputSignup.password" name="password"
          required/>
                  <label class="form-label" for="form3Example4cg">Définir un mot de passe</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    J'accepte les <a href="#!" class="text-body"><u>conditions générales d'utilisation</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" @click.prevent="()=> signup(this.name, this.email, this.password, this.$router)">S'inscrire</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Vous possédez déjà un compte ?
                  <router-link to="/login" class="nav-link active mb-3"><u>Se connecter</u></router-link>
                  </p>

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
  font-family: lato-black, sans-serif !important;  
  background-size: contain;
}

.gradient-custom-3 {
/* fallback for old browsers */
background: #ffd7d7;
background: linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%);
}
.card{
  width: fit-content;
  justify-content: center;
  margin: auto;
  margin-top: 1%;
}
.card-body{
  margin:auto;
  justify-content: center;
}
.btn-lg{
  margin-top: 7%;
  margin-bottom: 5%;
}
.btn{
    background-color: #FFD7D7;
}

.btn:hover{
    background-color: #28a745 !important;
}

@media (min-width: 992px){
  .bg-image{
  background-size: cover;
}
}
</style>