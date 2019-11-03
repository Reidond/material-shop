import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { router } from "./routes";
import { store, modules } from "./store";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import VueRouter from "vue-router";
import VuexCompositionApi from "vuex-composition-api";
import lineClamp from "vue-line-clamp";

Vue.use(VueRouter);
Vue.use(VuexCompositionApi);
Vue.use(lineClamp);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  modules,
  render: h => h(App)
}).$mount("#app");
