import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import * as VueGoogleMaps from "vue2-google-maps";
import css from "./styles/style";

Vue.use(vuetify, {
  icons: {
    iconfont: "md", // default - only for display purposes
  },
});

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  css,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
