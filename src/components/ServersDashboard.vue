<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="flex-grow-1 px-6 pt-6 pb-4">
      <p class="mb-4 white-main--text text-h7">
        Servers
        <span class="gray-main--text">(8 online of 10)</span>
      </p>
      <SearchFilter @input="filter" />
    </div>
    <ServersTable :servers="filteredServers" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchFilter from "./SearchFilter.vue";
import ServersTable from "./ServersTable.vue";

export default {
  name: "ServersDashboard",
  components: { SearchFilter, ServersTable },
  computed: {
    ...mapGetters(["filteredServers", "choosenServerId"]),
  },
  methods: {
    ...mapActions(["setSearchingValue"]),
    filter(value) {
      this.setSearchingValue(value);
    },
  },
};
</script>

<style></style>
