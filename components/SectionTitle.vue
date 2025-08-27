<script setup lang="ts">
interface Props {
  title: string,
  center?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  center: false
})
</script>

<template>
  <div class="title" :class="{'justify-center': center}">
    <h2>
      {{ props.title }}
      <slot></slot>
    </h2>
  </div>
</template>
