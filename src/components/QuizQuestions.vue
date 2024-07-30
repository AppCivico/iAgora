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
    <div class="chat-layout__body">
      <div class="wrapper wrapper--small">
        <ul class="questions">
          <TransitionGroup name="chat-bubbles">
            <li
              class="questions__question"
              v-for="question in selectedQuestions"
              :key="question.id"
            >
              {{ question.text }}
            </li>
          </TransitionGroup>
        </ul>
      </div>
    </div>
    <div class="chat-layout__footer">
      <div class="wrapper wrapper wrapper--small">
        <div
          v-if="currentQuestion"
          class="flex space-between gap-24 padding-bottom-24"
        >
          <template
            v-for="option, index in currentQuestion"
            :key="index"
          >
            <button
              class="button button--primary button--small"
              type="button"
              @click="choseOption(option)"
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
import quiz from "../data/teste.json"
import { ref, onMounted, computed, watch } from "vue";
import { useImpactedPeopleStore } from '@/stores/impactedPeople';
import { useCredibilityStore } from '@/stores/credibility';
import { useRouter } from 'vue-router';
import CredibilityMeter from "@components/credibilityMeter/CredibilityMeter.vue";
import ImpactedPeople from "@components/impactedPeople/ImpactedPeople.vue";

const router = useRouter();
const impactedPeopleStore = useImpactedPeopleStore();
const credibilityStore = useCredibilityStore();
const selectedQuestions = ref([]);

const currentQuestionObject = computed(()=>{
  return selectedQuestions.value[selectedQuestions.value.length-1]
})

const currentQuestion = computed(()=>{
  return selectedQuestions.value[selectedQuestions.value.length-1]?.options
})

watch(currentQuestionObject, async (question) => {
  const impactedPeopleNumber = Number(question.pessoas_impactadas);
  const credibility = Number(currentQuestionObject.value.credibilidade);

  if (impactedPeopleNumber) {
    impactedPeopleStore.updateCount(impactedPeopleNumber);
  }

  if (credibility) {
    credibilityStore.updateCredibility(credibility);
  }
});

async function choseOption(option){
  const id = option.next_question_id
  if (option.finish) {
    await router.push({ name: 'milestone', params: { name: option.finish } })
  }
  selectedQuestions.value.push(quiz.questions[id])
}

onMounted(()=>{
  selectedQuestions.value.push(quiz.questions['1'])
})
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
