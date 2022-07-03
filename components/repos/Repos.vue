<template>
  <div class="repos">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.repos {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
