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

Vue.use(vuetify, {
  icons: {
    iconfont: "md", // default - only for display purposes
  },
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCe2q1gFSd75jKUnTDPq0nZWaMlEu6vL30",
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
