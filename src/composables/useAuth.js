import useAuthStore from "../stores/authStore";

const useAuth = () => {
  const authStore = useAuthStore();
  const { login, logout, ifAuthenticated, isAuthenticated, user } = authStore;

  return {
    isAuthenticated,
    user,

    login,
    logout,
    ifAuthenticated,
  };
};

export default useAuth;
