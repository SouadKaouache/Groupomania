import FeedPage from "../pages/FeedPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignupPage from "../pages/SignupPage.vue";
import PasswordForget from "../components/PasswordForget.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/feed", name: "FeedPage", component: FeedPage },
  { path: "/signup", name: "SignupPage", component: SignupPage },
  { path: "/passwordForget", component: PasswordForget },
  { path: "/", redirect: "/feed" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (isAuthentificationRequired(to)) {
    return router.push("/login");
  }
});

function isAuthentificationRequired(to) {
  if (!isPageUnauthorized(to)) return false;
  if (!isTokenRetrieve()) return true;
  return false;
}

function isPageUnauthorized(to) {
  const publicPages = ["/login", "/signup"];
  return !publicPages.includes(to.path);
}

function isTokenRetrieve() {
  return localStorage.getItem("token") != null;
}

export { router };
