<template>
  <section :class="'premium-business-cta-wrapper ' + $mq">
    <h2 :class="'premium-business-cta-preheading ' + $mq">
      {{ $t('PremiumBusinessCtaPreHeading') }}
    </h2>
    <h1
      :class="'premium-business-cta-heading ' + $mq"
      v-html="$t('PremiumBusinessCtaHeading')"
    ></h1>
    <primary-button-comp phraseKey="ReadMoreButtonLabel" size="small" />
  </section>
</template>

<script>
import PrimaryButtonComp from '@/components/PrimaryButtonComp';

export default {
  components: {
    PrimaryButtonComp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.premium-business-cta-wrapper {
  background-color: rgba(0, 0, 0, 0.7);
  color: $white;
  text-align: center;

  &.mobile {
    padding: 28px 0 23px 0;
  }

  &.desktop {
    padding: 54px 0;
  }
}

.premium-business-cta-preheading {
  font-weight: 400;
  margin: 0;

  &.mobile {
    font-size: 0.875rem;
  }

  &.desktop {
    font-size: 1.5rem;
  }
}

.premium-business-cta-heading {
  font-weight: 400;

  &.mobile {
    margin: 7px 0 13px 0;
    font-size: 1.125rem;
  }

  &.desktop {
    margin: 20px 0;
    font-size: 1.875rem;
  }
}
</style>
