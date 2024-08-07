<template>
  <article :class="`milestone__content milestone__content--${(currentSection.id_section).toLowerCase()}`">
    <div class="milestone__icon">
      <img
        class="milestone__icon-image"
        src="@/assets/images/brain-reading.svg"
      />
    </div>
    <h1 class="milestone__title">
      {{ currentSection.title }}
    </h1>
    <p class="milestone__description">
      {{ currentSection.final_message }}
    </p>
  </article>
</template>

<script setup>
import sections from '@/data/sections';
import { defineProps } from 'vue';

const props = defineProps({
  milestone: {
    type: String,
    required: true
  }
});

const currentSection = sections.find(section => section.name === props.milestone);
</script>
