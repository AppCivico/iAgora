<template>
  <div class="wrapper">
    <div class="scroll-wrapper">
      <ul class="questions">
        <li
          class="questions__question"
          v-for="question in selectedQuestions"
          :key="question.id"
        >
          {{ question.text }}
        </li>
      </ul>
    </div>
    <div
      v-if="currentQuestion"
      class="flex space-between gap-24 padding-bottom-24"
    >
      <div
        v-for="option, index in currentQuestion"
        :key="index"
      >
        <button
          class="button button--primary"
          type="button"
          @click="choseOption(option.next_question_id)"
        >
          {{option.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import quiz from "../data/teste.json"
import { ref, onMounted, computed } from "vue";

const selectedQuestions = ref([])

const currentQuestion = computed(()=>{
    return selectedQuestions.value[selectedQuestions.value.length-1]?.options
})

function choseOption(id){
  selectedQuestions.value.push(quiz.questions[id])
}

onMounted(()=>{
  selectedQuestions.value.push(quiz.questions['1'])
})
</script>

<style lang="scss" scoped>
  // @todo
  // gotta make it prettier with js
  .scroll-wrapper {
    display: flex;
    overflow: auto;
    flex-direction: column-reverse;
    height: 80vh;
  }

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
</style>
