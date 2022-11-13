<script>
  import LoginPage from './pages/LoginPage.vue';
  import Navbar from './components/Navbar.vue';
  import SignupPage from './pages/SignupPage.vue'
  import FeedPage from './pages/FeedPage.vue';
  import PasswordForget from "./components/PasswordForget.vue"
 
  export default{
    name:'App',
    components:{
    LoginPage,
    Navbar,
    SignupPage,
    FeedPage,
    PasswordForget,
    }
  }
</script>

<template>
  
  <!-- <Navbar></Navbar> -->
 <router-view></router-view>

</template>

<style>
  body{
        font-family: lato-black, sans-serif;
        background: -webkit-linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%) !important;
        background: linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%)!important}


</style>

