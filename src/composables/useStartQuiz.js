import { useRouter } from 'vue-router';
import { useImpactedPeopleStore } from '@/stores/impactedPeople';
import { useCredibilityStore } from '@/stores/credibility';
import { useQuestionsStore } from '@/stores/questions';

export function useStartQuiz() {
  const router = useRouter();
  const impactedPeopleStore = useImpactedPeopleStore();
  const credibilityStore = useCredibilityStore();
  const questionsStore = useQuestionsStore();

  function onStartQuiz() {
    // Reset chat state
    impactedPeopleStore.resetState();
    credibilityStore.resetState();
    questionsStore.resetState();

    router.push({ name: 'quiz' });
  }

  return { onStartQuiz };
}
