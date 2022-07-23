<script setup>
import useAuthStore from "../stores/authStore.js";

const { isAuthenticated } = useAuthStore();
</script>

<template>
  <h1>Hola</h1>
  <h1>{{ isAuthenticated }}</h1>
</template>