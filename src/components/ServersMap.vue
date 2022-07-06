<template>
  <div class="pa-4">
    <div class="position-relative">
      <v-img
        max-width="779"
        max-height="396"
        src="@/assets/images/map.png"
      ></v-img>
      <div v-for="server in servers" :key="server.id">
        <ServerBadge :server="server" />
      </div>
    </div>
  </div>
</template>

<script>
import ServerBadge from "./ServerBadge.vue";

export default {
  name: "ServersMap",
  components: {
    ServerBadge,
  },
  props: {
    servers: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style></style>
