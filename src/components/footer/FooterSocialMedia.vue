<template>
  <div :class="'footer-social-socialmedia-wrapper ' + $mq">
    <a href="https://facebook.com/axcrypt">
      <img src="@/assets/icons/facebook_icon.png" alt="Facebook" />
    </a>
    <a href="https://twitter.com/axcrypt">
      <img src="@/assets/icons/twitter_icon.svg" alt="Twitter" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-social-socialmedia-wrapper {
  img {
    width: 32px;
    margin: 0 8px 0 0;
    filter: drop-shadow(0 4px 4px rgba(0,0,0,0.1));
    opacity: 1;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }

  &.mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 28px;
    left: 28px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.desktop {
    align-self: flex-end;
    display: flex;
    align-items: center;
    margin: 0 0 4px 0;
  }
}
</style>
