<template>
  <div class="chat-layout">
    <div class="chat-layout__header">
      <header class="quiz-page__header">
        <div class="wrapper">
          <div class="quiz-page__header-content">
            <ImpactedPeople
              :impacted-people="impactedPeopleCount"
            />
            <CredibilityMeter
              :pointer-position="pointerPositionValue"
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
              @click="choseOption(option.next_question_id)"
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
import { ref, onMounted, computed } from "vue";
import CredibilityMeter from "@components/credibilityMeter/CredibilityMeter.vue";
import ImpactedPeople from "@components/impactedPeople/ImpactedPeople.vue";

const selectedQuestions = ref([])

const currentQuestionObject = computed(()=>{
  return selectedQuestions.value[selectedQuestions.value.length-1]
})

const currentQuestion = computed(()=>{
  return selectedQuestions.value[selectedQuestions.value.length-1]?.options
})

const impactedPeopleCount = computed(()=>{
  return selectedQuestions.value.reduce((sum, question) => {
    return sum + (question.Pessoas_Impacatadas || 0);
  }, 0);
})

const pointerPositionValue = computed(()=>{
  if (currentQuestionObject.value) {
    console.log(currentQuestionObject.value);
    return currentQuestionObject.value.Credibilidade || 0;
  }
})

function choseOption(id){
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
