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

<style lang="scss" scoped>
.title {
  display: flex;
  // margin-top: 1em;
  margin-bottom: 1em;

  h2 {
    position: relative;
    display: inline-flex;
    overflow-x: hidden;
    padding-bottom: 5px;
    transform: rotate(0);
    font-weight: 600;

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
}
</style>
