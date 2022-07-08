import api from "@/api";
import SERVER_STATUSES from "@/constants/SERVER_STATUSES";
import SERVER_STATUSES_COLORS from "@/constants/SERVER_STATUSES_COLORS";

export default {
  state: {
    servers: [],
    serversSearchingValue: "",
    choosenServerId: null,
    choosenServer: null,
  },
  getters: {
    allServers(state) {
      return state.servers;
    },
    filteredServers(state) {
      return state.servers.filter((server) =>
        server.name.toLowerCase().includes(state.serversSearchingValue)
      );
    },
    choosenServerId(state) {
      return state.choosenServerId;
    },
    choosenServer(state) {
      return state.servers.find(
        (server) => server.id === state.choosenServerId
      );
    },
    onlineServers(state) {
      return state.servers.filter(
        (server) => server.status === SERVER_STATUSES.ACTIVE
      );
    },
    getServersSearchingValue(state) {
      return state.serversSearchingValue;
    },
  },
  mutations: {
    updateServers(state, servers) {
      state.servers = servers.map((server) => {
        if (server.status === SERVER_STATUSES.ACTIVE) {
          return {
            ...server,
            server_status_color: SERVER_STATUSES_COLORS.GREEN,
          };
        } else if (server.status === SERVER_STATUSES.DISCONNECTED) {
          return {
            ...server,
            server_status_color: SERVER_STATUSES_COLORS.YELLOW,
          };
        } else {
          return {
            ...server,
            server_status_color: SERVER_STATUSES_COLORS.RED,
          };
        }
      });
    },
    updateServersSearchingValue(state, value) {
      state.serversSearchingValue = value;
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
    setServersSearchingValue({ commit }, value) {
      commit("updateServersSearchingValue", value.toLowerCase());
    },
    setChoosenServerId({ commit }, id) {
      commit("updateChoosenServerId", id);
    },
  },
};
