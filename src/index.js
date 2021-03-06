import Vue from "vue";
import App from "./components/App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  el: "#app",
  render: h => h(App)
});
