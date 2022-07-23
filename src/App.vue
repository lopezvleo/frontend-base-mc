<script setup>
import VNavbar from "./components/VNavbar.vue";
import VFooter from "./components/VFooter.vue";
</script>

<template>
  <v-navbar />
  <main>
    <router-view></router-view>
  </main>
  <v-footer />
</template>

