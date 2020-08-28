<template>
  <header>
    <mq-layout mq="mobile" class="nav-mobile">
      <router-link to="/"
        ><img
          src="../assets/logos/axcrypt_text.png"
          alt="Logo"
      /></router-link>
      <hamburger-menu/>
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
    HamburgerMenu
  }
};
</script>

<style></style>
