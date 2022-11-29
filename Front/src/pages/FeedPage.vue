<script>
    import Post from '../components/Post/Post.vue';
    import Form from '../components/Form.vue';
    import Navbar from '../components/Navbar.vue';
    export default{
        name:"FeedPage",
        components: {Navbar, Form, Post},
        methods:{
          accessDenied() {
      const token = localStorage.getItem("token")
      localStorage.setItem("token", token)
      if (token == null) {
        this.$router.push("/login")
        }}},
      mounted(){
        this.accessDenied()
        const url = "http://localhost:3000/api/post/feed"
        const paramsFetch = {
      headers:   {Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Accept": "application/json",},
      method: "GET",
      }
        fetch(url, paramsFetch)
        .then((res) => res.json())
        .then((res) => {
          console.log("res:", res)
        const email = localStorage.getItem("email")
        const userId = localStorage.getItem("userId")
        const posts = res
        this.userId = userId
          this.posts = posts
          this.currentUser = email
          console.log("userId :", this.userId)
          console.log("this.posts :", this.posts)
         console.log("email :", email)
         console.log("currentUser :", this.currentUser)
        })
        .catch((err) => console.log("error :", err))
      },
      data(){
        return{
          posts: [],
          currentUser: null
        }
      }
      }
//         methods: {
//     accessDenied() {
//       const token = localStorage.getItem("token")
//       localStorage.setItem("token", token)
//       if (!token) {
//         this.$router.push("/login")
//       }
//     }
//   },
//   mounted() {
//     this.accessDenied()
//     const url = "http://localhost:3000/api/post/feed"
//     const paramsFetch = {
//      Headers: {Authorization: `Bearer ${localStorage.getItem("token")}`,
//   "Accept": "application/json"},
//       method: 'GET'
//     }
//     fetch(url, paramsFetch)
//       .then((res) => {
//         console.log(paramsFetch)
//         console.log(res)
//         if (res.status === 200) {
//           return res.json()
//         } else {
//           throw new Error("Le fetch a échoué.")
//         }
//       })
//       .then((res) => {
//         console.log("res:", res)
//         const posts = res
//         this.posts = posts
//       })
//       .catch((err) => console.log("err:", err))
//   },
//   data() {
//     return {
//       posts: [],
//     }
//   }
// }
</script>
<template>
<div id="fond">
      <Navbar></Navbar>
      <h2 class="text-center">Bienvenue sur votre fil d'actualité {{currentUser}}.</h2>
  <Form></Form>
<div v-for="post in posts">
  <Post :content="post.content" :imageUrl="post.imageUrl" :_id="post._id"  :currentUser="currentUser"
         :userId="post.userId"></Post>
</div>
</div>
</template>
<style scoped>
    html,
body {
  font-family: lato-black, sans-serif !important;
}
#fond{
  height: 100%;
    background-image: linear-gradient(90deg, rgba(253,45,1,0.5) 0%, rgba(255,215,215,0.5) 35%, rgba(78,81,102,0.5) 100%),
  url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp') !important;
  background-attachment: fixed;
  background-size: cover;
}

h1{
        font-family: lato-black, sans-serif;        
        font-weight: bold;
        display: flex;
        justify-content: center;
        font-size: 3rem;
        margin-bottom: 3%;
        padding-top: 3vh;
    }
        </style>