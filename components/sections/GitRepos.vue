<script setup lang="ts">
import { Ref } from 'vue'
import { PinnedRepo } from '~~/@types/repo'
import Repos from '~~/components/repos/Repos.vue'
import Repo from '~~/components/repos/Repo.vue'

const pinnedRepos: Ref<PinnedRepo[]> = ref<PinnedRepo[]>([])
const { data, error } = await useFetch<PinnedRepo[]>('/api/pinned-repos')
if (data.value)
  pinnedRepos.value = data.value

if (error.value)
  // eslint-disable-next-line no-console
  console.error(error.value)
</script>

<template>
  <section>
    <Container>
      <Title title="GitHub Repos" />
      <Repos>
        <Repo
          v-for="repo in pinnedRepos"
          :key="repo.repo"
          :owner="repo.owner"
          :repo="repo.repo"
          :link="repo.link"
          :description="repo.description"
          :color="repo.languageColor"
          :language="repo.language"
          :stars="repo.stars"
        />

        <SkeletonRepo v-if="!pinnedRepos.length" />
        <SkeletonRepo v-if="!pinnedRepos.length" />
        <SkeletonRepo v-if="!pinnedRepos.length" />
        <SkeletonRepo v-if="!pinnedRepos.length" />
      </Repos>
    </Container>
  </section>
</template>
