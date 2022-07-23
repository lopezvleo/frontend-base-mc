<script setup>
import { ref } from "vue";
import useAuth from "../composables/useAuth";

const { isAuthenticated, user, login, logout } = useAuth();
const sidebar = ref("animate__slideOutLeft");

const sidebarClick = () => {
  sidebar.value =
    sidebar.value === "animate__slideOutLeft"
      ? "animate__slideInLeft"
      : "animate__slideOutLeft";
};

console.log(isAuthenticated);
</script>

<template>
  <div>
    <div class="sidebar animate__faster animate__animated" :class="sidebar">
      <ul class="nav-links pt-0">
        <li class="text-center close-btn" @click="sidebarClick">
          <i class="material-icons md-36 mx-auto mt-0 pt-0">menu</i>
        </li>
        <template v-if="isAuthenticated">
          <!-- Home -->
          <li class="text-center pb-1">
            <router-link to="/home" class="text-center">
              <i class="material-icons md-18 mx-auto">home</i>
            </router-link>
            <router-link to="/home">
              <p class="link mx-auto">Inicio</p>
            </router-link>
          </li>
          <!-- Home -->

          <!-- Settings -->
          <!-- Administrative routes -->
          <li>
            <div class="icon-link pb-1">
              <a href="#" class="arrow text-center">
                <i class="material-icons md-18 mx-auto">settings</i>
              </a>
              <p class="link">Administración</p>
            </div>
            <ul class="sub-menu">
              <li>
                <router-link to="/departments">Departamentos</router-link>
              </li>
              <li>
                <router-link to="/municipalities">Municipios</router-link>
              </li>
              <li><router-link to="/users">Usuarios</router-link></li>
            </ul>
          </li>
          <!-- End Administrative routes -->
          <!-- Settings -->

          <!-- Logout -->
          <li class="text-center pb-1">
            <router-link
              to="/register"
              class="text-center"
              onclick="event.preventDefault();document.getElementById('logout-form').submit();"
            >
              <i class="material-icons md-18 mx-auto">logout</i>
            </router-link>
            <router-link
              to="/logout"
              onclick="event.preventDefault();document.getElementById('logout-form').submit();"
            >
              <p class="link mx-auto">Cerrar sesión</p>
            </router-link>
          </li>
          <!-- Logout -->
        </template>
        <template v-else>
          <!-- Login/Logout -->
          <li class="text-center pb-1">
            <router-link to="/login" class="text-center">
              <i class="material-icons md-18 mx-auto">login</i>
            </router-link>
            <router-link to="/login">
              <p class="link mx-auto">Iniciar sesión</p>
            </router-link>
          </li>

          <li class="text-center pb-1">
            <router-link to="/register" class="text-center">
              <i class="material-icons md-18 mx-auto">person_add_alt_1</i>
            </router-link>
            <router-link to="/register">
              <p class="link mx-auto">Registrarse</p>
            </router-link>
          </li>
          <!-- Login/Logout -->
        </template>
      </ul>
    </div>
    <!-- Sidebar -->

    <!-- Home Section -->
    <div class="home-section">
      <div class="home-content pt-5 pb-5">
        <div class="close-btn">
          <i
            class="material-icons md-36 mx-auto mt-0 pt-0 pointer"
            @click="sidebarClick"
            >menu</i
          >
        </div>

        <!-- Institution Name -->
        <div class="col-10 col-sm-9 col-md-9">
          <router-link class="navbar-brand" to="/">
            <h3 class="text-uppercase fw-bold color-secondary mb-0">
              Solicitudes MC
            </h3>
          </router-link>
        </div>
        <!-- Institution Name -->

        <!-- Logo Brand -->
        <!-- <div class="col-10 col-sm-9 col-md-9">
          <router-link class="navbar-brand" to="/">
            <img class="img-fluid" src="/logos/Logo_GOES_horizontal_D.svg" />
          </router-link>
        </div> -->
        <!-- Logo Brand -->

        <!-- Logout/UserName -->
        <div class="d-none d-md-block d-lg-block d-xl-block info">
          <div class="person mr-0 pr-0" v-show="isAuthenticated">
            <h6>Leonel</h6>
            <span class="color-primary ml-1">
              <i class="material-icons">person</i>
            </span>
          </div>
          <div class="logout" v-show="isAuthenticated">
            <router-link to="" @click="logout">Cerrar sesión</router-link>
          </div>
        </div>
        <!-- Logout/UserName -->
      </div>
    </div>
    <!-- Home Section -->
  </div>
</template>