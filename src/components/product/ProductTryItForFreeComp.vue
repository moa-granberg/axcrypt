<template>
  <section :class="'product-try-it-for-free-wrapper ' + $mq">
    <h1 :class="'product-try-it-for-free-heading ' + $mq">
      {{ $t('ProductTryItForFreeYouGet') }}
    </h1>

    <product-try-it-for-free-selling-points-comp />

    <article :class="'product-try-it-for-free-billing-wrapper ' + $mq">
      <h2 :class="'product-try-it-for-free-subheading ' + $mq">
        {{ $t('ProductTryItForFreeCostAfterTrial') }}
      </h2>
      <div :class="'product-try-it-for-free-pricing-btn-wrapper ' + $mq">
        <button
          :class="[{ active: annualActive }, $mq]"
          @click="annualActive = true"
        >
          {{ $t('ProductTryItForFreeAnnualButtonLabel') }}
        </button>
        <button
          :class="[{ active: !annualActive }, $mq]"
          @click="annualActive = false"
        >
          {{ $t('ProductTryItForFreeMonthlyButtonLabel') }}
        </button>
      </div>
      <h1
        class="product-try-it-for-free-pricing"
        :class="[{ annual: annualActive }, $mq]"
      >
        41.25 <span>SEK</span>
      </h1>
      <h3 :class="'product-try-it-for-free-per-month ' + $mq">
        {{ $t('ProductTryItForFreePerMonth') }}
      </h3>
      <primary-button-comp
        phraseKey="ProductTryItForFreeStartButtonLabel"
        size="large"
      />
    </article>
  </section>
</template>

<script>
import PrimaryButtonComp from '@/components/PrimaryButtonComp';
import ProductTryItForFreeSellingPointsComp from '@/components/product/ProductTryItForFreeSellingPointsComp';

export default {
  components: {
    PrimaryButtonComp,
    ProductTryItForFreeSellingPointsComp,
  },

  data() {
    return {
      annualActive: false,
    };
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
    background: linear-gradient(
      to bottom,
      rgba(73, 119, 44, 0.7) 0%,
      rgba(73, 119, 44, 0.8) 70%,
      rgba(33, 80, 6, 0.9) 100%
    );
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
  padding: 0 0 28px 0;
}

.product-try-it-for-free-subheading {
  font-size: 1.125rem;
  padding: 10px 0;
  margin: 0;
  border-top: 2px solid $white;
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
  font-size: 2.25rem;
  margin: 10px 0 0 0;
  &.annual {
    color: #ad3f38;
  }
  span {
    font-size: 2.25rem * 0.75;
  }
}

.product-try-it-for-free-per-month {
  font-size: 2.25rem * 0.4;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0 0 13px 0;
}
</style>
