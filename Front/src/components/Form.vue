<script>
    export default{
        name:"Form",
        data() {
    return {
      content: "",
      imageChoosen: null,
    }
  },
  methods: {
    changeImage(e) {
      this.imageChoosen = e.target.files[0]
    },
    sendPost() {
      const userId = localStorage.getItem("userId")
      const url = "http://localhost:3000/api/post/form"
      const formData = new FormData()
      formData.append("content", this.content)
      formData.append("image", this.imageChoosen)
      formData.append("userId", userId)
      const paramsFetch = {
        headers:   {Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Accept": "application/json",},
        method: "POST",
      body: formData,
      }
      console.log(localStorage)
      console.log("paramsFetch:", paramsFetch)
      console.log(FormData)
      console.log(formData)
      fetch(url, paramsFetch)
        .then((res) => {
          if (res.status === 400) {
    alert("Vous devez publier du texte et/ou une image.");
  }
          if (res.status === 201) {
            return res.json()
          } else {
            throw new Error("Erreur fetch form.")
          }
        })
        .then((res) => {
          this.$router.go()
        })
        .catch((err) => console.log("err:", err))
    }
  }
}
</script>
<template>
  <div class="container-md">
   
    <textarea v-model="content" id="content" name="content"/>

<div class="mb-2">
  <div class="file btn btn-primary">
							Ajouter une image
              <span v-if="imageChoosen">{{imageChoosen.name}}</span>
							<input type="file" @change="changeImage" id="file-input"/>
						</div>
</div>
<div class="col">
  <label for="floatingSelectGrid" class="form-label">Veuillez séléctionner votre service.</label>
  <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Veuillez choisir</option>
        <option selected>ressources humaines</option>
        <option value="1">comptabilité</option>
        <option value="2">commercial</option>
        <option value="3">informatique</option>
        <option value="3">autre</option>
      </select>
      <div class="invalid-feedback">
      Merci de séléctionner votre service
    </div>  
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
<button type="button" class="btn btn-success btn-lg mt-2 "  @click="sendPost">Publier</button></div>
<hr class = "mt-5"/>
</div>
</template>
<style scoped>
div {
  position: relative;
  overflow: hidden;
}
#file-input {
  position: absolute;
  font-size: 50px;
  opacity: 0;
  right: 0;
  top: 0;
}

#content{
  width: 100%;
  height: 250px;
  max-height: 250px;
  min-height: 250px;
  text-align: start;
}
.container-md{
    margin-top: 5%;
    max-width: 80%;
  }
    body{
      font-family: lato-black, sans-serif;
        background: linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%);}
</style>