<script setup lang="ts">
import Projects from '../projects/Projects.vue'
import Project from '../projects/Project.vue'

const projects = [
  {
    name: 'sunucum.cloud',
    url: 'https://sunucum.cloud',
    status: 'active',
    description: 'My workspace server running on CentOS 7.'
  },
  {
    name: 'cevir.in',
    url: 'https://cevir.in',
    status: 'active',
    description: 'It is a simple video downloader from various sites.'
  },
  {
    name: 'solak.dev',
    url: 'https://solak.dev',
    status: 'active',
    description: 'Domain that I serve my example projects under.'
  },
  {
    name: 'enes.im',
    url: 'https://enes.im',
    status: 'active',
    description: 'My link alias service.'
  }
]
</script>

<template>
  <section>
    <Container>
      <Title title="Projects" />
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
