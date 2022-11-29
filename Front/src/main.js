import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import { router } from "./routes/router";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = { Authorization: "Bearer " + token };
    }
    return config;
  },
  (error) => Promise.reject(error)
);
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.mount("#app");
