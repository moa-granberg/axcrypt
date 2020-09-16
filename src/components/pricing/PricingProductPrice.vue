<template>
  <div class="pricig-product-price-wrapper">
    <h1 class="pricing-product-price" :class="[{ annual: annualActive }, $mq]">
      {{ price }} <span>{{ currency }}</span>
    </h1>

    <p :class="`pricing-product-per-month ${$mq}`">
      {{ $t(perMonthPhraseKey) }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    annualActive: Boolean,
    price: String,
    currency: String,
    perMonthPhraseKey: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricig-product-price-wrapper {
  display: grid;
  place-items: center;
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
</style>
