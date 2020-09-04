<template>
  <section :class="'footer-contact-wrapper ' + $mq">
    <h3 :class="'footer-contact-heading ' + $mq">
      {{ $t('ContactUsHeading') }}
    </h3>
    <p
      :class="'footer-contact-paragraph ' + $mq"
      v-html="$t('FooterContactUsParagraph')"
    />

    <mq-layout mq="mobile" class="footer-contact-socialmedia-wrapper">
      <footer-social-media />
    </mq-layout>

    <mq-layout mq="mobile">
      <img
        src="@/assets/logos/axcrypt_white.png"
        alt="logo"
        :class="'footer-logo ' + $mq"
      />
    </mq-layout>
  </section>
</template>

<script>
import FooterSocialMedia from './FooterSocialMedia';

export default {
  components: {
    FooterSocialMedia,
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.footer-contact-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &.mobile {
    align-items: center;
    padding: 0 0 70px 0;
  }

  &.desktop {
    margin: 0 auto 0 30px;
  }
}

.footer-contact-heading {
  &.mobile {
    margin: 16px 0;
    font-weight: 400;
  }

  &.desktop {
    margin: 0 0 15px 0;
    font-size: 0.875rem;
  }
}

.footer-contact-paragraph {
  font-size: 0.75rem;
  line-height: 1.2rem;
  margin: 0;
  padding: 0 0 16px 0;

  &.mobile {
    text-align: center;
    font-weight: 300;
    max-width: 280px;
  }

  &.desktop {
    max-width: 327px;
  }
}

.footer-contact-paragraph a {
  color: $white;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.footer-logo {
  &.mobile {
    width: 51px;
    position: absolute;
    bottom: 28px;
    right: 20px;
  }
}
</style>
