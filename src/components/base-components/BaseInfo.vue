<template>
  <div class="error">
    <span class="material-icons-outlined" v-if="showIcon"> {{ icon }} </span>
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: "info",
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../css/variables.scss";
.error {
  display: flex;
  direction: row;
  color: $grey-primary-light;
  gap: 0.5rem;
  padding: 5px;
}
</style>