<template>
  <div class="skeleton rounded-md space-y-4 box-border">
    <div class="rounded-md bg-gray-300 h-5 animate-pulse w-9/12 dark:bg-neutral-700/40" />

    <div class="space-y-2">
      <div class="rounded-md bg-gray-300 h-4 w-full animate-pulse dark:bg-neutral-700/40" />
      <div class="rounded-md bg-gray-300 h-4 w-full animate-pulse dark:bg-neutral-700/40" />
      <div class="rounded-md bg-gray-300 h-4 animate-pulse w-4/12 dark:bg-neutral-700/40" />
    </div>

    <div class="space-y-2">
      <div class="rounded-md bg-gray-300 h-4 animate-pulse w-1/4 dark:bg-neutral-700/40" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skeleton {
  width: calc(50% - .5rem);
}
</style>
