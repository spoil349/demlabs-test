<template>
  <v-text-field
    background-color="black-main"
    dark
    class="rounded-lg body-1"
    placeholder="Search AP"
    outlined
    hide-details
  >
    <v-icon slot="prepend-inner" color="gray-main">mdi-magnify</v-icon>
  </v-text-field>
</template>

<script>
export default {
  name: "ServersFilter",
};
</script>

<style></style>
