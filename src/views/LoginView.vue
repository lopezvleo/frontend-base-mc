<script setup>
import BaseInput from "../components/base-components/BaseInput.vue";
import BaseTextArea from "../components/base-components/BaseTextArea.vue";
import BaseSelectSearch from "../components/base-components/BaseSelectSearch.vue";
import { reactive, ref } from "@vue/reactivity";
import { required, minLength, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const items = ref([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2 avsd" },
  { id: 3, name: "Item 3" },
]);

const state = reactive({
  selectedItem: "",
});

const rules = {
  selectedItem: {
    required,
    minLength: minLength(0),
  },
};

const $v = useVuelidate(rules, state);
</script>

<template>
  <div class="container mt-3">
    <div class="card-body">
      <div class="row mb-0">
        <div class="col-md-12 text-center pt-3 pb-3">
          <img src="/logos/Escudo_D.svg" class="logo-size" alt="Escudo_D" />
        </div>
      </div>
      <h3 class="color-primary text-center">Ingresa tus datos para iniciar</h3>
      <h6 class="color-primary text-center mb-3">
        o
        <a href="/register" class="no-decoration">regístrate aquí</a>
        si aún no tienes cuenta.
      </h6>

      <base-select-search
        label="Items"
        :items="items"
        item="name"
        v-model.trim="$v.selectedItem.$model"
        :validation="$v.selectedItem"
      />
      <!-- <base-input />
      <base-text-area /> -->
    </div>
  </div>
</template>

<style scoped>
</style>