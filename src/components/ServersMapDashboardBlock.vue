<template>
  <v-card color="black-lighter overflow-hidden" class="d-flex">
    <ServersMap />
    <v-divider vertical :light="true" class="z-3"></v-divider>
    <ServersDashboard />
  </v-card>
</template>

<script>
import ServersMap from "./ServersMap.vue";
import ServersDashboard from "./ServersDashboard.vue";

export default {
  name: "ServersMapDashboardBlock",
  components: { ServersMap, ServersDashboard },
};
</script>

<style></style>
