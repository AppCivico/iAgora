import { defineStore } from 'pinia'
import quiz from "../data/teste.json"
import sections from "../data/sections.json"

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
    async chooseOption(option, question) {
      if (option.end) {
        const sectionId = question.section;
        const currentSection = sections.find((section) => section.id_section === sectionId);
        // in case we end up without next_question_id;
        // const nextSectionId = sections.indexOf(currentSection) + 1;
        // const nextSection = sections[nextSectionId];
        // option.next_question_id = nextSection.id_question;

        await this.router.push({ name: 'milestone', params: { name: currentSection.name } })
      }

      if (option.final) {
        await this.router.push({ name: 'congratulations' })
      }

      this.addQuestion(option.next_question_id);
    },
  },
  getters: {
    currentQuestion: (state) => state.questions[state.questions.length - 1],
  },
})
