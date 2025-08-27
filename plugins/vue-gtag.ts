import { createGtag } from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const gtag = createGtag({
    tagId: 'UA-142146319-1'
  })

  nuxtApp.vueApp.use(gtag)
})
