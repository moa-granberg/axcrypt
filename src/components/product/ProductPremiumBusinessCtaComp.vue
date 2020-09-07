<template>
  <section :class="'premium-business-cta-wrapper ' + $mq">
    <h2 :class="'premium-business-cta-preheading ' + $mq"> {{$t('PremiumBusinessCtaPreHeading')}} </h2>
    <h1 :class="'premium-business-cta-heading ' + $mq"  v-html="$t('PremiumBusinessCtaHeading')"></h1>
    <primary-button-comp phraseKey="ReadMoreButtonLabel" size="small" />
  </section>
</template>

<script>
import PrimaryButtonComp from '@/components/PrimaryButtonComp';

export default {
  components: {
    PrimaryButtonComp
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.premium-business-cta-wrapper {
  background-color: rgba(0,0,0,0.7);
  color: $white;
  text-align: center;
  padding: 28px 0 0 0;
}

.premium-business-cta-preheading {
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
}

.premium-business-cta-heading {
  font-size: 1.125rem;
  font-weight: 400;
  margin: 7px 0 0 0;
}
</style>