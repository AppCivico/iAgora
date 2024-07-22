<template>
  <main class="quiz-page">
    <div class="quiz-page__wrapper">
      <QuizQuestions />   
    </div>
  </main>
</template>

<script setup>
import QuizQuestions from '@/components/QuizQuestions.vue'
import { onBeforeMount, onBeforeUnmount } from 'vue'

function addPageStyles() {
  document.body.style.setProperty('--color-body-background', 'var(--color-beige)');
  document.body.classList.add('quiz-page-body');
}

function removePageStyles() {
  document.body.classList.remove('quiz-page-body');
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
