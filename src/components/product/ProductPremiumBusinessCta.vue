<template>
  <section :class="'premium-business-cta-wrapper ' + $mq">
    <h2 :class="'premium-business-cta-preheading heading-small ' + $mq">
      {{ $t('PremiumBusinessCtaPreHeading') }}
    </h2>
    <h1
      :class="'premium-business-cta-heading heading-large ' + $mq"
      v-html="$t('PremiumBusinessCtaHeading')"
    ></h1>
    <primary-button
      phraseKey="ReadMoreButtonLabel"
      size="small"
      path="/business"
    />
  </section>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';

export default {
  components: {
    PrimaryButton,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.premium-business-cta-wrapper {
  background-color: rgba(0, 0, 0, 0.7);
  color: $white;
  @include center-column;

  &.mobile {
    padding: 28px 0 23px 0;
  }

  &.desktop {
    padding: 54px 0;
  }
}

.premium-business-cta-preheading {
  font-weight: 400;
  @include no-margin-padding;
}

.premium-business-cta-heading {
  font-weight: 400;
  text-align: center;

  &.mobile {
    margin: 7px 0 13px 0;
  }

  &.desktop {
    margin: 20px 0;
  }
}
</style>
