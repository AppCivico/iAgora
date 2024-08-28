<template>
  <main class="long-text-page">
    <div class="wrapper">
      <div class="grid gap-24">
        <component :is="privacy" />
      </div>
    </div>
  </main>
</template>

<script setup>
  import { shallowRef } from 'vue';
  import privacyPtBr from '@/data/ptBR/privacy.md';

  let privacy = shallowRef(privacyPtBr);

  async function selectLanguage() {
    const language = i18n.global.locale.value;
    privacy = language === 'en' ? privacyEn : privacyPtBr;
  }
</script>

<style lang="scss">
  @use "@styles/pages/long-text-page.scss"
</style>
