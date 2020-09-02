<template>
  <section :class="'footer-contact ' + $mq">
    <h3 :class="'footer-contact-heading ' + $mq">{{ $t('ContactUsHeading') }}</h3>
    <p 
      :class="'footer-contact-paragraph ' + $mq" 
      v-html="$t('FooterContactUsParagraph1')"
    />

    <p 
      :class="'footer-contact-paragraph ' + $mq"
      v-html="$t('FooterContactUsParagraph2')" 
    />
  </section>
</template>



<style lang="scss">
@import '@/scss/variables.scss';

.footer-contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-contact-heading {
  font-size: 0.875rem;
  margin: 24px 0 18px 0;
}

.footer-contact-paragraph {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1.2rem;
  max-width: 327px;
  a {
    color: $white;
    font-weight: 600;
    text-decoration: none;
  }
}
</style>
