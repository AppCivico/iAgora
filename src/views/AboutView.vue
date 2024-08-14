<template>
  <main class="about-page">
    <div class="wrapper">
      <div class="grid gap-24">

        <component :is="aboutText" />

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
      </div>
    </div>
  </main>
</template>

<script setup>
  import { shallowRef, watch } from 'vue';
  import aboutPtBr from '@/data/ptBR/about.md';
  import aboutEn from '@/data/en/about.md';
  import { i18n } from '@/i18n';

  const locale = i18n.global.locale;
  let aboutText = shallowRef(aboutPtBr);

  async function selectLanguage() {
    const language = i18n.global.locale.value;
    aboutText = language === 'en' ? aboutEn : aboutPtBr;
  }

  watch(locale, () => {
    selectLanguage();
  });
</script>

<style lang="scss">
  @use "@styles/pages/about-page.scss"
</style>
