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
        class="black-main-hover rounded-0 cursor-pointer"
      >
        <td class="rounded-0 gray--border">
          <div class="d-flex align-center">
            <ServerStatusBadge :color="item.server_status_color" />
            <span>{{ item.name }}</span>
          </div>
        </td>
        <td class="rounded-0 gray--border">
          {{ getTimeSinceUptime(item.uptime) }}
        </td>
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

import ServerStatusBadge from "./ServerStatusBadge.vue";

export default {
  name: "ServersTable",
  components: { ServerStatusBadge },
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
    getTimeSinceUptime(uptimeTime) {
      const newDate = new Date();
      const newDate2 = new Date(uptimeTime);
      const diffTime = Math.abs(newDate - newDate2);
      const diffTimeDate = new Date(diffTime);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const timeSinceUptime = `${diffDays} days, ${diffTimeDate.getHours()}h:${diffTimeDate.getMinutes()}m:${diffTimeDate.getSeconds()} `;
      return timeSinceUptime;
    },
  },
};
</script>

<style></style>
