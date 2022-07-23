import { defineStore } from "pinia";

const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: {
      name: "Leonel",
      email: "leonellopez647@gmail.com",
    },
    loginsv: false,
    localLogin: true,
  }),
  actions: {
    login() {},

    logout() {},

    ifAuthenticated(to, from, next) {
      if (localStorage.getItem("token")) {
        next();
        return;
      }

      router.push({
        name: "login",
        params: {
          returnTo: to.path,
          query: to.query,
        },
      });
    },
  },
});

export default useAuthStore;
