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
          <div class="flex flex-column gap-24">
            <ul class="learned-techniques">
              <Technique 
                v-for="(milestone, name, index) in milestones"
                :key="index"
                :learned="milestone.learned"
                :name="name"
                :technique="milestone"
              />
            </ul>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-center">
          <router-link
            :to="{ name: 'quiz' }"
            class="button button--tertiary"
          >
            {{ $t("milestone.continue") }}
          </router-link>
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup>
  import sections from '@/data/sections';
  import { ref, computed } from "vue";
  import { useI18n } from 'vue-i18n';
  import { useRoute } from 'vue-router';
  import confetti from "https://cdn.skypack.dev/canvas-confetti";
  import MilestoneContent from "@components/MileStoneContent.vue"
  import Technique from "@components/Technique.vue"
  import Dialog from "@components/Dialog.vue"
  import DialogIcon from "@/assets/images/brain-music.svg"


  //@todo maybe find a better way of doing this
  const route = useRoute();
  const { locale, messages } = useI18n();

  const milestones = messages.value[locale.value].milestones;
  const currentMilestone = sections.find(section => section.name === route.params.name.toLowerCase());
  let learnedControl = true;

  for (const [key, value] of Object.entries(milestones)) {
    milestones[key].learned = learnedControl;

    if (value.id_section === currentMilestone.id_section) {
      learnedControl = false;
    }
  }

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
