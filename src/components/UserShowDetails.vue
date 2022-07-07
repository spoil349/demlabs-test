<template>
  <v-card class="d-flex flex-column black-lighter px-6 py-11 rounded-0 h-100p">
    <v-card-text class="pa-0 mb-4 white-main--text">
      <p class="text-medium ma-0">{{ user.name }}</p>
    </v-card-text>
    <v-divider class="mb-4"></v-divider>
    <v-card-text class="pa-0 mb-4 white-main--text">
      <p class="body-2 gray-main--text mb-2">Email</p>
      <p class="body-1 ma-0">{{ user.email }}</p>
    </v-card-text>
    <v-divider class="mb-4"></v-divider>
    <v-card-text class="pa-0 white-main--text">
      <p class="body-2 gray-main--text mb-2">
        Licenses ({{ user.licenses.length }})
      </p>
      <div
        v-for="(license, index) in user.licenses"
        :key="license.id"
        class="d-flex align-center justify-space-between mb-4"
      >
        <p class="ma-0 body-1">
          License {{ numToWord(index + 1) }} - {{ license.name }}
        </p>
      </div>
    </v-card-text>
    <v-divider class="mb-4"></v-divider>
    <v-card-text class="pa-0 ma-0 white-main--text">
      <p class="body-2 gray-main--text mb-2">Last seen</p>
      <p v-for="visit in user.last_seen" :key="visit.id" class="mb-4 body-1">
        {{ visit.gadget }} - {{ visit.date }}
      </p>
    </v-card-text>
    <v-divider class="mb-4"></v-divider>
    <v-btn
      outlined
      width="100%"
      class="black-main white-main--text text-none subtitle-2 font-weight-medium"
      color="black-main"
      @click="editModeOnHandler"
    >
      <v-icon left class="me-3"> mdi-pencil </v-icon>
      Edit Profile
    </v-btn>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserShowDetails",
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteLicense(item, licenseId) {
      const newItem = {
        ...item,
        licenses: item.licenses.filter((license) => license.id !== licenseId),
      };
      this.editUser({ id: item.id, user: newItem });
    },
    editModeOnHandler() {
      this.$emit("editModeOn");
    },
  },
};
</script>

<style lang="scss">
.dialog-content {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
