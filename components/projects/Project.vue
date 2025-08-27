<script setup lang="ts">
defineProps<{
  name: string,
  url: string,
  status: string,
  description: string,
}>()
</script>

<template>
  <div class="project">
    <h3>
      <a :href="url" target="_blank">{{ name }}</a>
      <span v-if="status === 'active'" class="active">Active</span>
      <span v-else-if="status === 'temporary-inactive'" class="temporary-inactive">Temporary Inactive</span>
    </h3>
    <p>{{ description }}</p>
  </div>
</template>
