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
      <tr class="black-main-hover rounded-0">
        <td class="rounded-0 gray--border">{{ item.name }}</td>
        <td class="rounded-0 gray--border">{{ item.email }}</td>
        <td class="rounded-0 gray--border">
          <ul>
            <li v-for="license in item.licenses" :key="license.id">
              {{ license.name }}
            </li>
          </ul>
        </td>
      </tr>
    </template>
    <template v-slot:no-data>
      <p class="pt-5 white-main--text">Sorry, nothing was found :(</p>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
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
          text: "Uptime",
          value: "uptime",
          class:
            "black-lighter gray-main--text body-2 font-weight-regular elevation-0",
        },
        {
          text: "Connections",
          value: "connections",
          class:
            "black-lighter gray-main--text body-2 font-weight-regular elevation-0",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["usersLoadingStatus"]),
  },
};
</script>

<style></style>
