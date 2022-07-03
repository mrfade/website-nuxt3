import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/backdrop.css'
import 'tippy.js/animations/shift-away.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTippy, {
    defaultProps: {
      placement: 'bottom',
      animateFill: true
    }
  })
})
