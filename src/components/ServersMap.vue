<template>
  <div class="pa-4">
    <div class="position-relative">
      <v-img
        max-width="779"
        max-height="396"
        src="@/assets/images/map.png"
      ></v-img>
      <v-tooltip v-for="server in servers" :key="server.id" bottom>
        <template v-slot:activator="{ on, attrs }">
          <div
            class="position-absolute"
            :style="{
              top: server.longitude,
              left: server.latitude,
            }"
            v-bind="attrs"
            v-on="on"
          >
            <ServerBadge :server="server" />
          </div>
        </template>
        <template v-slot:default>
          <div
            class="map-tooltip white-main rounded black-main--text px-4 py-3 upper-pseudo-triangle"
          >
            <p class="body-1 text-center ma-0">{{ server.name }}</p>
            <p class="body-2 text-center ma-0">
              {{ server.users_id.length }} connections
            </p>
            <p
              :class="`${server.server_status_color}-darker--text body-2 text-center ma-0`"
            >
              {{ server.status_text }}
            </p>
          </div>
        </template>
      </v-tooltip>
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
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.map-tooltip {
  max-width: 265px;
}
</style>
