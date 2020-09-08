<template>
  <main>
    <product-hero-comp product="business" />

    <mq-layout mq="mobile">
      <product-body-comp
        headerPhraseKey="BusinessFirstBodyHeading"
        bodyPhraseKey="BusinessFirstBodyText"
      />
      <product-try-it-for-free-comp product="business" />
      <feature-list-comp
        headingPhraseKey="WhyAxCryptBusiness"
        :list="businessFeatureList"
      />
      <product-business-big-team-cta-comp />
    </mq-layout>
  </main>
</template>

<script>
import ProductHeroComp from '@/components/product/ProductHeroComp';
import ProductBodyComp from '@/components/product/ProductBodyComp';
import ProductTryItForFreeComp from '@/components/product/ProductTryItForFreeComp';
import FeatureListComp from '@/components/FeatureListComp.vue';
import ProductBusinessBigTeamCtaComp from '@/components/product/ProductBusinessBigTeamCtaComp.vue';

export default {
  components: {
    ProductHeroComp,
    ProductBodyComp,
    ProductTryItForFreeComp,
    FeatureListComp,
    ProductBusinessBigTeamCtaComp,
  },

  data() {
    return {
      businessFeatureList: [
        {
          phraseKey: 'BusinessFeatureListBestEncryption',
          src: '/icons/check.svg',
        },
        {
          phraseKey: 'BusinessFeatureListMadeInSweden',
          src: '/icons/outlined_flag.svg',
        },
        {
          phraseKey: 'BusinessFeatureListFlexibleMonthly',
          src: '/icons/payment.svg',
        },
        {
          phraseKey: 'BusinessFeatureListAvailableFor',
          src: '/icons/computer.svg',
        },
        {
          phraseKey: 'BusinessFeatureListDataProtection',
          src: '/icons/security.svg',
        },
        {
          phraseKey: 'BusinessFeatureListTeamCollaboration',
          src: '/icons/people.svg',
        },
        {
          phraseKey: 'BusinessFeatureListNoEncryption',
          src: '/icons/book.svg',
        },
        {
          phraseKey: 'BusinessFeatureListPurchangeAnd',
          src: '/icons/add_box.svg',
        },
        {
          phraseKey: 'BusinessFeatureListAccessTo',
          src: '/icons/playlist_add.svg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>
