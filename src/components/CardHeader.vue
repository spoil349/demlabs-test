<template>
  <div class="d-flex">
    <slot name="prepend"></slot>
    <p :class="firstText.classes">
      {{ firstText.value }}
      <span v-if="secondText.value" :class="secondText.classes">
        {{ secondText.value }}
      </span>
      <span v-if="thirdText.value" :class="thirdText.classes">{{
        thirdText.value
      }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "CardHeader",
  props: {
    firstText: {
      type: Object,
      default() {
        return { value: "", classes: "" };
      },
    },
    secondText: {
      type: Object,
      default() {
        return { value: "", classes: "" };
      },
    },
    thirdText: {
      type: Object,
      default() {
        return { value: "", classes: "" };
      },
    },
  },
};
</script>

<style></style>
