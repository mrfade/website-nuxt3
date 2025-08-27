<template>
  <section class="hero-section">
    <div class="hero-container">
      <h1>
        <span class="wstroke">Hi! I'm</span>
        Enes Solak
      </h1>
      <h2>Full Stack Developer</h2>

      <div class="contacts">
        <a v-tippy="'Instagram'" class="contact" href="https://instagram.com/enessolak_">
          <IconsInstagram />
        </a>
        <a v-tippy="'Twitter'" class="contact" href="https://twitter.com/enessolak_">
          <IconsTwitter />
        </a>
        <a v-tippy="'Github'" class="contact" href="https://github.com/mrfade">
          <IconsGitHub />
        </a>
        <a v-tippy="'Codepen'" class="contact" href="https://codepen.io/enessolak">
          <IconsCodepen />
        </a>
        <a v-tippy="'Linkedin'" class="contact" href="https://www.linkedin.com/in/enessolak">
          <IconsLinkedin />
        </a>
        <a v-tippy="'Skype'" class="contact" href="skype:live:enes_solak99?chat">
          <IconsSkype />
        </a>
        <a v-tippy="'Discord'" class="contact" href="https://discordapp.com/users/398833415077625856">
          <IconsDiscord />
        </a>
        <a v-tippy="'E-mail'" class="contact" href="mailto:enessolak99@gmail.com">
          <IconsEnvelope />
        </a>
        <a v-tippy="'E-mail'" class="contact" href="mailto:enes@solak.dev">
          <IconsEnvelope />
        </a>
      </div>
    </div>
  </section>
</template>
