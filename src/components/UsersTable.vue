<template>
  <div
    v-if="usersLoadingStatus"
    class="pa-6 d-flex justify-center align-center"
  >
    <v-progress-circular indeterminate color="white-main"></v-progress-circular>
  </div>
  <v-data-table
    v-else
    fixed-header
    disable-sort
    :headers="headers"
    :items="users"
    :hide-default-footer="true"
    class="rounded-0 black-lighter white-main--text custom-scroll"
  >
    <template v-slot:item="{ item }">
      <tr
        class="black-main-hover rounded-0"
        @click="expandUserHandler(item.id)"
      >
        <td class="rounded-0 gray--border">{{ item.name }}</td>

        <td class="rounded-0 gray--border">{{ item.email }}</td>

        <td v-if="item.licenses.length > 1" class="rounded-0 gray--border">
          <div v-if="getExpandedUserId === item.id">
            <p
              v-for="(license, index) in item.licenses"
              :key="license.id"
              class="ma-0"
            >
              License {{ numWords(index + 1) }} -
              {{ license.name }}
            </p>
          </div>
          <div v-else>
            <p class="ma-0">License one - {{ item.licenses[0].name }}</p>
            <p class="ma-0 blue-main--text">
              {{ item.licenses.length - 1 }} more
            </p>
          </div>
        </td>
        <td v-else class="rounded-0 gray--border">
          <p class="ma-0">License One - {{ item.licenses[0].name }}</p>
        </td>

        <td v-if="item.last_seen.length > 1" class="rounded-0 gray--border">
          <div v-if="getExpandedUserId === item.id">
            <p v-for="visit in item.last_seen" :key="visit.id" class="ma-0">
              {{ visit.gadget }} - {{ visit.date }}
            </p>
          </div>
          <div v-else>
            <p class="ma-0">
              {{ item.last_seen[0].gadget }} - {{ item.last_seen[0].date }}
            </p>
            <p class="ma-0 blue-main--text">
              {{ item.last_seen.length - 1 }} more
            </p>
          </div>
        </td>
        <td v-else class="rounded-0 gray--border">
          <p class="ma-0">
            {{ item.last_seen[0].gadget }} - {{ item.last_seen[0].date }}
          </p>
        </td>
      </tr>
    </template>
    <template v-slot:no-data>
      <p class="pt-5 white-main--text">Sorry, nothing was found</p>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UsersTable",
  props: {
    users: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
          class:
            "black-lighter gray-main--text body-2 font-weight-regular elevation-0",
        },
        {
          text: "Email",
          value: "email",
          class:
            "black-lighter gray-main--text body-2 font-weight-regular elevation-0",
        },
        {
          text: "Licenses",
          value: "licenses",
          class:
            "black-lighter gray-main--text body-2 font-weight-regular elevation-0",
        },
        {
          text: "Last seen",
          value: "last_seen",
          class:
            "black-lighter gray-main--text body-2 font-weight-regular elevation-0",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["usersLoadingStatus", "getExpandedUserId"]),
  },
  methods: {
    ...mapActions(["setExpandedUserId"]),
    numWords(val) {
      const numToWord = require("num-words");
      return numToWord(val);
    },
    expandUserHandler(id) {
      if (this.getExpandedUserId !== id) {
        this.setExpandedUserId(id);
      } else {
        this.setExpandedUserId(null);
      }
    },
  },
};
</script>

<style></style>
