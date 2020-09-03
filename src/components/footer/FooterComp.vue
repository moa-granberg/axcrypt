<template>
  <footer :class="'footer ' + $mq">
    logo
    <footer-sitemap />
    <footer-contact />
    <footer-social />
  </footer>
</template>

<script>
import FooterSitemap from './FooterSitemap';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';

export default {
  components: {
    FooterSitemap,
    FooterContact,
    FooterSocial,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.footer {
  background-color: $green;
  color: $white;
}
</style>
