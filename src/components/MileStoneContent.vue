<template>
  <article class="milestone__content">
    <img
      class="milestone__icon"
      src="@/assets/images/brain.svg"
    />
    <h1 class="milestone__title">
      {{ $t(`milestones.${props.milestone}.title`) }}
    </h1>
    <p class="milestone__description">
      {{ $t(`milestones.${props.milestone}.description`) }}
    </p>
  </article>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  milestone: {
    type: String,
    required: true
  }
});
</script>
