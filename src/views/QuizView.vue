<template>
  <main class="home-content">
    <QuizQuestions />   
  </main>
</template>

<script setup>
import QuizQuestions from '@/components/QuizQuestions.vue'
import { onBeforeMount, onBeforeUnmount } from 'vue'

function addPageStyles() {
  document.body.style.setProperty('--color-body-background', 'var(--color-beige)');
  document.body.classList.add('quiz-page');
}

function removePageStyles() {
  document.body.classList.remove('quiz-page');
}

onBeforeMount(() => {
  addPageStyles();
})

onBeforeUnmount(() => {
  removePageStyles();
})
</script>

<style lang="scss">
  @use "@styles/pages/quizpage.scss"
</style>
