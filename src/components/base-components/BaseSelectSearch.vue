<template>
  <div class="wrapper">
    <div class="input-data">
      <input
        type="text"
        v-model.trim="validation.$model"
        @click="dialog = true"
        @keyup="search"
      />
      <label :class="validInput">{{ label }}</label>
      <div class="options" v-if="itemsFiltered.length > 0" v-show="dialog">
        <option
          v-for="object in itemsFiltered"
          :key="object.id"
          @click="selectItem(object)"
        >
          {{ object[item] }}
        </option>
      </div>
      <div class="options" v-else>
        <p>Sin información por mostrar.</p>
      </div>
      <i class="material-icons" @click="dialog = dialog ? false : true">
        expand_more
      </i>
    </div>
    <base-validation :validation="validation" />
  </div>
</template>

<script>
import BaseError from "./BaseError.vue";

import BaseValidation from "./BaseValidation.vue";

export default {
  components: {
    BaseError,
    BaseValidation,
  },

  data() {
    return {
      value: "",
      dialog: false,
      itemsFiltered: this.items,
      validInput: "",
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    item: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    validation: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  watch: {
    validation(val) {
      this.validInput = val.$invalid ? "error" : "";
    },
  },
  created() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.dialog = false;
      }
    });
    window.addEventListener("keyup", (e) => {
      if (e.key == "Escape") {
        this.dialog = false;
      }
    });
  },
  methods: {
    selectItem(selected) {
      this.validation.$model = selected[this.item];
      this.dialog = false;
    },
    search() {
      this.itemsFiltered = this.items.filter((element) => {
        return element[this.item]
          .toLowerCase()
          .includes(this.validation.$model.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/variables.scss";

.wrapper {
  width: 100%;
  background: #fff;
  padding: 30px;
}

.wrapper .input-data {
  height: 40px;
  width: 100%;
  position: relative;
}

.wrapper .input-data input {
  height: 100%;
  width: 100%;
  outline: 2px solid $blue-primary;
  font-size: 16px;
  padding: 15 15px 0 5px;
  border-radius: 4px;
}

.wrapper .input-data input:focus-visible,
.wrapper .input-data input:focus {
  outline: 2px solid $blue-secondary !important;
}

.wrapper .input-data input:focus ~ label {
  color: $blue-secondary;
}

.wrapper .input-data label.error,
.wrapper .input-data input:valid ~ label,
.wrapper .input-data input:focus-visible ~ label,
.wrapper .input-data input:focus ~ label {
  transform: translateY(-15px);
  transition: all 0.3s ease;
  padding: 3px;
}

.wrapper .input-data label {
  transform: translateY(0px);
  transition: all 0.3s ease;
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: grey;
  background: #fff;
}

.options {
  margin-top: 1px;
  width: 100%;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

// When selecting an option
.options option:hover {
  width: 100%;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
  z-index: 99999;
}

// Icon
i {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: grey;
  cursor: pointer;
}

option {
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 5px;
}

p {
  padding: 15px;
  text-align: center;
}

input {
  padding-left: 15px;
}

.errors {
  padding-top: 10px;
}
</style>