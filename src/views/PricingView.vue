<template>
  <main>
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
  </main>
</template>

<script>
import AnnualMonthlySwitcherComp from '@/components/AnnualMonthlySwitcherComp';
import { getPricing } from '@/utils/pricing/getPricing';

export default {
  components: {
    AnnualMonthlySwitcherComp,
  },

  data(){
    return {
      annualActive: false,
      premiumPrice: 0,
      businessPrice: 0,
      currency: 'SEK',
    }
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
  },

  async created() {
    this.setPriceData('month');
  },
}
</script>

<style lang="scss" scoped></style>
