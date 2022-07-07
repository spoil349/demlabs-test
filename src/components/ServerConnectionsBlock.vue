<template>
  <v-card color="black-lighter overflow-hidden">
    <UsersDashboard v-if="choosenServerId" />
    <p v-else class="flex-grow-1 white-main--text pa-6 ma-0 text-center">
      CHOOSE THE SERVER FOR MORE INFO
    </p>
  </v-card>
</template>

<script>
import UsersDashboard from "./UsersDashboard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ServerConnectionsBlock",
  components: { UsersDashboard },
  computed: mapGetters(["allServers", "choosenServerId"]),
  methods: mapActions(["fetchAllServers"]),
  created() {
    this.fetchAllServers();
  },
};
</script>

<style></style>
