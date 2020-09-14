<template>
  <article :class="`pricing-product-wrapper ${$mq}`">
    <div :class="`pricing-product-heading-wrapper ${product.productClass} ${$mq}`">
      <h1 :class="`pricing-product-heading ${$mq}`">
        {{ $t(product.headingPhraseKey) }}
      </h1>
      <h2 :class="`pricing-product-subheading ${$mq}`">
        {{ $t(product.subheadingPhraseKey) }}
      </h2>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    product: {
      productClass: String,
      headingPhraseKey: String,
      subheadingPhraseKey: String,
      price: Number,
      currency: String,
      buttonLabelPhraseKey: String,
      buttonUrl: String,
      readMoreUrl: String,
      readMorePhraseKey: String,
      featureList: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricing-product-wrapper {
  &.mobile {
    margin: 32px 0;
    width: 100vw;
  }
  &.desktop {
    margin: 82px 0;
    width: 460px;
  }
}

.pricing-product-heading-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  }

  &.desktop {
    border-radius: 5px 5px 0 0;
    padding: 30px 0;
  }
}
.pricing-product-heading {
  margin: 0;

  &.mobile {
    font-size: 1.5rem;
  }

  &.desktop {
    font-size: 2.25rem;
  }
}
.pricing-product-subheading {
  margin: 0;
  font-weight: 400;

  &.mobile {
    font-size: 0.875rem;
  }

  &.desktop {
    font-size: 1.125rem;
  }
}
</style>
