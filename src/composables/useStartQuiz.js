import { useRouter } from 'vue-router';
import { useImpactedPeopleStore } from '@/stores/impactedPeople';
import { useCredibilityStore } from '@/stores/credibility';
import { useQuestionsStore } from '@/stores/questions';

export function useStartQuiz() {
  const router = useRouter();

  function onStartQuiz() {
    const impactedPeopleStore = useImpactedPeopleStore();
    const credibilityStore = useCredibilityStore();
    const questionsStore = useQuestionsStore();

    // Reset chat state
    impactedPeopleStore.updateCount(0);
    credibilityStore.resetState();
    questionsStore.resetState();

    router.push({ name: 'quiz' });
  }

  return { onStartQuiz };
}
