<script setup lang="ts">
import type { Ref } from 'vue'
import type { Repository } from '~~/@types/github'
import Repos from '~~/components/repos/Repos.vue'
import Repo from '~~/components/repos/Repo.vue'
import GithubColors from '~~/assets/github-colors.json'

const repos: Ref<Repository[]> = ref<Repository[]>([])
const { data, error } = await useFetch<Repository[]>('https://api.github.com/users/mrfade/repos?per_page=100')

if (data.value)
  repos.value = data.value
    ?.filter(repo => repo.fork === false)
    .sort((a: Repository, b: Repository): number => (a?.pushed_at > b?.pushed_at) ? -1 : 1)

if (error.value)
  // eslint-disable-next-line no-console
  console.error(error.value)

const getColor = (language: string | undefined, defaultValue: string): string => {
  if (!language) return defaultValue
  const colors = new Map(Object.entries(GithubColors))
  return colors.get(language) ?? defaultValue
}

useHead({
  title: 'GitHub Repos'
})
</script>

<template>
  <section>
    <Container class="mt-12">
      <SectionTitle title="GitHub Repos" center />
      <Repos class="mt-8">
        <Repo
          v-for="repo in repos"
          :key="repo.id"
          :owner="repo.owner.login"
          :repo="repo.name"
          :link="repo.html_url"
          :description="repo.description ?? ''"
          :color="getColor(repo.language, '#000')"
          :language="repo.language ?? ''"
          :stars="repo.stargazers_count.toString()"
        />

        <SkeletonRepo v-if="!repos.length" />
        <SkeletonRepo v-if="!repos.length" />
        <SkeletonRepo v-if="!repos.length" />
        <SkeletonRepo v-if="!repos.length" />
      </Repos>
    </Container>
  </section>
</template>
