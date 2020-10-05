<template>
  <section :class="`product-business-big-team-cta-wrapper ${$mq}`">
    <h1 :class="`product-business-big-team-cta-heading heading-large ${$mq}`">
      {{ $t('BusinessBigTeamCtaHeading') }}
    </h1>
    <a
      :class="['standard-button small black', $mq]"
      href="mailto:angelique.huighe@axcrypt.net"
    >
      {{ $t('ContactUsHeading') }}
    </a>
  </section>
</template>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-business-big-team-cta-wrapper {
  background-color: $green;
  @include center-column;

  &.mobile {
    padding: 28px 0;
  }

  &.desktop {
    padding: 4rem 0;
  }
}

.product-business-big-team-cta-heading {
  color: $white;
  text-align: center;

  &.mobile {
    margin: 0 0 18px 0;
  }

  &.desktop {
    margin: 0 0 38px 0;
    font-weight: 400;
  }
}
</style>
