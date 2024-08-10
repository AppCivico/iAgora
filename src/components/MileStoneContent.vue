<template>
  <article :class="`milestone__content milestone__content--${(currentSection.id_section).toLowerCase()}`">
    <div class="milestone__icon">
      <img
        class="milestone__icon-image"
        src="@/assets/images/brain-reading.svg"
      />
    </div>
    <h1 class="milestone__title">
      {{ currentSection.name }}
    </h1>
    <p class="milestone__description">
      {{ currentSection.final_message }}
    </p>
  </article>
</template>

<script setup>
import { defineProps } from 'vue';
import { useQuestionsStore } from '@/stores/questions';

const questionsStore = useQuestionsStore();
const currentSection = questionsStore.currentSection;

const props = defineProps({
  milestone: {
    type: String,
    required: true
  }
});
</script>
