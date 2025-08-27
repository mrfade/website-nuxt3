<script setup lang="ts">
import type { Ref } from 'vue'
import type { PinnedRepo } from '~~/@types/repo'
import Repos from '~~/components/repos/Repos.vue'
import Repo from '~~/components/repos/Repo.vue'
import repos from '~~/data/pinned-repos.json'

const pinnedRepos: Ref<PinnedRepo[]> = ref<PinnedRepo[]>(repos as unknown as PinnedRepo[])
</script>

<template>
  <section>
    <Container>
      <SectionTitle title="Pinned GitHub Repos" />
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
          :stars="repo.stars?.toString()"
        />

        <SkeletonRepo v-if="!pinnedRepos.length" />
        <SkeletonRepo v-if="!pinnedRepos.length" />
        <SkeletonRepo v-if="!pinnedRepos.length" />
        <SkeletonRepo v-if="!pinnedRepos.length" />
      </Repos>

      <div class="flex justify-center my-12">
        <SeeAll to="/repos">See All</SeeAll>
      </div>
    </Container>
  </section>
</template>
