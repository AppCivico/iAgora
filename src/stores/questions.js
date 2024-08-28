import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n';
import { i18n } from '@/i18n';
import quizPtBR from '@/data/ptBR/quiz.json';
import quizEn from '@/data/en/quiz.json';
import sectionsPtBR from '@/data/ptBR/sections.json';
import sectionsEn from '@/data/en/sections.json';

export const useQuestionsStore = defineStore('questions', () => {
  const currentQuestion = computed(() => questions.value[questions.value.length - 1]);
  const currentSection = computed(() => {
    return sections.value.find(section => section.id_section === currentQuestion.value.section);
  });
  const { locale } = useI18n();
  let quiz = quizPtBR;
  let questions = ref([quiz.questions['1']]);
  let sections = ref(sectionsPtBR);

  async function selectLanguage() {
    const language = i18n.global.locale.value;
    quiz = language === 'en' ? quizEn : quizPtBR;
    sections = language === 'en' ? sectionsEn : sectionsPtBR;
  }

  function resetState() {
    questions.value = [quiz.questions['1']];
  };

  function addQuestion(questionId) {
    questions.value.push(quiz.questions[questionId]);
  };

  async function chooseOption(option) {
    if (option.end) {
      await this.router.push({ name: 'milestone', params: { name: currentSection.value.name } })
    }

    if (option.final) {
      await this.router.push({ name: 'congratulations' })
    }

    addQuestion(option.next_question_id);
  };

  watch(locale, () => {
    selectLanguage();
  });

  return {
    questions,
    currentQuestion,
    resetState,
    addQuestion,
    chooseOption,
    sections,
    currentSection
  }
}, { persist: true });
