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
      <tr class="black-main-hover rounded-0">
        <td class="rounded-0 gray--border">{{ item.name }}</td>
        <td class="rounded-0 gray--border">{{ item.uptime }}</td>
        <td class="rounded-0 gray--border">{{ item.connections }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "ServersTable",
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
      servers: [
        {
          name: 1,
          uptime: 1,
          connections: 1,
        },
        {
          name: 2,
          uptime: 2,
          connections: 2,
        },
        {
          name: 3,
          uptime: 3,
          connections: 3,
        },
        {
          name: 4,
          uptime: 4,
          connections: 4,
        },
        {
          name: 5,
          uptime: 5,
          connections: 5,
        },
        {
          name: 6,
          uptime: 6,
          connections: 6,
        },
        {
          name: 7,
          uptime: 7,
          connections: 7,
        },
        {
          name: 8,
          uptime: 8,
          connections: 8,
        },
        {
          name: 9,
          uptime: 9,
          connections: 9,
        },
        {
          name: 10,
          uptime: 10,
          connections: 10,
        },
      ],
    };
  },
};
</script>

<style></style>
