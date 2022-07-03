<template>
  <section>
    <Container>
      <Title title="Discord Status" />

      <span class="active">Online</span>

      <div class="activity spotify">
        <div class="header">Listening to Spotify</div>
        <div class="body">
          <div class="image">
            <img src="https://i.scdn.co/image/ab67616d0000b2739ca20352ead0cc8dccdf7951" alt="">
          </div>
          <div class="content">
            <div class="name">Leave No Man Behind</div>
            <div class="details">by Hans Zimmer</div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.active {
  display: flex;
  align-items: center;
  padding: .1rem .6rem .1rem .3rem;
  font-size: .8rem;
  background: #43B581;
  color: #fff;
  border-radius: 1.4rem;

  &::before {
    content: ' ';
    display: inline-block;
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background: #fff;
    margin-right: .3rem;
  }
}

.activity {
  display: flex;
  flex-direction: column;
  background: #1ED760;
  color: #fff;
  border-radius: .3em;
  padding: 1em;
  width: 500px;

  .header {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: .5rem;
  }

  .body {
    display: flex;
    flex-direction: row;

    .image {
      width: 100px;
      height: 100px;
      margin-right: 1rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
