<template>
  <footer :class="'footer-wrapper ' + $mq">
    <mq-layout mq="mobile" :class="'footer ' + $mq">
      <footer-newsletter />
      <footer-sitemap />
      <footer-contact />
    </mq-layout>

    <mq-layout mq="desktop" :class="'footer ' + $mq">
      <img
        src="@/assets/logos/axcrypt_white.png"
        alt="logo"
        :class="'footer-logo ' + $mq"
      />
      <footer-sitemap />
      <footer-contact />
      <div :class="'footer-social-newsletter-wrapper ' + $mq">
        <footer-newsletter />
        <footer-social-media />
      </div>
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

.footer-wrapper {
  background-color: $green;
  color: $white;
}

.footer {
  &.desktop {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 37px 20px;
    max-width: 1130px;
    margin: auto;
  }
}

.footer-logo {
  &.desktop {
    width: 51px;
  }
}

.footer-social-newsletter-wrapper {
  &.desktop {
    display: flex;
    flex-direction: column;
  }
}
</style>
