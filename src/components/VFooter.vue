<template>
  <!-- Footer -->
  <div data-app>
    <footer class="footer bg-gray mt-2 p-2">
      <div class="container">
        <div class="row">
          <div class="col-12 col-xs-12 col-sm-12 text-center my-auto col-md-3">
            <a
              class="mya my-auto footer-text"
              href="https://www.cultura.gob.sv"
              target="_blank"
            >
              Ministerio de cultura
            </a>
          </div>
          <div
            class="
              col-12 col-xs-12 col-sm-12
              text-center
              my-auto
              col-md-6
              text-center
            "
          >
            <div class="mya">
              <img
                class="logo-footer color-logo"
                src="/logos/Logo_GOES_horizontal_L.svg"
              />
            </div>
          </div>
          <div class="col-12 col-xs-12 col-sm-12 text-center my-auto col-md-3">
            <div class="mya footer-text" @click="dialog = true">
              Políticas de privacidad
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- Footer -->
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
