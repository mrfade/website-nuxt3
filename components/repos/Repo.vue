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

<style lang="scss" scoped>
.repo {
  display: flex;
  flex-direction: column;
  width: calc(50% - .5rem);
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  background-color: #212121;

  h3 {
    margin: 0;
    padding: 0;
    font-weight: 400;

    a {
      color: $text-color;
      text-decoration: none;

      span {
        color: #777;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    flex: 1 0 auto;
    margin: 0;
    padding: 0;
    font-weight: 200;
    font-size: 1rem;
  }

  .info {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;

    .language {
      display: flex;
      align-items: center;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--dot-color);
        display: inline-block;
        margin-right: 5px;
      }

      .name {
        font-size: .8rem;
        font-weight: 200;
        color: #fff;
      }
    }

    .stars {
      margin-left: 1rem;
      display: flex;
      align-items: center;

      .star {
        margin-right: 5px;
      }

      .count {
        font-size: .8rem;
        font-weight: 200;
        color: #fff;
      }
    }
  }
}

@media (max-width: 768px) {
  .repo {
    width: 100% !important;
  }
}
</style>
