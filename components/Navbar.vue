<script setup lang="ts">
const route = useRoute()

const links = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/repos',
    text: 'Repos'
  }
]
</script>

<template>
  <nav>
    <Container>
      <div class="flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex space-x-4">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="px-3 py-2 rounded-md text-sm font-medium"
              :class="[route.path == link.to ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
            >
              {{ link.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Container>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: darken($bg-color, 2%);
}
</style>
