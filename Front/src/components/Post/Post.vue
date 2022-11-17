<script>
    export default {
        name:"Post",     
        props: ["content", "imageUrl", "_id", "currentUser", "likes", "userId", "email"],
        
  mounted() {},
  methods: {
    deletePost(e) {
      console.log("_id à supprimer :", this.$props._id)
      console.log("props :", this.$props)
      const userId = localStorage.getItem('userId')
      console.log(userId)
      const paramsFetch = {
      headers:   {Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Accept": "application/json",
                "Content-Type": "application/json"
              },
      method: "DELETE",
      }
      const url = "http://localhost:3000/api/post/" 
      fetch(url + this.$props._id, paramsFetch)
        .then((res) => {
          if (res.status === 200) {
            return res.json()
          } else {
            console.log(userId)
            throw new Error("Suppression impossible.")
          }
        })
        .then((res) => {
          console.log("res:", res)
          this.$router.go()
        })
        .catch((err) => console.log("err:", err))
    }
  }}

</script>
<template>
<div class="container-md">
<div class="card mb-3 m-auto mb-5 mt-5">
<div class="card-header">Publié par<div class="d-inline-flex position-relative  ms-3">
  <span class="position-absolute bottom-55 end-0 translate-middle p-1 bg-danger border border-light rounded-circle">
  </span>
</div></div>
<img v-if="imageUrl" :src="imageUrl" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text"> {{ content }} </p>
    <!-- <i class="fa-regular fa-thumbs-up" @click="ratePost"></i>
    <i class="fa-solid fa-thumbs-up"></i> -->
    <div class="like-buttons" v-if="!likePending">
      <div class="likes">
        <i v-bind:class="{ 'fas liked': liked, 'far': !liked, 'disabled': disliked }" class="like fa-thumbs-up fa-lg" @click="likePost()"></i>
        <!-- <span>{{ post.likes }}</span> -->
        <div class="like-pending" v-if="likePending">
      <mat-spinner class="white-spinner"></mat-spinner>
    </div>
      </div>
      </div>
             
    <p class="card-text"><small class="text-muted">Dernière mise à jour il y a 3 minutes</small></p>
     
<!-- <div class="form-floating was-validated mt-2">
   <div contenteditable class="form-control" id="text" name="text" placeholder="Saisie obligatoire" required>		
</div>
   <label class="form-label" for="form3Example1cg">Publiez un commentaire</label>
   <div class="d-grid gap-2 d-md-flex justify-content-md-end"> -->
<button type="submit" class="btn btn-danger mt-2 " @click="deletePost">Supprimer la publication</button>
<button type="submit" class="btn btn-primary mt-2 " @click="modifyPost">Modifier la publication</button>
</div>

</div>
  </div>
<!-- </div> -->
<!-- </div> -->
  </template>
<style scoped>
 .form-floating > .form-control{
  height: auto;
 }
  body{
    font-family: lato-black, sans-serif;
  }
  .fa-regular{
    font-size:xx-large;
    content: fa-solid;
  }

  .fa-solid{
    position: relative;
    left: -32px;
    font-size: xx-large;
    opacity: 0;
  }

  .fa-solid:hover{
    opacity: 1;
  }

  .fa-regular::after{
   content: fa-solid
  }

@media(min-width: 769px){
  
  .card{
    font-family: lato-black, sans-serif;
    max-width: 60%;
  }} 

@media(min-width: 380px) and (max-width: 768px){
  .card{
    max-width: 90%
   }}
</style>