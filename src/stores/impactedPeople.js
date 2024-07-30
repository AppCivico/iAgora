import { defineStore } from 'pinia'

export const useImpactedPeopleStore = defineStore('impactedPeople', {
  state: () => {
    return {
      count: 0,
    }
  },
  persist: true,
  actions: {
    updateCount(value) {
      this.count = value;
    },
  },
})
