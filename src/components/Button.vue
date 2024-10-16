<template>
  <button :class="classes">
    <slot name="icon-start"></slot>
    <slot />
    <slot name="icon-end"></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  color: { type: String },
  size: { type: String },
  block: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
});

const classes = computed(() => [
  "btn",
  props.color ? `btn-${props.color}` : "",
  props.size ? `btn-${props.size}` : "",
  props.disabled ? `btn-${props.disabled}` : "",
  props.block ? `btn-block` : "",
]);
</script>
