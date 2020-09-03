<template>
  <footer :class="'footer ' + $mq">
    <mq-layout mq="mobile">
      <footer-newsletter />
      <footer-sitemap />
      <footer-contact />
    </mq-layout>

    <mq-layout mq="desktop">
      <img
        src="@/assets/logos/axcrypt_white.png"
        alt="logo"
        :class="'footer-logo ' + $mq"
      />
      <footer-sitemap />
      <footer-contact />
      <footer-newsletter />
      <footer-social-media />
    </mq-layout>
  </footer>
</template>

<script>
import FooterSitemap from './FooterSitemap';
import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsletter';
import FooterSocialMedia from './FooterSocialMedia';

export default {
  components: {
    FooterSitemap,
    FooterContact,
    FooterNewsletter,
    FooterSocialMedia,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.footer {
  background-color: $green;
  color: $white;

  &.desktop {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.footer-logo {
  &.desktop {
    width: 51px;
  }
}
</style>
