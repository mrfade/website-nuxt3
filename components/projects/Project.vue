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
      <span class="active">Active</span>
    </h3>
    <p>{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.project {
  width: calc(50% - .5rem);
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  background-color: #212121;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    font-weight: 400;

    a {
      color: $text-color;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .active {
      display: flex;
      align-items: center;
      padding: .1rem .6rem .1rem .3rem;
      font-size: .8rem;
      background: #43B581;
      color: #fff;
      border-radius: 1.4rem;

      &::before {
        content: ' ';
        display: inline-block;
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        background: #fff;
        margin-right: .3rem;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    }
  }

  p {
    margin: 0;
    padding: 0;
    font-weight: 200;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .project {
    width: 100% !important;
  }
}
</style>
