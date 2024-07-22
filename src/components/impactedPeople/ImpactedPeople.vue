<template>
  <div class="impact">
    <h1 class="impact__number">{{ props.impactedPeople }}</h1>
    <p class="impact__text">
      {{ $t("quiz.number-of-people-impacted") }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  impactedPeople: {
    type: Number,
    required: true
  }
});
</script>

<style lang="scss">
@use '@styles/abstracts/mixings' as mixing;

.impact {
  text-align: center;
  max-width: fit-content;
}

.impact__number {
  font-family: knicknackregular, sans-serif;
  font-size: 2.25rem; 

  @include mixing.breakpoint('medium') {
    font-size: 3rem; 
  }

  color: var(--color-blue); 
}

.impact__text {
  font-size: 0.8rem; 
  text-transform: uppercase;
  width: min-content;

  @include mixing.breakpoint('x-large') {
    font-size: 1rem;
  }
}
</style>
