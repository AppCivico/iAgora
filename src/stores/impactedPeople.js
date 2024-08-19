import { defineStore } from 'pinia'

export const useImpactedPeopleStore = defineStore('impactedPeople', {
  state: () => {
    return {
      count: 0,
    }
  },
  persist: true,
  actions: {
    resetState() {
      this.count = 0;
    },
    updateCount(value) {
      this.count += value;
    },
  },
})
