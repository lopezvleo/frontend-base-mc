<template>
  <div class="wrapper">
    <div class="input-data">
      <textarea v-model="value" rows="5" />
      <label>Label</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../css/variables.scss";

.wrapper {
  width: 100%;
  background: #fff;
  padding: 30px;
}

.wrapper .input-data {
  height: 100%;
  width: 100%;
  position: relative;
}

.wrapper .input-data textarea {
  height: 100%;
  width: 100%;
  outline: 2px solid $blue-primary;
  font-size: 16px;
  padding: 15 15px 0 5px;
  border-radius: 4px;
}

.wrapper .input-data textarea:focus-visible,
.wrapper .input-data textarea:focus {
  outline: 2px solid $blue-secondary !important;
}

.wrapper .input-data textarea:focus ~ label {
  color: $blue-secondary;
}

.wrapper .input-data textarea:focus ~ label,
.wrapper .input-data textarea[value=""] ~ label {
  transform: translateY(-25px);
  transition: all 0.3s ease;
  padding: 3px;
}

.wrapper .input-data label {
  transform: translateY(0px);
  transition: all 0.3s ease;
  position: absolute;
  top: 10px;
  left: 15px;
  color: grey;
  background: #fff;
}
</style>