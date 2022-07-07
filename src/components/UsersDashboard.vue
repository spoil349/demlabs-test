<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="flex-grow-1 px-6 pt-6 pb-4">
      <div class="mb-6">
        <CardHeader
          :firstText="{
            value: choosenServer.name,
            classes: 'white-main--text text-medium ma-0',
          }"
          :secondText="{
            value: `(${choosenServer.users_id.length} connections)`,
            classes: 'gray-main--text',
          }"
          :thirdText="{
            value: choosenServer.status_text,
            classes: `${choosenServer.server_status_color}-main--text`,
          }"
        >
          <template v-slot:prepend>
            <div
              :class="[
                'header-badge rounded-circle align-self-center me-2',
                `${choosenServer.server_status_color}-main`,
              ]"
            ></div>
          </template>
        </CardHeader>
      </div>
      <div style="width: 520px">
        <SearchFilter
          v-model="usersSearchingValue"
          :placeholder="'Search user'"
        />
      </div>
    </div>
    <UsersTable
      :users="filteredChoosenServerUsers"
      @openPopup="openPopupHandler"
    />
    <UserDetailsPopup
      v-model="showPopup"
      :user="getEditableUser"
      @input="closePopupHandler"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchFilter from "./SearchFilter.vue";
import UsersTable from "./UsersTable.vue";
import CardHeader from "./CardHeader.vue";
import UserDetailsPopup from "./UserDetailsPopup.vue";

export default {
  name: "UsersDashboard",
  components: { SearchFilter, UsersTable, CardHeader, UserDetailsPopup },
  data() {
    return {
      showPopup: false,
    };
  },
  computed: {
    ...mapGetters([
      "filteredChoosenServerUsers",
      "choosenServer",
      "usersLoadingStatus",
      "getUsersSearchingValue",
      "getEditableUser",
    ]),
    usersSearchingValue: {
      get() {
        return this.getUsersSearchingValue;
      },
      set(value) {
        this.setUsersSearchingValue(value);
      },
    },
  },
  methods: {
    ...mapActions(["setUsersSearchingValue", "fetchChoosenServerUsers"]),
    openPopupHandler() {
      this.showPopup = true;
    },
    closePopupHandler() {
      this.showPopup = false;
    },
  },
  mounted() {
    this.fetchChoosenServerUsers(this.choosenServer.users_id);
  },
  watch: {
    choosenServer() {
      this.fetchChoosenServerUsers(this.choosenServer.users_id);
    },
  },
};
</script>
