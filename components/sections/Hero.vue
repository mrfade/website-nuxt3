<template>
  <section>
    <div class="hero-container">
      <h1>
        <span class="wstroke">Hi! I'm</span>
        Enes Solak
      </h1>
      <h2>Full Stack Web Developer</h2>

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

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(min(100vh, 700px));

  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // aspect-ratio: 16/9;
    padding: 5rem 2rem;
    box-sizing: border-box;
    text-align: center;

    h1 {
      font-size: 4rem;
      line-height: 1em;
      margin: 0;
      padding: 0;
      font-weight: 600;

      .wstroke {
        font-weight: 900;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: .8px;
        -webkit-text-stroke-color: $text-color;
        animation: stroke-animation 3s infinite;
      }
    }

    h2 {
      font-size: 2rem;
      font-weight: 100;
      margin: 0;
      padding: 0;
      margin-top: 1rem;
    }

    .contacts {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      margin-top: 2rem;
      max-width: 100%;
      flex-flow: wrap;

      .contact {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 3rem;
        border-radius: 3rem;
        background-color: #212121;

        text-decoration: none;
        color: $text-color;

        i {
          font-size: 1.5em;
        }
      }
    }
  }
}

@keyframes stroke-animation {
  0% {
    background: transparent;
  }

  9% {
    background: linear-gradient(to right, transparent 0% 0em, $text-color 0em .7em, transparent 0em 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  18% {
    background: linear-gradient(to right, transparent 0% .7em, $text-color .7em 1.1em, transparent 0em 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  27% {
    background: linear-gradient(to right, transparent 0% 1.1em, $text-color 1.1em 1.5em, transparent 0em 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  36% {
    background: linear-gradient(to right, transparent 0% 1.5em, $text-color 1.5em 2em, transparent 0em 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  45% {
    background: linear-gradient(to right, transparent 0% 2em, $text-color 2em 2.3em, transparent 0em 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  54% {
    background: linear-gradient(to right, transparent 0% 2.3em, $text-color 2.3em 3.4em, transparent 0em 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  63%,
  81% {
    background: transparent;
  }

  72%,
  90% {
    background: linear-gradient(to right, transparent 0% 0em, $text-color 0em 3.4em, transparent 0em 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
