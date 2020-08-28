<template>
  <header>
    <mq-layout mq="mobile" class="nav-mobile">
      <router-link to="/"
        ><img class="logo" src="../assets/logos/axcrypt_text.png" alt="Logo"
      /></router-link>
      <hamburger-menu />
    </mq-layout>

    <!-- <mq-layout mq="desktop">
      <h1>desktop</h1>
    </mq-layout> -->
  </header>
</template>

<script>
import HamburgerMenu from './HamburgerMenu';
export default {
  components: {
    HamburgerMenu,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 145px;
  margin: 30px 0;
}

.nav-mobile {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 767px;
  margin: auto;
}
</style>
