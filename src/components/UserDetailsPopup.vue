<template>
  <v-dialog
    v-model="value"
    @click:outside="closePopupHandler"
    transition="scroll-x-reverse-transition"
    max-width="394"
    :content-class="'dialog-right-top-position h-100p'"
  >
    <template v-slot:default>
      <UserEditDetails
        v-if="editMode"
        :currentName="user.name"
        :currentLicenses="user.licenses"
        :currentEmail="user.email"
        @editModeOff="editMode = false"
        @updateUser="updateUserHandler"
      />
      <UserShowDetails v-else @editModeOn="editMode = true" :user="user" />
    </template>
  </v-dialog>
</template>

<script>
import UserShowDetails from "./UserShowDetails.vue";
import UserEditDetails from "./UserEditDetails.vue";
import { mapActions } from "vuex";

export default {
  name: "UserDetailsPopup",
  components: { UserShowDetails, UserEditDetails },
  data() {
    return {
      editMode: false,
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["editUser"]),
    closePopupHandler() {
      this.editMode = false;
      this.$emit("input", false);
    },
    deleteLicense(item, licenseId) {
      const newItem = {
        ...item,
        licenses: item.licenses.filter((license) => license.id !== licenseId),
      };
      this.editUser({ id: item.id, user: newItem });
    },
    updateUserHandler(changedData) {
      this.closePopupHandler();
      const newUser = { ...this.user, ...changedData };
      this.editUser({ id: this.user.id, user: newUser });
    },
  },
};
</script>
