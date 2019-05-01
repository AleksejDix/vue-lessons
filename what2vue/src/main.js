import Vue from "vue";
import router from "./router.js";
import App from "@/App";
import store from "./store.js";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
