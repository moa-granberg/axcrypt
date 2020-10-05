<template>
  <main :class="`pricing-wrapper ${$mq}`">
    <h1 :class="`pricing-heading heading-jumbo ${$mq}`">
      {{ $t('PricingLinkLabel') }}
    </h1>

    <p :class="`pricing-subheading heading-medium ${$mq}`">
      {{ $t('PricingSubheading') }}
    </p>

    <annual-monthly-switcher
      :active="annualActive"
      @switchMonthly="handleClickMonthly"
      @switchYearly="handleClickYearly"
    />

    <section :class="`pricing-product-main-wrapper ${$mq}`">
      <pricing-product :product="free" />

      <pricing-product :product="premium" :annualActive="annualActive" />

      <pricing-product :product="business" :annualActive="annualActive" />
    </section>
  </main>
</template>

<script>
import AnnualMonthlySwitcher from '@/components/AnnualMonthlySwitcher';
import PricingProduct from '@/components/pricing/PricingProduct';
import free from '@/data/pricing/free';
import premium from '@/data/pricing/premium';
import business from '@/data/pricing/business';

export default {
  components: {
    AnnualMonthlySwitcher,
    PricingProduct,
  },

  data() {
    return {
      annualActive: true,
      premiumPrice: '',
      businessPrice: '',
      free,
      premium,
      business,
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

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricing-wrapper {
  @include center-column;

  &.mobile {
    margin: $margin-mobile 0 0 0;
  }

  &.desktop {
    margin: 70px 0;
  }
}

.pricing-heading {
  @include no-margin-padding;
}

.pricing-subheading {
  &.mobile {
    margin: 14px 0 18px 0;
  }
  &.desktop {
    margin: 34px 0 14px 0;
  }
}

.pricing-product-main-wrapper {
  &.desktop {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 82px 0 0 0;
  }
}
</style>
