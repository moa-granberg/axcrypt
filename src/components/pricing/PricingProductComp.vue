<template>
  <article :class="`pricing-product-wrapper ${$mq}`">
    <div :class="`pricing-product-heading-wrapper ${$mq}`">
      <h1 :class="`pricing-product-heading ${$mq}`">
        {{$t(product.headingPhraseKey)}}
      </h1>
      <h2 :class="`pricing-product-subheading ${$mq}`">
        {{$t(product.subheadingPhraseKey)}}
      </h2>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    product: {
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

<style lang="scss" scoped></style>
