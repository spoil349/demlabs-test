<template>
  <v-card
    class="d-flex flex-column black-lighter px-6 pb-11 pt-2 rounded-0 h-100p"
  >
    <div class="mb-1">
      <v-btn @click="editModeOffHandler" x-small icon color="white-main ma-0">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>
    <v-card-text class="pa-0 mb-8 white-main--text">
      <!-- <p class="text-medium ma-0">{{ user.name }}</p> -->
      <v-text-field
        hide-details="true"
        class="text-medium ma-0 pa-0"
        color="white-main"
        dark
        v-model="newName"
      ></v-text-field>
    </v-card-text>
    <v-card-text class="pa-0 mb-5 white-main--text">
      <p class="body-2 gray-main--text mb-2">Email</p>
      <!-- <p class="body-1 ma-0">{{ user.email }}</p> -->
      <v-text-field
        hide-details="true"
        class="body-1 ma-0 pa-0"
        color="white-main"
        dark
        v-model="newEmail"
      ></v-text-field>
    </v-card-text>
    <v-card-text class="pa-0 white-main--text">
      <p class="body-2 gray-main--text mb-2">Licenses</p>
      <div
        v-for="(license, index) in newLicenses"
        :key="license.id"
        class="d-flex align-center justify-space-between mb-4"
      >
        <p class="ma-0 body-1">
          License {{ numToWord(index + 1) }} - {{ license.name }}
        </p>
        <v-btn
          x-small
          @click="deleteLicenseHandler(license.id)"
          icon
          color="white-main ma-0"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-btn
      v-if="isEdited"
      outlined
      width="100%"
      class="black-main mt-14 white-main--text text-none subtitle-2 font-weight-medium"
      color="black-main"
      @click="saveDataHandler"
    >
      <v-icon left class="me-3"> mdi-content-save-check-outline </v-icon>
      Save
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "UserShowDetails",
  props: {
    currentName: {
      type: String,
      default: "",
    },
    currentEmail: {
      type: String,
      default: "",
    },
    currentLicenses: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      newName: "",
      newEmail: "",
      newLicenses: [],
      isLicenseDeleted: false,
    };
  },
  computed: {
    isEdited() {
      return (
        this.currentName !== this.newName ||
        this.currentEmail !== this.newEmail ||
        this.isLicenseDeleted
      );
    },
  },
  created() {
    this.newName = this.currentName;
    this.newEmail = this.currentEmail;
    this.newLicenses = this.currentLicenses;
  },
  methods: {
    deleteLicenseHandler(deletedLicenseId) {
      this.isLicenseDeleted = true;
      this.newLicenses = this.newLicenses.filter(
        (license) => license.id !== deletedLicenseId
      );
    },
    saveDataHandler() {
      this.$emit("updateUser", {
        name: this.newName,
        email: this.newEmail,
        licenses: this.newLicenses,
      });
      this.editModeOffHandler();
    },
    editModeOffHandler() {
      this.$emit("editModeOff");
    },
  },
};
</script>
