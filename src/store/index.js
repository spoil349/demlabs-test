import Vue from "vue";
import Vuex from "vuex";
import servers from "./modules/servers";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    servers,
    users,
  },
});
