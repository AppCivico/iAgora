import { defineStore } from 'pinia'

export const useCredibilityStore = defineStore('credibility', {
  state: () => {
    return {
      credibility: 0,
    }
  },
  persist: true,
  actions: {
    resetCredibility() {
      this.credibility = 0
    },
    updateCredibility(value) {
      this.credibility = this.credibility + value;
    },
  },
  getters: {
    showWarning: (state) => state.credibility < -30,
  },
})
