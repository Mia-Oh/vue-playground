import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import mixin from "./mixins/mixin";
import { i18n } from "@/lang/lang.js";

Vue.mixin(mixin);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// // 전역 사용자 정의 디렉티브 v-focus 등록
// Vue.directive("focus", {
//   // 바인딩 된 엘리먼트가 DOM에 삽입되었을 때...
//   inserted: function (el) {
//     // 엘리먼트에 포커스를 줍니다
//     el.focus();
//   },
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
