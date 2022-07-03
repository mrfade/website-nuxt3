<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h2 class="title">
    {{ title }}
    <slot></slot>
  </h2>
</template>

<style lang="scss" scoped>
.title {
  position: relative;
  display: inline-flex;
  overflow-x: hidden;
  padding-bottom: 5px;
  transform: rotate(0);
  font-weight: 600;
  margin-top: 1em;
  margin-bottom: 1em;

  &::after {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    color: white;
    background: #fff;
    transform-origin: left;
    animation: load-right 3s 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    animation-iteration-count: infinite;

    @keyframes load-right {
      0% {
        left: -100%;
      }

      50% {
        left: 0;
      }

      100% {
        left: 100%;
      }
    }
  }
}
</style>
