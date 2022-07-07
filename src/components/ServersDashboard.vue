<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="flex-grow-1 px-6 pt-6 pb-4">
      <CardHeader
        :firstText="{
          value: 'Servers',
          classes: 'mb-4 white-main--text text-h7 text-capitalize ma-0',
        }"
        :secondText="{
          value: `(${onlineServers.length} online of ${allServers.length})`,
          classes: 'gray-main--text',
        }"
      >
      </CardHeader>
      <SearchFilter
        v-model="serversSearchingValue"
        :placeholder="'Search AP'"
      />
    </div>
    <ServersTable :servers="filteredServers" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchFilter from "./SearchFilter.vue";
import ServersTable from "./ServersTable.vue";
import CardHeader from "./CardHeader.vue";

export default {
  name: "ServersDashboard",
  components: { SearchFilter, ServersTable, CardHeader },
  computed: {
    ...mapGetters([
      "allServers",
      "filteredServers",
      "choosenServerId",
      "onlineServers",
      "getServersSearchingValue",
    ]),
    serversSearchingValue: {
      get() {
        return this.getServersSearchingValue;
      },
      set(value) {
        this.setServersSearchingValue(value);
      },
    },
  },
  methods: {
    ...mapActions(["setServersSearchingValue"]),
  },
};
</script>

<style></style>
