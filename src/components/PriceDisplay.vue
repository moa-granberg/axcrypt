<template>
  <div class="price-display-price-wrapper">
    <p :class="[{ visible: comparisonPriceVisible }, 'price-comparison', $mq]">
      {{ comparisonPrice }} {{ currency }}
    </p>
    <h1
      v-if="price"
      class="price-display-price"
      :class="[{ annual: annualActive }, $mq]"
    >
      {{ price }} <span>{{ currency }}</span>
    </h1>
    <img
      v-else
      src="@/assets/axcrypt-spinner.svg"
      alt=""
      class="price-display-price"
      :class="[{ annual: annualActive }, $mq]"
    />

    <p :class="`price-display-per-month body-text-large ${$mq}`">
      {{ $t(perMonth) }}
    </p>
  </div>
</template>

<script>
import { getPricing } from '@/utils/pricing/getPricing';

export default {
  props: {
    annualActive: Boolean,
    product: String,
  },

  data() {
    return {
      price: null,
      comparisonPrice: null,
      currency: null,
    };
  },

  computed: {
    perMonth() {
      return this.product === 'premium'
        ? 'PerMonthLabel'
        : this.product === 'business'
        ? 'PerMonthPerUserLabel'
        : '';
    },

    comparisonPriceVisible() {
      return this.annualActive && this.product !== 'free';
    },
  },

  methods: {
    async getPriceData(period) {
      return this.product === 'business'
        ? await getPricing('business', period)
        : await getPricing('premium', period);
    },

    async setPriceData(period) {
      const priceData = await this.getPriceData(period);
      this.price = this.product === 'free' ? '0' : priceData.price;
      this.currency = priceData.currency;
    },

    async setComparisonPrice() {
      const priceData = await this.getPriceData('month');
      this.comparisonPrice = this.product === 'free' ? '0' : priceData.price;
    },
  },

  created() {
    this.setPriceData(this.annualActive ? 'year' : 'month');
    this.setComparisonPrice();
  },

  updated() {
    this.setPriceData(this.annualActive ? 'year' : 'month');
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.price-display-price-wrapper {
  @include center-column;
}

.price-comparison {
  margin-bottom: 0;
  font-weight: 600;
  align-self: flex-end;
  text-decoration: line-through;
  opacity: 0;

  &.visible {
    opacity: 1;
  }
}

.price-display-price {
  @include no-margin-padding;
  font-size: 3rem;

  span {
    font-size: 2rem;
  }

  &.annual {
    color: #cb544c;
  }
}

.price-display-per-month {
  text-transform: uppercase;
  margin: 0 0 22px 0;

  &.desktop {
    height: 22px;
  }
}
</style>
