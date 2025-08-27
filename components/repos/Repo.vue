<script setup lang="ts">
defineProps<{
  owner: string,
  repo: string,
  link: string,
  description: string,
  color: string,
  language: string,
  stars: string,
}>()
</script>

<template>
  <div class="repo">
    <h3>
      <a :href="link" target="_blank">
        <span>{{ owner }}/</span>{{ repo }}
      </a>
    </h3>
    <p>{{ description }}</p>

    <div class="info">
      <div class="language">
        <span class="dot" :style="'--dot-color: ' + color"></span>
        <span class="name">{{ language }}</span>
      </div>
      <div class="stars">
        <IconsStar height="10" class="star" />
        <span class="count">{{ stars }}</span>
      </div>
    </div>
  </div>
</template>
