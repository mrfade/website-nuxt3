<script setup lang="ts">
defineProps<{
  to: string | object
}>()
</script>

<template>
  <nuxt-link :to="to" class="see-all flex items-center justify-center text-lg font-bold text-white tracking-widest uppercase">
    <slot></slot>
  </nuxt-link>
</template>
