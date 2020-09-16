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
      <pricing-product :product="free" price="0" :currency="currency" />

      <pricing-product
        :product="premium"
        :annualActive="annualActive"
        :price="premiumPrice"
        :currency="currency"
      />

      <pricing-product
        :product="business"
        :annualActive="annualActive"
        :price="businessPrice"
        :currency="currency"
      />
    </section>
  </main>
</template>

<script>
import AnnualMonthlySwitcher from '@/components/AnnualMonthlySwitcher';
import PricingProduct from '@/components/pricing/PricingProduct';
import { getPricing } from '@/utils/pricing/getPricing';

export default {
  components: {
    AnnualMonthlySwitcher,
    PricingProduct,
  },

  data() {
    return {
      annualActive: false,
      premiumPrice: '0',
      businessPrice: '0',
      currency: 'SEK',
      free: {},
      premium: {},
      business: {},
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
      const premiumPriceData = await getPricing('premium', period);
      const businessPriceData = await getPricing('business', period);
      this.premiumPrice = premiumPriceData.price;
      this.businessPrice = businessPriceData.price;
      this.currency = premiumPriceData.currency;
    },

    async getProductJson() {
      this.free = await import('@/data/pricing/free.json');
      this.premium = await import('@/data/pricing/premium.json');
      this.business = await import('@/data/pricing/business.json');
    },
  },

  async created() {
    this.setPriceData('month');
    this.getProductJson();
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricing-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.mobile {
    margin: 32px 0 0 0;
  }

  &.desktop {
    margin: 70px 0;
  }
}

.pricing-heading {
  margin: 0;
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
