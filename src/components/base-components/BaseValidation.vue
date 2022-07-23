<template>
  <base-info
    v-if="!validation.required"
    message="(Campo opcional)"
    :showIcon="false"
  />
  <div class="errors" v-if="validation.$dirty">
    <BaseError
      v-if="validation.required && validation.$invalid"
      message="Campo requerido."
    />
    <BaseError
      v-if="
        validation.minLength &&
        validation.$invalid &&
        validation.minLength.$params.min > 0
      "
      :message="`El campo debe tener al menos ${validation.minLength.$params.min} caracteres.`"
    />
    <BaseError
      v-if="
        validation.maxLength &&
        validation.$invalid &&
        validation.maxLength.$params.min > 0
      "
      :message="`El campo no puede tener más de ${validation.maxLength.$params.min} caracteres.`"
    />
  </div>
</template>

<script>
import BaseError from "./BaseError.vue";
import BaseInfo from "./BaseInfo.vue";

export default {
  components: {
    BaseError,
    BaseInfo,
  },
  props: {
    validation: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>