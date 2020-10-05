<template>
  <section :class="`product-try-it-for-free-wrapper ${$mq} ${product}`">
    <h1 :class="'product-try-it-for-free-heading heading-medium ' + $mq">
      {{ $t('ProductTryItForFreeYouGet') }}
    </h1>

    <product-try-it-for-free-selling-points :product="product" />

    <article :class="'product-try-it-for-free-billing-wrapper ' + $mq">
      <h2 :class="'product-try-it-for-free-subheading ' + $mq">
        {{ $t('ProductTryItForFreeCostAfterTrial') }}
      </h2>

      <annual-monthly-switcher
        :active="annualActive"
        @switchMonthly="handleClickMonthly"
        @switchYearly="handleClickYearly"
      />

      <price-display :annualActive="annualActive" :product="product" />

      <a :class="['standard-button large', $mq]" :href="url">
        {{ $t('ProductTryItForFreeButtonLabel') }}
      </a>
    </article>
  </section>
</template>

<script>
import ProductTryItForFreeSellingPoints from '@/components/product/ProductTryItForFreeSellingPoints';
import AnnualMonthlySwitcher from '@/components/AnnualMonthlySwitcher';
import PriceDisplay from '@/components/PriceDisplay';

export default {
  props: {
    product: String,
    url: String,
  },

  components: {
    ProductTryItForFreeSellingPoints,
    AnnualMonthlySwitcher,
    PriceDisplay,
  },

  data() {
    return {
      annualActive: true,
    };
  },

  methods: {
    handleClickMonthly() {
      if (this.annualActive) {
        this.annualActive = false;
      }
    },

    handleClickYearly() {
      if (!this.annualActive) {
        this.annualActive = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-try-it-for-free-wrapper {
  color: $white;
  @include center-column;

  &.mobile {
    &.premium {
      background: linear-gradient(
        to bottom,
        rgba(33, 80, 6, 0.9) 0%,
        rgba(73, 119, 44, 0.8) 70%,
        rgba(73, 119, 44, 0.7) 100%
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
  @include center-column;

  &.mobile {
    padding: 0 0 28px 0;
  }

  &.desktop {
    padding: 0 0 40px 0;
  }
}

.product-try-it-for-free-subheading {
  font-size: 1.125rem;
  border-top: 2px solid $white;

  &.mobile {
    padding: 10px 0;
  }

  &.desktop {
    @include no-margin-padding;
    padding: 20px 0;
  }
}
</style>
