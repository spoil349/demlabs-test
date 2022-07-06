import api from "@/api";

export default {
  state: { servers: [], searchingValue: "", choosenServerId: null },
  getters: {
    allServers(state) {
      return state.servers;
    },
    filteredServers(state) {
      return state.servers.filter((server) =>
        server.name.includes(state.searchingValue)
      );
    },
    choosenServerId(state) {
      return state.choosenServerId;
    },
  },
  mutations: {
    updateServers(state, servers) {
      state.servers = servers;
    },
    updateSearchingValue(state, value) {
      state.searchingValue = value;
    },
    updateChoosenServerId(state, id) {
      state.choosenServerId = id;
    },
  },
  actions: {
    async fetchAllServers({ commit }) {
      const res = await api.servers.getServers();
      commit("updateServers", res.data);
    },
    setSearchingValue({ commit }, value) {
      commit("updateSearchingValue", value);
    },
    setChoosenServerId({ commit }, id) {
      commit("updateChoosenServerId", id);
    },
  },
};
