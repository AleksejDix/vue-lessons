import Vue from "vue";
import router from "./router.js";
import App from "@/App";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
