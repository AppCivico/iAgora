<template>
  <main class="home-content">
    <div class="wrapper">
      <div class="flex flex-column gap-80">
        <figure class="homepage__logo">
          <img src="@/assets/images/logo.svg" />
          <figcaption>{{ $t("home.title") }}</figcaption>
        </figure>
        <p class="homepage__description">
          {{ $t("home.description") }}
        </p>
        <div class="homepage__buttons">
          <router-link
            class="button button--primary"
            to="/quiz"
          >
            {{ $t("home.start") }}
            <img
              class="homepage__brain-icon"
              src="@/assets/images/brain.svg"
            />
          </router-link>
          <router-link
            class="button button--secondary"
            to="/how-to-play">
            {{ $t("home.how-to-play") }}
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  document.body.style.setProperty('--color-body-background', 'var(--color-red)');
</script>

<style lang="scss">
  @use "@styles/pages/homepage.scss"
</style>
