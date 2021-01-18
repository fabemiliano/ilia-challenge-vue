import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faArrowLeft,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Loading from "@/components/Loading";
import VueI18n from "vue-i18n";
import messages from "@/translation.js";

Vue.use(VueI18n);

library.add(faSearch, faArrowLeft, faTimes);

Vue.component("Loading", Loading);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
