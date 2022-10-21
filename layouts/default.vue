<script setup lang="ts">
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import { useLoaderStore } from '~~/stores/loader'
const loaderStore = useLoaderStore()

const route = useRoute()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Enes Solak` : 'Enes Solak - Full Stack Web Developer'
  },
  link: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <div id="index">
    <ClientOnly>
      <loading
        class="transition-opacity duration-300"
        :class="[loaderStore.isLoading ? 'opacity-100 visible' : 'opacity-0 invisible']"
        :active="true"
        :is-full-page="true"
        :opacity="1"
        background-color="#111217"
        color="#fff"
      />
    </ClientOnly>

    <Navbar v-if="route.path !== '/'"></Navbar>

    <slot></slot>

    <SectionsFooter id="footer" />

    <StatusBar />
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;900&family=Poppins:wght@100;200;400;600;900&display=swap);

#index {
  padding-bottom: 3rem;
}
</style>
