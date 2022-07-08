<template>
  <div
    :class="`${color}-main me-3 rounded-circle`"
    style="width: 12px; height: 12px"
  ></div>
</template>

<script>
export default {
  name: "ServerStatusBadge",
  props: {
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
