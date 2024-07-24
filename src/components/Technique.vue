<template>
  <li
    class="learned-techniques__technique"
    :class="`learned-techniques__technique--${props.name}`, { 'learned-techniques__technique--learned': props.learned }"
  >
    <p class="learned-techniques__title">
      {{ props.technique.title }}
    </p>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  technique: {
    type: Object,
    required: true
  },
  learned: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  }
});
</script>
