<template>
  <main>
    <mq-layout mq="mobile">
      <product-hero-comp product="business" />

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

      <product-body-comp
        headerPhraseKey="BusinessAfterTrialHeading"
        bodyPhraseKey="BusinessAfterTrialBodyText"
      />

      <product-body-comp
        headerPhraseKey="ContactHeading"
        bodyPhraseKey="BusinessContactBodyText"
      />

      <business-card-comp :person="contactPerson" />
    </mq-layout>

    <mq-layout mq="desktop">
      <product-hero-comp product="business" />

      <section class="product-main-grid-wrapper">
        <product-body-comp
          class="main-grid-body1"
          headerPhraseKey="BusinessFirstBodyHeading"
          bodyPhraseKey="BusinessFirstBodyText"
        />

        <feature-list-comp
          class="main-grid-body2"
          headingPhraseKey="WhyAxCryptBusiness"
          :list="businessFeatureList"
        />

        <div class="product-try-it-for-free-desktop-wrapper business">
          <product-try-it-for-free-cta-comp product="business" />
          <product-try-it-for-free-comp product="business" />
        </div>
      </section>

      <product-business-big-team-cta-comp />

      <section class="business-after-trial-wrapper">
        <product-body-comp
          class="grid-body2"
          headerPhraseKey="PremiumSecondBodyHeading"
          bodyPhraseKey="PremiumSecondBodyText"
        />
        <img src="@/assets/view/product/what-happens-1.png" alt="" />
        <img src="@/assets/view/product/what-happens-2.png" alt="" />

        <div class="business-contact-wrapper">
          <product-body-comp
            headerPhraseKey="ContactHeading"
            bodyPhraseKey="BusinessContactBodyText"
          />

          <business-card-comp :person="contactPerson" />
        </div>
      </section>
    </mq-layout>
  </main>
</template>

<script>
import ProductHeroComp from '@/components/product/ProductHeroComp';
import ProductBodyComp from '@/components/product/ProductBodyComp';
import ProductTryItForFreeComp from '@/components/product/ProductTryItForFreeComp';
import ProductTryItForFreeCtaComp from '@/components/product/ProductTryItForFreeCtaComp';
import FeatureListComp from '@/components/FeatureListComp.vue';
import ProductBusinessBigTeamCtaComp from '@/components/product/ProductBusinessBigTeamCtaComp.vue';
import BusinessCardComp from '@/components/product/BusinessCardComp.vue';

export default {
  components: {
    ProductHeroComp,
    ProductBodyComp,
    ProductTryItForFreeComp,
    ProductTryItForFreeCtaComp,
    FeatureListComp,
    ProductBusinessBigTeamCtaComp,
    BusinessCardComp,
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

      contactPerson: {
        src: '/view/product/angelique.png',
        name: 'Angélique Huige',
        jobTitle: 'Business Manager',
        email: 'angelique.huige@axcrypt.net',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/productView.scss';
</style>
