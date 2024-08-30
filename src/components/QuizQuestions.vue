<template>
  <div class="chat-layout">
    <div class="chat-layout__header">
      <header class="quiz-page__header">
        <div class="wrapper">
          <div class="quiz-page__header-content">
            <ImpactedPeople />
            <CredibilityMeter
              :show-warning="false"
            />
          </div>
        </div>
      </header>
    </div>
    <div
      ref="chatBody"
      class="chat-layout__body"
    >
      <div class="chat-layout__body-content">
        <div class="wrapper wrapper--small">
          <ul class="questions">
            <TransitionGroup name="chat-bubbles">
              <li
                class="questions__question"
                v-for="question in questionsStore.questions"
                :key="question.id"
              >
                <template v-if="question.media">
                  <img
                    class="questions__media questions__media--image"
                    v-if="question.media.type === 'image'"
                    :src="`uploads/${question.media.src}`"
                    :alt="question.media.alt_text"
                  >
                  <figure
                    v-else-if="question.media.type === 'audio'"
                  >
                    <audio
                      class="questions__media questions__media--audio"
                      :src="`uploads/${question.media.src}`"
                      controls
                    >
                    </audio>
                    <figcaption>{{ question.media.alt_text }}</figcaption>
                  </figure>
                  <video
                    v-else-if="question.media.type === 'video'"
                    class="questions__media questions__media--video"
                    :src="`uploads/${question.media.src}`"
                    controls
                  />
                </template>
                <p class="questions__text">
                  {{ question.text }}
                </p>
              </li>
            </TransitionGroup>
          </ul>
        </div>
      </div>
    </div>
    <div class="chat-layout__footer">
      <div class="wrapper wrapper wrapper--small">
        <div
          v-if="currentQuestion"
          class="flex space-between gap-24 padding-bottom-24 flex-wrap"
        >
          <template
            v-for="option, index in currentQuestion.options"
            :key="index"
          >
            <button
              class="button button--primary button--small"
              type="button"
              @click="questionsStore.chooseOption(option, currentQuestion)"
            >
              {{option.text }}
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useImpactedPeopleStore } from '@/stores/impactedPeople';
import { useCredibilityStore } from '@/stores/credibility';
import { useQuestionsStore } from '@/stores/questions';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import CredibilityMeter from "@components/credibilityMeter/CredibilityMeter.vue";
import ImpactedPeople from "@components/impactedPeople/ImpactedPeople.vue";

const router = useRouter();
const impactedPeopleStore = useImpactedPeopleStore();
const credibilityStore = useCredibilityStore();
const questionsStore = useQuestionsStore();
const { currentQuestion } = storeToRefs(questionsStore);
const chatBody = ref(null);

watch(currentQuestion, async (question) => {
  chatBody.value.scrollTop = 0;
  const impactedPeopleNumber = Number(question.people);
  const credibility = Number(questionsStore.currentQuestion.credibility);

  if (impactedPeopleNumber) {
    impactedPeopleStore.updateCount(impactedPeopleNumber);
  }

  if (credibility) {
    credibilityStore.updateCredibility(credibility);
  }
});
</script>

<style lang="scss" scoped>
  @use '@styles/abstracts/mixings' as mixing;

  .questions {
    display: grid;
    gap: 1rem;
    padding: 0;
    list-style: none;
  }

  .questions__question {
    display: grid;
    gap: 1rem;
    padding: 1.25rem;
    background-color: var(--color-white);
    color: var(--color-text-light);
    box-shadow: 0px 2px 0px #d8d4cd;
    border-radius: 20px;
  }

  .questions li:last-child {
    color: var(--color-text);
    opacity: 1;
  }

  .questions__media {
    margin-inline: auto;
    border-radius: 10px;
  }

  .questions__media--audio {
    width: 100%;
  }

  .chat-bubbles-enter-active,
  .chat-bubbles-leave-active {
    transition: opacity 1s ease, transform 0.5s ease;
  }

  .chat-bubbles-enter-from,
  .chat-bubbles-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
