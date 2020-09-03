<template>
  <footer :class="'footer ' + $mq">
    logo
    <footer-sitemap />
    <footer-contact />
  </footer>
</template>

<script>
import FooterSitemap from './FooterSitemap';
import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsletter';

export default {
  components: {
    FooterSitemap,
    FooterContact,
    FooterNewsletter,
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
