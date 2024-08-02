import { defineStore } from 'pinia'
import quiz from "../data/teste.json"
export const useQuestionsStore = defineStore('questions', {
  state: () => {
    return {
      questions: [quiz.questions['1']],
    }
  },
  persist: true,
  actions: {
    resetState() {
      this.questions = [quiz.questions['1']];
    },
    addQuestion(questionId) {
      this.questions.push(quiz.questions[questionId]);
    },
  },
  getters: {
    currentQuestion: (state) => state.questions[state.questions.length - 1],
  },
})
