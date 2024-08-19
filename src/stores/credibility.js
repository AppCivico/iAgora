import { defineStore } from 'pinia'

export const useCredibilityStore = defineStore('credibility', {
  state: () => {
    return {
      credibility: 0,
    }
  },
  persist: true,
  actions: {
    resetState() {
      this.credibility = 0;
    },
    updateCredibility(value) {
      this.credibility = value;
    },
  },
  getters: {
    showWarning: (state) => state.credibility < -30,
  },
})
