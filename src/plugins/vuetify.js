import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import customColor from "@/utils/customColors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        "black-main": customColor.black.main,
        "black-lighter": customColor.black.lighter,
        "white-main": customColor.white.main,
        "red-main": customColor.red.main,
        "yellow-main": customColor.yellow.main,
        "green-main": customColor.green.main,
      },
    },
  },
});
