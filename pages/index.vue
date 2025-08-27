<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'description',
      content: "Hi! I'm Enes Solak, Backend-focused Full Stack Developer from Turkey. I have a passion for Web Development and I love to build things with it."
    }
  ]
})
</script>

<template>
  <div>
    <SectionsHero />

    <ScrollDown />

    <SectionsAbout id="about" />

    <SectionsProjects id="projects" />

    <SectionsGitRepos id="git-repos" />
  </div>
</template>

<style lang="scss">
#about, #projects, #git-repos {
  margin-top: 100px;
}
</style>
