<template>
  <div class="price-display-price-wrapper">
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
  },

  methods: {
    async setPriceData(period) {
      const priceData =
        this.product === 'business'
          ? await getPricing('business', period)
          : await getPricing('premium', period);
      this.price = this.product === 'free' ? '0' : priceData.price;
      this.currency = priceData.currency;
    },
  },

  created() {
    this.setPriceData(this.annualActive ? 'year' : 'month');
  },

  updated() {
    this.setPriceData(this.annualActive ? 'year' : 'month');
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.price-display-price-wrapper {
  display: grid;
  place-items: center;
}

.price-display-price {
  font-size: 3rem;

  span {
    font-size: 2rem;
  }

  &.annual {
    color: #cb544c;
  }

  &.mobile {
    margin: $margin-mobile 0 0 0;
  }

  &.desktop {
    margin: 30px 0 0 0;
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
