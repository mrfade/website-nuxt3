<template>
  <footer id="footer">
    <small class="copyright">Enes Solak @ 2022</small>
  </footer>
</template>

<style lang="scss" scoped>
#footer {
  // width: 100%;
  // height: 4rem;
  // position: fixed;
  // bottom: 0;
  // background-color: rgba($bg-color, .8);
  // backdrop-filter: blur(8px);
  padding: 1rem;
  background-color: darken($bg-color, 1%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  .copyright {
    font-weight: 400;
    font-size: 1rem;
  }
}
</style>
