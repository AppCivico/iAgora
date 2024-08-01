<template>
  <main class="home-content">
    <div class="wrapper">
      <div class="flex flex-column gap-80">
        <figure class="homepage__logo">
          <div class="homepage__logo-mask"></div>
          <figcaption>{{ $t("home.title") }}</figcaption>
        </figure>
        <p class="homepage__description">
          {{ $t("home.description") }}
        </p>
        <div class="homepage__buttons">
          <button
            @click="onStartQuiz"
            class="button button--primary start-quiz-button"
          >
            {{ $t("home.start") }}
            <img
              class="homepage__brain-icon"
              src="@/assets/images/brain.svg"
            />
          </button>
          <router-link
            class="button button--secondary how-to-play-button"
            :to="{ name: 'how-to-play' }"
          >
            {{ $t("home.how-to-play") }}
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useImpactedPeopleStore } from '@/stores/impactedPeople';
  import { useCredibilityStore } from '@/stores/credibility';

  const impactedPeopleStore = useImpactedPeopleStore();
  const credibilityStore = useCredibilityStore();
  const router = useRouter();

  function onStartQuiz() {
    // Reset counts on start
    impactedPeopleStore.updateCount(0);
    credibilityStore.resetCredibility();

    router.push({ name: 'quiz' });
  }

  document.body.style.setProperty('--color-body-background', 'var(--color-red)');
</script>

<style lang="scss">
  @use "@styles/pages/homepage.scss"
</style>
