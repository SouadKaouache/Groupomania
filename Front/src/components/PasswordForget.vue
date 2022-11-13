<script>
    export default{
        name:'PasswordForget'
    }
</script>
<template>
    <section class="vh-100">
        
    <div class="container-md">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-primary btn-lg  toggle active btn-success">

            <router-link to="/login" class="nav-link active">Se connecter</router-link>
        </button>
    </div>
      <div class="d-flex">
        
          <div class="card m-auto" style="border-radius: 15px;">
            <div class="card-body">
              <h2 class="text-center mb-4">Mot de passe oublié</h2>

              <form>
                <div class="form-outline mb-2 was-validated">
		<input type="email" class="form-control form-control-lg" id="email" name="email" placeholder="exemple@gmail.com" required>
    <label class="form-label mb-4 mt-3" for="form3Example1cg">Veuillez saisir votre adresse email</label>
  
  </div>
                
   <!-- Button trigger modal -->
   <div class="d-grid gap-2 d-md-flex justify-content-md-end">
<button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Valider
</button>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Réinitialisation du mot de passe</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Veuillez consulter votre boîte mail. Si votre adresse est rattachée à un compte vous recevrez un lien de réinitialisation. Pensez à vérifier vos courriers indésirables.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
</form>
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
}

@media (min-width: 1400px) {
  .card{
    margin-top: 15%;
    width: 26% !important;
  }
}
::placeholder{
    font-size: medium;
}

.toggle{
    margin-right: 5%;
}
.card-body{
    margin: 0;

}

  .card{
    margin-top: 15%;
    width: 40%;
  }


  .container-md    {
    max-width: none;
    width: 100%;
}
.btn-lg{
    font-size: large;
    justify-content: flex-end;
}
.d-flex{
    padding-top: 15%;
}
       .container-md{
    background-image: linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%),
  url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp') !important;
  background-size: cover;
  height: 100vh;
}
.vh-100{
    width: 100%;
}
@media (max-width: 992px){
  .card{
    width: 40%;
  }
  .d-flex{
    padding-top: 30%;
  }
}

@media (max-width: 768px) {
  
.card{
  margin-top: 6vh !important;
    width: 60%;
    padding: 1%;
}
}

</style>