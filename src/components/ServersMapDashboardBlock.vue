<template>
  <v-card color="black-lighter overflow-hidden" class="d-flex">
    <ServersMap :servers="allServers" />
    <v-divider vertical :light="true" class="z-3"></v-divider>
    <ServersDashboard />
  </v-card>
</template>

<script>
import ServersMap from "./ServersMap.vue";
import ServersDashboard from "./ServersDashboard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ServersMapDashboardBlock",
  components: { ServersMap, ServersDashboard },
  computed: mapGetters(["allServers"]),
  methods: mapActions(["fetchAllServers"]),
  created() {
    this.fetchAllServers();
  },
};
</script>

<style></style>
