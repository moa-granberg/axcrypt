<template>
  <article :class="`pricing-product-wrapper ${$mq}`">
    <div
      v-if="product.productName !== 'free'"
      :class="`pricing-free-month-tag ${$mq}`"
    >
      <p>{{ $t('OneFreeMonthLabel') }}</p>
    </div>

    <pricing-product-header
      :product="product.productName"
      :headingPhraseKey="product.headingPhraseKey"
      :subheadingPhraseKey="product.subheadingPhraseKey"
    />

    <div :class="`pricing-product-body ${$mq}`">
      <price-display
        :annualActive="annualActive"
        :product="product.productName"
      />

      <a
        :class="`standard-button small pricing-product-button ${product.productName} ${$mq} `"
        :href="product.buttonUrl"
      >
        {{ $t(product.buttonLabelPhraseKey) }}
      </a>

      <pricing-product-feature-toggle
        :showFeatureList="showFeatureList"
        @toggleFeatureList="showFeatureList = !showFeatureList"
      />

      <div v-if="$mq === 'desktop'" class="pricing-product-body-divider"></div>

      <pricing-product-feature-list
        :show="showFeatureList || $mq === 'desktop'"
        :featureList="product.featureList"
      />

      <pricing-product-read-more
        v-if="showFeatureList || $mq === 'desktop'"
        :product="product.productName"
        :url="product.readMoreUrl"
        :phraseKey="product.readMorePhraseKey"
      />
    </div>
  </article>
</template>

<script>
import PricingProductFeatureList from './PricingProductFeatureList';
import PricingProductHeader from './PricingProductHeader';
import PricingProductFeatureToggle from './PricingProductFeatureToggle';
import PricingProductReadMore from './PricingProductReadMore';
import PriceDisplay from '@/components/PriceDisplay';

export default {
  components: {
    PricingProductFeatureList,
    PricingProductHeader,
    PricingProductFeatureToggle,
    PricingProductReadMore,
    PriceDisplay,
  },

  props: {
    annualActive: Boolean,
    product: {
      productName: String,
      headingPhraseKey: String,
      subheadingPhraseKey: String,
      buttonLabelPhraseKey: String,
      buttonUrl: String,
      readMoreUrl: String,
      readMorePhraseKey: String,
      featureList: Array,
    },
  },

  data() {
    return {
      showFeatureList: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricing-product-wrapper {
  @include center-column;

  &.mobile {
    margin: 32px 0;
    width: 100vw;
  }

  &.desktop {
    margin: 0 clamp(4px, 0.8vw, 24px);
  }
}

.pricing-free-month-tag {
  align-self: flex-end;

  background-color: $light-green;
  box-shadow: $standard-box-shadow;
  border: 1px solid $gray;
  border-bottom: none;
  padding: 6px 18px;

  p {
    text-transform: uppercase;
    color: $white;
    font-weight: 600;
    text-shadow: $standard-text-shadow;
    @include no-margin-padding;
  }

  &.mobile {
    margin: 0 4px 0 0;
  }

  &.desktop {
    margin: 0 10px 0 0;
  }
}

.pricing-product-body {
  @include center-column;
  width: 100%;
  background-color: $light-gray;

  &.mobile {
    border-bottom: 0.5px solid $gray;
    box-shadow: $standard-box-shadow;
  }

  &.desktop {
    border: 0.5px solid $gray;
    border-top: none;
  }
}

.pricing-product-body-divider {
  margin: 22px 0 0 0;
  width: 70%;
  border-bottom: 1px solid #999;
}

.pricing-product-button {
  text-transform: uppercase;

  &.premium {
    background-color: $dark-green;
  }

  &.business {
    background-color: $black;
  }
}
</style>
