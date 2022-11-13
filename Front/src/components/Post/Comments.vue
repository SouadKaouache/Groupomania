<script>
    export default{
        name: "Comments",
        props:{
           email:{
            type:String,
            required: true
           },
           content:{
            type: String,
            required: true
           } 
        }
    }
</script>
<template>
 <div class="d-flex border border-secondary rounded-pill"><img class="rounded-circle shadow-4 me-3 border border-danger" src="https://www.fillmurray.com/50/50" alt="Avatar" style="width: 50px; height: 50px;" ><p class="name">{{email}}</p></div>
 <div class="row g-2">
  <div class="col-md">
    <div class="form-floating mt-3 border border-secondary">
        <input type="text" readonly class="form-control-plaintext" id="floatingPlaintextInput" value="J'adore cette photo 💓">
    <p>{{content}}</p>
    </div>
  </div>  
  <hr class = "mt-3"/>
</div>
</template>
<style scoped>
    input{
        padding-top: 0% !important;
        padding-bottom: 0% !important;
    }
    body{
        font-family: lato-black, sans-serif;
        background: -webkit-linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%) !important;
        background: linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%)!important}
    .d-flex{
        background-color: #ffd7d7;
        width: fit-content;
        height: 52px;
        padding-right: 20px;
    }
    .name{
        margin-top: 12px;
    }
</style>