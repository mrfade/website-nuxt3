<script setup lang="ts">
useHead({
  title: 'Enes Solak - Full Stack Web Developer',
  meta: [
    {
      name: 'description',
      content: "Hi! I'm Enes Solak, a Full Stack Web Developer from Turkey. I have a passion for Web Development and I love to build things with it."
    }
  ],
  link: [
    {
      rel: 'shortcut icon',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <div id="index">
    <SectionsHero />

    <ScrollDown />

    <SectionsAbout id="about" />

    <SectionsProjects id="projects" />

    <SectionsGitRepos id="git-repos" />

    <SectionsFooter id="footer" />

    <StatusBar />
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;900&family=Poppins:wght@100;200;400;600;900&display=swap);

#about, #projects, #git-repos {
  margin-top: 100px;
}

#index {
  padding-bottom: 3rem;
}
</style>
