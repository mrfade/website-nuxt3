<template>
  <!-- https://codepen.io/TKS31/pen/gOaKaxx -->
  <div id="scroll-down">
    <div class="mouse"></div>
  </div>
</template>

<style lang="scss" scoped>
#scroll-down {
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .mouse {
    width: 40px;
    height: 70px;
    border: 2px solid #fff;
    border-radius: 30px;
    position: relative;

    &::before {
      content: '';
      width: 9px;
      height: 9px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      border-radius: 50%;
      opacity: 1;
      animation: wheel 2s infinite;
      -webkit-animation: wheel 2s infinite;
    }
  }

  @keyframes wheel {
    to {
      opacity: 0;
      top: 50px;
    }
  }
}
</style>
