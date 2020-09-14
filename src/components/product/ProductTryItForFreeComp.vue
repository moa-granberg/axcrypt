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
      <div :class="'product-try-it-for-free-pricing-btn-wrapper ' + $mq">
        <button
          :class="[{ active: annualActive }, $mq]"
          @click="handleClickYearly"
        >
          {{ $t('ProductTryItForFreeAnnualButtonLabel') }}
        </button>
        <button
          :class="[{ active: !annualActive }, $mq]"
          @click="handleClickMonthly"
        >
          {{ $t('ProductTryItForFreeMonthlyButtonLabel') }}
        </button>
      </div>
      <h1
        class="product-try-it-for-free-pricing"
        :class="[{ annual: annualActive }, $mq]"
      >
        {{ price }} <span>{{ currency }}</span>
      </h1>
      <h3 :class="'product-try-it-for-free-per-month ' + $mq">
        {{ $t('ProductTryItForFreePerMonth') }}
      </h3>
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

export default {
  props: {
    product: String,
  },

  components: {
    PrimaryButtonComp,
    ProductTryItForFreeSellingPointsComp,
  },

  data() {
    return {
      annualActive: false,
      monthly: [],
      yearly: [],
      price: 0,
      currency: 'SEK',
    };
  },

  methods: {
    async getCurrencies() {
      if (this.product === 'premium') {
        const monthlyResponse = await import(
          '@/utils/pricing/premium-monthly.json'
        );
        this.monthly = monthlyResponse.default.pricinglist;

        const yearlyResponse = await import(
          '@/utils/pricing/premium-yearly.json'
        );
        this.yearly = yearlyResponse.default.pricinglist;
      } else {
        const monthlyResponse = await import(
          '@/utils/pricing/business-monthly.json'
        );
        this.monthly = monthlyResponse.default.pricinglist;

        const yearlyResponse = await import(
          '@/utils/pricing/business-yearly.json'
        );
        this.yearly = yearlyResponse.default.pricinglist;
      }
    },

    getPrice(currency, period) {
      const priceItem = period.filter(item => item.currency === currency);
      let newPrice = 0;

      if (!priceItem) {
        const defaultItem = period.filter(item => item.is_default);
        newPrice = Number(defaultItem[0].rounded_amount);
      } else {
        newPrice = Number(priceItem[0].rounded_amount);
      }
      this.price =
        period === this.yearly
          ? (newPrice / 12).toFixed(2)
          : newPrice.toFixed(2);
    },

    handleClickMonthly() {
      this.annualActive = false;
      this.getPrice(this.currency, this.monthly);
    },

    handleClickYearly() {
      this.annualActive = true;
      this.getPrice(this.currency, this.yearly);
    },
  },

  async created() {
    await this.getCurrencies();
    this.getPrice(this.currency, this.monthly);
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

.product-try-it-for-free-pricing-btn-wrapper {
  button {
    width: 146px;
    height: 35px;
    text-transform: uppercase;
    font-weight: 600;
    border: 2px solid $dark-green;

    color: $dark-green;

    &.active {
      background-color: $dark-green;
      color: $white;
    }

    &:first-of-type {
      border-radius: 2px 0 0 2px;
    }

    &:last-of-type {
      border-radius: 0 2px 2px 0;
    }
  }
}

.product-try-it-for-free-pricing {
  &.annual {
    color: #ad3f38;
  }

  &.mobile {
    margin: 10px 0 0 0;
    font-size: 2.25rem;

    span {
      font-size: 2.25rem * 0.75;
    }
  }

  &.desktop {
    margin: 30px 0 0 0;
    font-size: 2.5rem;

    span {
      font-size: 2.5rem * 0.75;
    }
  }
}

.product-try-it-for-free-per-month {
  text-transform: uppercase;
  font-weight: 400;

  &.mobile {
    margin: 0 0 13px 0;
    font-size: 2.25rem * 0.4;
  }

  &.desktop {
    font-size: 2.5rem * 0.4;
    margin: 0 0 20px 0;
  }
}
</style>
