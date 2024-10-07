import { defineStore } from 'pinia'

export const useImpactedPeopleStore = defineStore('impactedPeople', {
  state: () => ({
    count: 0,
  }),
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
