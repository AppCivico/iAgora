import { defineStore } from 'pinia'

export const useCredibilityStore = defineStore('credibility', {
  state: () => {
    return {
      credibility: 0,
    }
  },
  persist: true,
  actions: {
    updateCredibility(value) {
      this.credibility = this.credibility + value;
    },
  },
  getters: {
    showWarning: (state) => state.credibility < -30,
  },
})
