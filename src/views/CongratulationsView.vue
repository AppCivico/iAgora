<template>
  <main class="congratulations-content">
    <div class="wrapper">
      <div class="flex flex-column gap-80 padding-bottom-80">
        <figure class="homepage__logo">
          <div class="homepage__logo-mask"></div>
          <figcaption>{{ $t("congratulations.congratulations") }}</figcaption>
        </figure>

        <div class="congratulations-content__score">
          <ImpactedPeople theme="large" />

          <img
            class="congratulations__brain-icon"
            src="@/assets/images/brain.svg"
            alt=""
          />

          <CredibilityMeter
            arch-lower-color="var(--color-red--dark)"
            arch-upper-color="var(--color-yellow)"
            pointer-color="var(--color-yellow--light)"
            :big-label="true"
            :pointer-position="-90"
            :show-warning="false"
          />
        </div>
        

        <div class="flex gap-32 justify-content-center flex-wrap">
          <router-link
            :to="{ name: 'home'}"
            class="button button--primary"
          >
            {{ $t("congratulations.play-again") }}
          </router-link>
          <button
            class="button button--secondary"
            @click="share"
          >
            {{ $t("congratulations.share") }}
          </button>
        </div>
      </div>
    </div>
    <div class="bg-yellow padding--vertical-80">
      <div class="wrapper">
        <article class="newsletter">
          <h3 class="title">
            {{ $t("newsletter.title") }}
          </h3>
          <form class="newsletter__form">
            <label
              for="newsletter-input"
              class="sr-only"
            >
              {{ $t("newsletter.placeholder") }}
            </label>
            <input
              id="newsletter-input"
              class="newsletter__input"
              type="email"
              :placeholder="$t('newsletter.placeholder')"
            />
            <button
              class="button button--quaternary newsletter__button"
              type="submit"
            >
              {{ $t("newsletter.button") }}
            </button>
          </form>
        </article>
      </div>
    </div>
    <div class="bg-chat padding--vertical-80">
      <div class="wrapper">
        <h4 class="title title--blue margin-bottom-80">
          {{ $t("congratulations.review") }}
        </h4>
        <article class="review">
          <details
            v-for="(milestone, name, index) in milestones"
            :key="name"
            :open="index === 0"
            class="review__item"
            :class="`review__item--${milestone.id_section.toLowerCase()}`"
          >
            <summary class="review__title">{{ milestone.title }}</summary>
            <div>
              <p class="review__description">{{ milestone.description }}</p>
            </div>
          </details>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
  import sections from '@/data/sections';
  import ImpactedPeople from "@components/impactedPeople/ImpactedPeople.vue";
  import CredibilityMeter from "@components/credibilityMeter/CredibilityMeter.vue";
  import ShareButton from "@/components/shareButton/ShareButton.vue";
  import { useI18n } from 'vue-i18n';
  import share from "@/utils/share";
  import confetti from "https://cdn.skypack.dev/canvas-confetti";

  document.body.style.setProperty('--color-body-background', 'var(--color-red)');

  const { locale, messages } = useI18n();

  const milestones = messages.value[locale.value].milestones;

  confetti({
    particleCount: 250,
    spread: 180,
    ticks: 400,
    origin: { y: 0 },
    disableForReducedMotion: true,
  });
</script>

<style lang="scss">
  @use "@styles/pages/congratulations.scss"
</style>
