<template>
  <div
    class="impact"
    :class="props.theme ? `impact--${props.theme}` : ''"
  >
    <h1 class="impact__number">
      {{ impactedPeopleStore.count }}
    </h1>
    <p class="impact__text">
      {{ $t("quiz.number-of-people-impacted") }}
    </p>
  </div>
</template>

<script setup>
import { useImpactedPeopleStore } from '@/stores/impactedPeople'
import { defineProps } from 'vue';
const impactedPeopleStore = useImpactedPeopleStore();

const props = defineProps({
  theme: {
    type: String,
    default: ""
  },
});
</script>

<style lang="scss">
@use '@styles/abstracts/mixings' as mixing;

.impact {
  --number-color: var(--color-blue);
  --font-size-small-screen: 2.25rem;
  --font-size-big-screen: 3rem;
  --impact-text-width: min-content;
  --impact-text-font-size: 0.8rem;

  text-align: center;
  max-width: fit-content;
}

.impact--large {
  --number-color: var(--color-yellow);
  --font-size-small-screen: 3.25rem;
  --font-size-big-screen: 5rem;
  --impact-text-width: auto;
  --impact-text-font-size: 1.2rem;

  max-width: auto;
}

.impact__number {
  font-family: knicknackregular, sans-serif;
  font-size: var(--font-size-small-screen); 
  color: var(--number-color); 

  @include mixing.breakpoint('medium') {
    font-size: var(--font-size-big-screen); 
  }
}

.impact__text {
  font-size: var(--impact-text-font-size);
  text-transform: uppercase;
  width: var(--impact-text-width);

  @include mixing.breakpoint('x-large') {
    font-size: 1rem;
  }
}
</style>
