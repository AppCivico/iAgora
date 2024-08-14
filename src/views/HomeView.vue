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
      :open="dialogIsOpen"
      :hasCloseButton="true"
      :title="$t('how-to-play.title')"
      @close="showHowToPlayDialog(false)"
      theme="blue"
    >
      <template #body>
        <div class="wrapper wrapper--small">
          <div class="flex flex-column gap-24">
            O objetivo do jogo é expor as táticas e técnicas de manipulação usadas para enganar as pessoas e construir um público fiel. IAgora funciona como uma “vacina” psicológica contra a desinformação: jogá-lo constrói resistência cognitiva contra formas comuns de manipulação que você pode encontrar online. Cientistas que trabalharam conosco no desenvolvimento deste jogo descobriram que jogar IAgora melhora a capacidade das pessoas de identificar técnicas de manipulação em postagens de redes sociais, aumenta sua confiança em detectar tais técnicas e reduz sua vontade de compartilhar conteúdo manipulador com pessoas de sua rede. Você pode ler mais sobre a ciência por trás do jogo aqui.       
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
  import { ref } from 'vue';
  import { useImpactedPeopleStore } from '@/stores/impactedPeople';
  import { useCredibilityStore } from '@/stores/credibility';
  import { useQuestionsStore } from '@/stores/questions';
  import Dialog from '@components/Dialog.vue';

  const impactedPeopleStore = useImpactedPeopleStore();
  const credibilityStore = useCredibilityStore();
  const questionsStore = useQuestionsStore();
  const router = useRouter();
  const dialogIsOpen = ref(false);

  function showHowToPlayDialog(value) {
    dialogIsOpen.value = value;
  }

  function onStartQuiz() {
    // Reset chat state
    impactedPeopleStore.updateCount(0);
    credibilityStore.resetState();
    questionsStore.resetState();

    router.push({ name: 'quiz' });
  }

  document.body.style.setProperty('--color-body-background', 'var(--color-red)');
</script>

<style lang="scss">
  @use "@styles/pages/homepage.scss"
</style>
