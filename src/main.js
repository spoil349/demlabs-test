import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";

import ApiPlugin from "./plugins/api";

Vue.use(ApiPlugin);
Vue.mixin({
  methods: {
    numToWord(value) {
      const numToWordFunc = require("num-words");
      return numToWordFunc(value);
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
