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
              alt=""
            />
          </button>
          <button
            @click="showHowToPlayDialog(true)"
            class="button button--secondary how-to-play-button"
          >
            {{ $t("home.how-to-play") }}
          </button>
          <!-- <router-link -->
          <!--   class="button button--secondary how-to-play-button" -->
          <!--   :to="{ name: 'how-to-play' }" -->
          <!-- > -->
          <!--   {{ $t("home.how-to-play") }} -->
          <!-- </router-link> -->
        </div>
      </div>
    </div>

    <Dialog
      :open="howToPlayIsOpen"
      :hasCloseButton="true"
      :title="$t('how-to-play.title')"
      @close="showHowToPlayDialog(false)"
      theme="blue"
    >
      <template #body>
        <div class="wrapper wrapper--small">
          <div class="flex flex-column gap-24">
            <component :is="howToPlayText" />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-center">
          <button
            @click="onStartQuiz"
            class="button button--primary start-quiz-button"
          >
            {{ $t("home.start") }}
            <img
              class="homepage__brain-icon"
              src="@/assets/images/brain.svg"
              alt=""
            />
          </button>
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, shallowRef, watch } from 'vue';
  import { useImpactedPeopleStore } from '@/stores/impactedPeople';
  import { useCredibilityStore } from '@/stores/credibility';
  import { useQuestionsStore } from '@/stores/questions';
  import { i18n } from '@/i18n';
  import howToPlayPtBr from '@/data/ptBR/how-to-play.md';
  import howToPlayEn from '@/data/en/how-to-play.md';
  import VueMarkdown from 'vue-markdown-render'
  import Dialog from '@components/Dialog.vue';

  const impactedPeopleStore = useImpactedPeopleStore();
  const credibilityStore = useCredibilityStore();
  const questionsStore = useQuestionsStore();
  const router = useRouter();
  const locale = i18n.global.locale;
  const howToPlayIsOpen = ref(false);
  let howToPlayText = shallowRef(howToPlayPtBr);

  async function selectLanguage() {
    const language = i18n.global.locale.value;
    howToPlayText = language === 'en' ? howToPlayEn : howToPlayPtBr;
  }

  function showHowToPlayDialog(value) {
    howToPlayIsOpen.value = value;
  }

  function onStartQuiz() {
    // Reset chat state
    impactedPeopleStore.updateCount(0);
    credibilityStore.resetState();
    questionsStore.resetState();

    router.push({ name: 'quiz' });
  }

  watch(locale, () => {
    selectLanguage();
  });

  document.body.style.setProperty('--color-body-background', 'var(--color-red)');
</script>

<style lang="scss">
  @use "@styles/pages/homepage.scss"
</style>
