<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="flex-grow-1 px-6 pt-6 pb-4">
      <p class="mb-4 white-main--text text-h7">
        Servers
        <span class="gray-main--text">(8 online of 10)</span>
      </p>
      <div class="mb-4">
        <ServersFilter />
      </div>
    </div>
    <ServersTable />
  </div>
</template>

<script>
import ServersFilter from "./ServersFilter.vue";
import ServersTable from "./ServersTable.vue";

export default {
  name: "ServersDashboard",
  components: { ServersFilter, ServersTable },
};
</script>

<style></style>
