import { useLoaderStore } from '~~/stores/loader'

export default defineNuxtPlugin((nuxtApp) => {
  const loaderStore = useLoaderStore()
  let started = false

  nuxtApp.hook('page:start', () => {
    started = true
    loaderStore.setLoading(true)
  })

  nuxtApp.hook('page:finish', () => {
    loaderStore.setLoading(false)

    if (started)
      window.scrollTo(0, 0)

    started = false
  })
})
