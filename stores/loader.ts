import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
  state: () => ({
    loading: false
  }),

  getters: {
    isLoading: state => state.loading
  },

  actions: {
    setLoading (loading: boolean) {
      this.loading = loading
    }
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useLoaderStore, import.meta.hot))
