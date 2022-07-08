<template>
  <div
    class="cursor-pointer"
    :style="{
      border: '6px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '100%',
    }"
    @click="setChoosenServerId(server.id)"
  >
    <div
      :style="{
        borderRadius: '100%',
        backgroundColor: 'red',
        boxSizing: 'border-box',
        width: '8px',
        height: '8px',
      }"
    ></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ServerBadge",
  props: {
    server: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["setChoosenServerId"]),
  },
};
</script>

<style></style>
