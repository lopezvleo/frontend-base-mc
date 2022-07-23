import { createApp } from "vue";
import { createPinia } from "pinia";

import "./css/index.scss";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App).use(createPinia()).use(router);

app.mount("#app");
