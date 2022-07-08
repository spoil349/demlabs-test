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
        "gray-main": customColor.gray.main,
        "white-main": customColor.white.main,
        "red-main": customColor.red.main,
        "red-darker": customColor.red.darker,
        "yellow-main": customColor.yellow.main,
        "yellow-darker": customColor.yellow.darker,
        "green-main": customColor.green.main,
        "green-darker": customColor.green.darker,
        "blue-main": customColor.blue.main,
      },
      dark: {
        white: customColor.white.main,
      },
    },
  },
});
