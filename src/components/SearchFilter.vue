<template>
  <v-text-field
    :value="value"
    dense
    background-color="black-main"
    dark
    class="rounded-lg body-1"
    :placeholder="placeholder"
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
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Type something...",
    },
  },
};
</script>

<style></style>
