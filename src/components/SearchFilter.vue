<template>
  <v-text-field
    dense
    background-color="black-main"
    dark
    class="rounded-lg body-1"
    placeholder="Search AP"
    outlined
    hide-details
    @input="$emit('input', $event)"
  >
    <v-icon slot="prepend-inner" color="gray-main">mdi-magnify</v-icon>
  </v-text-field>
</template>

<script>
export default {
  name: "SearchFilter",
};
</script>

<style></style>
