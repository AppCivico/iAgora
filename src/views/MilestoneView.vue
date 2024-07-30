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
        :milestone="$route.params.name"
      />
      <footer class="milestone__footer">
        <button
          @click="showDialog"
          class="button button--tertiary"
          to="/quiz"
        >
          {{ $t("milestone.continue") }}
        </button>
      </footer>
    </div>
    <Dialog
      :open="dialogIsOpen"
      :title="$t('milestone.learned')"
      :header-icon="DialogIcon"
    >
      <template #body>
        <div class="wrapper">
          <ul class="learned-techniques">
            <Technique 
              v-for="(milestone, index) in $i18n.messages[$i18n.locale].milestones"
              :key="index"
              :learned="true"
              :name="index"
              :technique="milestone"
            />
          </ul>
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup>
  import { ref } from "vue";
  import confetti from "https://cdn.skypack.dev/canvas-confetti";
  import MilestoneContent from "@components/MileStoneContent.vue"
  import Technique from "@components/Technique.vue"
  import Dialog from "@components/Dialog.vue"
  import DialogIcon from "@/assets/images/brain.svg"

  document.body.style.setProperty('--color-body-background', 'var(--color-blue)');

  const dialogIsOpen = ref(false);

  function showDialog() {
    dialogIsOpen.value = true;
  }

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
