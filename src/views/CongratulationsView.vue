<template>
  <main class="congratulations-content">
    <div class="wrapper">
      <div class="flex flex-column gap-80">
        <figure class="homepage__logo">
          <div class="homepage__logo-mask"></div>
          <figcaption>{{ $t("congratulations.congratulations") }}</figcaption>
        </figure>

        <div class="congratulations-content__score">
          <ImpactedPeople
            theme="large"
            :impacted-people="100"
          />

          <img class="congratulations__brain-icon" src="@/assets/images/brain.svg" />

          <CredibilityMeter
            arch-lower-color="var(--color-red--dark)"
            arch-upper-color="var(--color-yellow)"
            pointer-color="var(--color-yellow--light)"
            :pointer-position="-90"
            :show-warning="false"
          />
        </div>
        

        <div class="flex gap-32 flex-wrap">
          <router-link
            class="button button--primary"
            to="/quiz"
          >
            {{ $t("congratulations.play-again") }}
          </router-link>
          <button
            href="#"
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
          <h3 class="newsletter__title">
            {{ $t("newsletter.title") }}
          </h3>
          <form class="newsletter__form">
            <input
              class="newsletter__input"
              type="email"
              :placeholder="$t('newsletter.placeholder')"
            />
            <button
              class="button newsletter__button"
              type="submit"
            >
              {{ $t("newsletter.button") }}
            </button>
          </form>
        </article>
      </div>
    </div>
    <div class="bg-chat">
      <div class="wrapper">
        <h4 class="title title--blue">
          {{ $t("congratulations.review") }}
        </h4>
        <article class="review">
          <dl
            v-for="(milestone, index) in $i18n.messages[$i18n.locale].milestones"
            :key="index"
          >
            <dt>{{ milestone.title }}</dt>
            <dd>{{ milestone.description }}</dd>
          </dl>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
  import ImpactedPeople from "@components/impactedPeople/ImpactedPeople.vue";
  import CredibilityMeter from "@components/credibilityMeter/CredibilityMeter.vue";
  import confetti from "https://cdn.skypack.dev/canvas-confetti";

  document.body.style.setProperty('--color-body-background', 'var(--color-red)');

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
