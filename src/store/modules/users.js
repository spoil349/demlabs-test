import api from "@/api";

export default {
  state: {
    choosenServerUsers: [],
    usersSearchingValue: "",
    usersLoading: false,
    expandedUserId: null,
  },
  getters: {
    allChoosenServerUsers(state) {
      return state.choosenServerUsers;
    },
    filteredChoosenServerUsers(state) {
      return state.choosenServerUsers.filter((user) =>
        user.name.toLowerCase().includes(state.usersSearchingValue)
      );
    },
    usersLoadingStatus(state) {
      return state.usersLoading;
    },
    getUsersSearchingValue(state) {
      return state.usersSearchingValue;
    },
    getUsersSearchingValue(state) {
      return state.usersSearchingValue;
    },
    getExpandedUserId(state) {
      return state.expandedUserId;
    },
  },
  mutations: {
    updateChoosenServerUsers(state, choosenServerUsers) {
      state.choosenServerUsers = choosenServerUsers;
    },
    updateUsersSearchingValue(state, value) {
      state.usersSearchingValue = value;
    },
    updateUsersLoading(state, value) {
      state.usersLoading = value;
    },
    updateExpandedUserId(state, value) {
      state.expandedUserId = value;
    },
  },
  actions: {
    async fetchChoosenServerUsers({ commit }, choosenServerUsersIds) {
      commit("updateUsersLoading", true);
      const searchingString = "id=" + choosenServerUsersIds.join("&id=");
      const res = await api.users.getUsers(searchingString);
      commit("updateChoosenServerUsers", res.data);
      commit("updateUsersLoading", false);
    },
    setUsersSearchingValue({ commit }, value) {
      commit("updateUsersSearchingValue", value.toLowerCase());
    },
    setExpandedUserId({ commit }, id) {
      commit("updateExpandedUserId", id);
    },
  },
};
