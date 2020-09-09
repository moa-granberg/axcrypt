<template>
  <section :class="`product-business-big-team-cta-wrapper ${$mq}`">
    <h1 :class="`product-business-big-team-cta-heading ${$mq}`">
      {{ $t('BusinessBigTeamCtaHeading') }}
    </h1>
    <primary-button-comp phraseKey="ContactUsHeading" size="small" path="/about"/>
  </section>
</template>

<script>
import PrimaryButtonComp from '@/components/PrimaryButtonComp.vue';

export default {
  components: {
    PrimaryButtonComp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-business-big-team-cta-wrapper {
  background-color: $green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    font-size: 1.125rem;
  }

  &.desktop {
    margin: 0 0 38px 0;
    font-size: 1.875rem;
    font-weight: 400;
  }
}
</style>
