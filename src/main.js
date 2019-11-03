import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { store, modules } from "./store";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import VuexCompositionApi from "vuex-composition-api";

Vue.use(VuexCompositionApi);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  modules,
  render: h => h(App)
}).$mount("#app");
