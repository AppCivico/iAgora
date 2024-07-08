<template>
  <div>
    <ul class="questions">
      <li v-for="question in selectedQuestions" :key="question.id">
        {{ question.text }}
      </li>
    </ul>
    <ul v-if="currentQuestion">
      <li v-for="option, index in currentQuestion" :key="index">
        <button type="button" @click="choseOption(option.next_question_id)">
          {{option.text }}
        </button>
      </li>
    </ul>
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
  console.log('montou');
  selectedQuestions.value.push(quiz.questions['1'])
})
  

</script>

<style >
  .questions {
    color: gray;}

    .questions li:last-child {
      color: black;
      font-size: 1.5em;
    }
</style>
