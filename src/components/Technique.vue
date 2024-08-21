<template>
  <li
    class="learned-techniques__technique"
    :class="`learned-techniques__technique--${(currentSection.id_section).toLowerCase()}`,
    { 'learned-techniques__technique--learned': technique.learned }"
  >
    <p class="learned-techniques__title">
      {{ props.technique.name }}
    </p>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';
import { useQuestionsStore } from '@/stores/questions';

const questionsStore = useQuestionsStore();


const props = defineProps({
  technique: {
    type: Object,
    required: true
  },
});

const currentSection = questionsStore.sections.find(
  section => section.name === props.technique.name.toLowerCase()
);
</script>
