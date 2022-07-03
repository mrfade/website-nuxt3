<template>
  <div class="projects">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
