<template>
  <main class="wrapper wrapper--small">
    <div class="milestone">
      <header class="milestone__header">
        <h2 class="milestone__header-title">{{ $t("milestone.congratulations") }}</h2>
        <p class="milestone__header-description">
          {{ $t("milestone.congratulations-text") }}
        </p>
      </header>
      <MilestoneContent
        milestone="personification"
      />
      <footer class="milestone__footer">
        <router-link
          class="button button--tertiary"
          to="/quiz"
        >
          {{ $t("milestone.continue") }}
        </router-link>
      </footer>
    </div>
  </main>
</template>

<script setup>
  import confetti from "https://cdn.skypack.dev/canvas-confetti";
  import MilestoneContent from '@components/MileStoneContent.vue'

  document.body.style.setProperty('--color-body-background', 'var(--color-blue)');

  confetti({
    particleCount: 250,
    spread: 180,
    ticks: 400,
    origin: { y: 0 },
    disableForReducedMotion: true,
  });
</script>

<style lang="scss">
  @use "@styles/pages/milestone.scss"
</style>
