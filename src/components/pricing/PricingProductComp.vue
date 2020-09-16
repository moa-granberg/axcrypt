<template>
  <article :class="`pricing-product-wrapper ${$mq}`">
    <div
      v-if="product.productName !== 'free'"
      :class="`pricing-free-month-tag ${$mq}`"
    >
      <p>{{ $t('OneFreeMonthLabel') }}</p>
    </div>

    <div
      :class="`pricing-product-heading-wrapper ${product.productName} ${$mq}`"
    >
      <h1 :class="`pricing-product-heading ${$mq}`">
        {{ $t(product.headingPhraseKey) }}
      </h1>
      <h2 :class="`pricing-product-subheading ${$mq}`">
        {{ $t(product.subheadingPhraseKey) }}
      </h2>
    </div>

    <div :class="`pricing-product-body ${$mq}`">
      <h1
        class="pricing-product-price"
        :class="[{ annual: annualActive }, $mq]"
      >
        {{ price }} <span>{{ currency }}</span>
      </h1>

      <p :class="`pricing-product-per-month ${$mq}`">{{ $t(perMonth) }}</p>

      <a
        :class="`standard-button small pricing-product-button ${product.productName} ${$mq} `"
        :href="product.buttonUrl"
      >
        {{ $t(product.buttonLabelPhraseKey) }}
      </a>

      <div
        v-if="$mq === 'mobile'"
        :class="`pricing-product-body-feature-toggle ${$mq}`"
        @click="showFeatureList = !showFeatureList"
      >
        <p v-if="showFeatureList">
          {{ $t('HideFeaturesLabel') }}
        </p>
        <p v-else>
          {{ $t('WhatsIncludedLabel') }}
        </p>

        <img
          class="pricing-product-body-feature-toggle-icon"
          :class="[{ up: showFeatureList }]"
          src="@/assets/icons/keyboard_arrow_down.svg"
          alt="drop_down"
        />
      </div>

      <div v-if="$mq === 'desktop'" class="pricing-product-body-divider"></div>

      <pricing-product-feature-list
        :show="showFeatureList || $mq === 'desktop'"
        :featureList="product.featureList"
      />

      <div
        :class="`pricing-product-read-more-wrapper ${product.productName} ${$mq}`"
        v-if="showFeatureList || $mq === 'desktop'"
      >
        <a v-if="product.readMoreUrl" :href="product.readMoreUrl">
          {{ $t(product.readMorePhraseKey) }}
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import PricingProductFeatureList from './PricingProductFeatureList';

export default {
  components: {
    PricingProductFeatureList,
  },

  props: {
    annualActive: Boolean,
    price: String,
    currency: String,
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

  computed: {
    perMonth() {
      return this.product.productName === 'premium'
        ? 'PerMonthLabel'
        : this.product.productName === 'business'
        ? 'PerMonthPerUserLabel'
        : '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricing-product-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.mobile {
    margin: 32px 0;
    width: 100vw;
  }

  &.desktop {
    margin: 0 clamp(4px, 0.8vw, 24px);
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
    border-bottom: 0.5px solid $gray;
    border-top: 0.5px solid $gray;
  }

  &.desktop {
    border-radius: 5px 5px 0 0;
    padding: 30px 0;
    border: 0.5px solid $gray;
  }
}

.pricing-free-month-tag {
  align-self: flex-end;

  background-color: $light-green;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid $gray;
  border-bottom: none;
  padding: 6px 18px;

  p {
    text-transform: uppercase;
    color: $white;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0;
  }

  &.mobile {
    margin: 0 4px 0 0;
  }

  &.desktop {
    margin: 0 10px 0 0;
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

.pricing-product-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: $light-gray;

  &.mobile {
    border-bottom: 0.5px solid $gray;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }

  &.desktop {
    border: 0.5px solid $gray;
    border-top: none;
  }
}

.pricing-product-price {
  font-size: 3rem;

  span {
    font-size: 2rem;
  }

  &.annual {
    color: #cb544c;
  }

  &.mobile {
    margin: 24px 0 0 0;
  }

  &.desktop {
    margin: 30px 0 0 0;
  }
}

.pricing-product-per-month {
  text-transform: uppercase;
  margin: 0 0 22px 0;

  &.mobile {
    font-size: 0.875rem;
  }

  &.desktop {
    font-size: 1rem;
    height: 22px;
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

.pricing-product-body-feature-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 0.875rem;
    font-style: italic;
  }
}

.pricing-product-body-feature-toggle-icon {
  margin: 0 0 0 4px;

  &.up {
    transform: rotate(180deg);
  }
}

.pricing-product-read-more-wrapper {
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 0.875rem;

  &.mobile {
    height: 37px;
    margin: 23px 0 0 0;
  }

  &.desktop {
    height: 42px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    color: $white;
  }

  &.free {
    background-color: #545454;
  }

  &.premium {
    background-color: $dark-green;
  }

  &.business {
    background-color: $black;
  }
}
</style>
