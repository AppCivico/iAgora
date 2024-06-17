<template>
  <div class="impact">
    <h1 class="impact__number">{{ props.impactedPeople }}</h1>
    <p class="impact__text">PESSOAS <br> IMPACTADAS</p>
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

<style>
.impact {
  font-family: 'Adobe Clean', sans-serif;
  text-align: center;
  color: #6C757D;
  max-width: fit-content;
}

.impact__number {
  font-size: 48px; 
  color: #007BFF; 
}

.impact__text {
  font-size: 14px; 
}
</style>
