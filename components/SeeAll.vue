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

<style lang="scss" scoped>
.see-all {
  position: relative;
  padding: 0 1.5em;
  overflow: hidden;

  &::before {
    content: "•";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    width: 1.5em;
    height: 100%;
    transition: left 100ms ease-in;
  }

  &::after {
    content: "•";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    width: 1.5em;
    height: 100%;
    transition: right 100ms ease-in;
  }

  &:hover {
    &::before {
      left: -2em;
    }
    &::after {
      right: -2em;
    }
  }
}
</style>
