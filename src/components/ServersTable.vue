<template>
  <v-data-table
    fixed-header
    height="300px"
    disable-sort
    :headers="headers"
    :items="servers"
    :hide-default-footer="true"
    class="rounded-0 black-lighter white-main--text custom-scroll"
  >
    <template v-slot:item="{ item }">
      <tr
        @click="changeChoosenServerHandler(item.id)"
        class="black-main-hover rounded-0"
      >
        <td class="rounded-0 gray--border">{{ item.name }}</td>
        <td class="rounded-0 gray--border">{{ item.uptime }}</td>
        <td class="rounded-0 gray--border">{{ item.users_id.length }}</td>
      </tr>
    </template>
    <template v-slot:no-data>
      <p class="pt-5 white-main--text">Sorry, nothing was found :(</p>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ServersTable",
  props: {
    servers: {
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
  methods: {
    ...mapActions([
      "setChoosenServerId",
      "setUsersSearchingValue",
      "setExpandedUserId",
    ]),
    changeChoosenServerHandler(id) {
      this.setChoosenServerId(id);
      this.setUsersSearchingValue("");
      this.setExpandedUserId(null);
    },
  },
};
</script>

<style></style>
