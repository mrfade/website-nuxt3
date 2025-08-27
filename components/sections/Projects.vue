<script setup lang="ts">
import Projects from '../projects/Projects.vue'
import Project from '../projects/Project.vue'

const projects = [
  {
    name: 'sunucum.cloud',
    url: 'https://sunucum.cloud',
    status: 'active',
    description: 'Personal workspace server on AlmaLinux.'
  },
  {
    name: 'cevir.in',
    url: 'https://cevir.in',
    status: 'temporary-inactive',
    description: 'Simple multi-platform video downloader.'
  },
  {
    name: 'solak.dev',
    url: 'https://solak.dev',
    status: 'active',
    description: 'Showcase for my example projects.'
  },
  {
    name: 'enes.im',
    url: 'https://enes.im',
    status: 'active',
    description: 'Custom link shortening service.'
  }
]
</script>

<template>
  <section>
    <Container>
      <SectionTitle title="Projects" />
      <Projects>
        <Project
          v-for="project in projects"
          :key="project.name"
          :name="project.name"
          :url="project.url"
          :status="project.status"
          :description="project.description"
        />
      </Projects>
    </Container>
  </section>
</template>
