<template>
  <main :class="`pricing-wrapper ${$mq}`">
    <h1 :class="`pricing-heading ${$mq}`">
      {{ $t('PricingLinkLabel') }}
    </h1>
    <p :class="`pricing-subheading ${$mq}`">
      {{ $t('PricingSubheading') }}
    </p>
    <annual-monthly-switcher-comp
      :active="annualActive"
      @switchMonthly="handleClickMonthly"
      @switchYearly="handleClickYearly"
    />
    <section>
      <pricing-product-comp :product="free" price="0" :currency="currency" />
      <pricing-product-comp
        :product="premium"
        :annualActive="annualActive"
        :price="premiumPrice"
        :currency="currency"
      />
      <pricing-product-comp
        :product="business"
        :annualActive="annualActive"
        :price="businessPrice"
        :currency="currency"
      />
    </section>
  </main>
</template>

<script>
import AnnualMonthlySwitcherComp from '@/components/AnnualMonthlySwitcherComp';
import PricingProductComp from '@/components/pricing/PricingProductComp';
import { getPricing } from '@/utils/pricing/getPricing';

export default {
  components: {
    AnnualMonthlySwitcherComp,
    PricingProductComp,
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
    margin: 70px 0 0 0;
  }
  &.desktop {
    margin: 156px 0 0 0;
  }
}

.pricing-heading {
  margin: 0;

  &.mobile {
    font-size: 1.5rem;
  }

  &.desktop {
    font-size: 2.25rem;
  }
}

.pricing-subheading {
  &.mobile {
    margin: 14px 0 18px 0;
    font-size: 1.125rem;
  }
  &.desktop {
    margin: 34px 0 14px 0;
    font-size: 1.5rem;
  }
}
</style>
