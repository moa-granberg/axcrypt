<template>
  <div :class="`pricing-product-heading-wrapper ${product} ${$mq}`">
    <h1 :class="`pricing-product-heading heading-jumbo ${$mq}`">
      {{ $t(headingPhraseKey) }}
    </h1>
    <h2 :class="`pricing-product-subheading body-text-large ${$mq}`">
      {{ $t(subheadingPhraseKey) }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    product: String,
    headingPhraseKey: String,
    subheadingPhraseKey: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricing-product-heading-wrapper {
  @include center-column;
  width: 100%;
  text-transform: uppercase;
  color: $white;

  &.free {
    background-color: #545454;
  }

  &.premium {
    background-color: $dark-green;
  }

  &.business {
    background-color: $black;
  }

  &.mobile {
    padding: 8px 0;
    border-bottom: 0.5px solid $gray;
    border-top: 0.5px solid $gray;
  }

  &.desktop {
    border-radius: 5px 5px 0 0;
    padding: 30px 0;
    border: 0.5px solid $gray;
  }
}

.pricing-product-heading {
  margin: 0;
}

.pricing-product-subheading {
  margin: 0;
  font-weight: 400;
}
</style>
