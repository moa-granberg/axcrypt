<template>
  <footer :class="'footer ' + $mq">
    logo
    <footer-sitemap />
    <footer-contact />
    <footer-social />
    <footer-try-btn />
  </footer>
</template>

<script>
import FooterSitemap from './FooterSitemap';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';
import FooterTryBtn from './FooterTryBtn';

export default {
  components: {
    FooterSitemap,
    FooterContact,
    FooterSocial,
    FooterTryBtn,
  }
}
</script>

<style lang="scss" scoped>
  @import '@/scss/variables.scss';

  .footer {
    background-color: $green;
    color: $white;
  }
</style>