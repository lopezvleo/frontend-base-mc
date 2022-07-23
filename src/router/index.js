import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

import useAuth from "../composables/useAuth";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: useAuth.ifAuthenticated,
  },
  {
    path: "/register",
    name: "register",
    component: HomeView,
    beforeEnter: useAuth.ifAuthenticated,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
