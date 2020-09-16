<template>
  <section :class="`product-try-it-for-free-wrapper ${$mq} ${product}`">
    <h1 :class="'product-try-it-for-free-heading ' + $mq">
      {{ $t('ProductTryItForFreeYouGet') }}
    </h1>

    <product-try-it-for-free-selling-points-comp :product="product" />

    <article :class="'product-try-it-for-free-billing-wrapper ' + $mq">
      <h2 :class="'product-try-it-for-free-subheading ' + $mq">
        {{ $t('ProductTryItForFreeCostAfterTrial') }}
      </h2>

      <annual-monthly-switcher-comp
        :active="annualActive"
        @switchMonthly="handleClickMonthly"
        @switchYearly="handleClickYearly"
      />

      <price-display
        :annualActive="annualActive"
        :price="price"
        :currency="currency"
        :perMonthPhraseKey="'PerMonthLabel'"
      />

      <primary-button-comp
        phraseKey="ProductTryItForFreeStartButtonLabel"
        size="large"
        color="dark-green"
        :path="product === 'premium' ? '/premium-trial' : '/business-trial'"
      />
    </article>
  </section>
</template>

<script>
import PrimaryButtonComp from '@/components/PrimaryButtonComp';
import ProductTryItForFreeSellingPointsComp from '@/components/product/ProductTryItForFreeSellingPointsComp';
import AnnualMonthlySwitcherComp from '@/components/AnnualMonthlySwitcherComp';
import PriceDisplay from '@/components/PriceDisplay';
import { getPricing } from '@/utils/pricing/getPricing';

export default {
  props: {
    product: String,
  },

  components: {
    PrimaryButtonComp,
    ProductTryItForFreeSellingPointsComp,
    AnnualMonthlySwitcherComp,
    PriceDisplay,
  },

  data() {
    return {
      annualActive: false,
      price: '0',
      currency: 'SEK',
    };
  },

  methods: {
    handleClickMonthly() {
      if (this.annualActive) {
        this.annualActive = false;
        this.setPriceData('month');
      }
    },

    handleClickYearly() {
      if (!this.annualActive) {
        this.annualActive = true;
        this.setPriceData('year');
      }
    },

    async setPriceData(period) {
      const priceData = await getPricing(this.product, period);
      this.price = priceData.price;
      this.currency = priceData.currency;
    },
  },

  async created() {
    this.setPriceData('month');
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-try-it-for-free-wrapper {
  color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.mobile {
    &.premium {
      background: linear-gradient(
        to bottom,
        rgba(73, 119, 44, 0.7) 0%,
        rgba(73, 119, 44, 0.8) 70%,
        rgba(33, 80, 6, 0.9) 100%
      );
    }
    &.business {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.8) 70%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }
}

.product-try-it-for-free-heading {
  font-size: 1.125rem;
}

.product-try-it-for-free-billing-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.mobile {
    padding: 0 0 28px 0;
  }

  &.desktop {
    padding: 0 0 40px 0;
  }
}

.product-try-it-for-free-subheading {
  font-size: 1.125rem;
  margin: 0;
  border-top: 2px solid $white;

  &.mobile {
    padding: 10px 0;
  }

  &.desktop {
    padding: 20px 0;
  }
}
</style>
