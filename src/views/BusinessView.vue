<template>
  <main>
    <mq-layout mq="mobile">
      <product-hero product="business" />

      <product-body
        headerPhraseKey="BusinessFirstBodyHeading"
        :body="[
          { phraseKey: 'BusinessFirstBodyText1' },
          { phraseKey: 'BusinessFirstBodyText2' },
          { phraseKey: 'BusinessFirstBodyText3' },
          { phraseKey: 'BusinessFirstBodyText4' },
        ]"
      />

      <product-try-it-for-free product="business" />

      <feature-list
        headingPhraseKey="WhyAxCryptBusiness"
        :list="businessFeatureList"
      />

      <product-business-big-team-cta />

      <product-body
        headerPhraseKey="BusinessAfterTrialHeading"
        :body="[
          { phraseKey: 'BusinessAfterTrialBodyText1' },
          { phraseKey: 'BusinessAfterTrialBodyText2' },
        ]"
      />

      <product-body
        headerPhraseKey="ContactHeading"
        :body="[{ phraseKey: 'BusinessContactBodyText' }]"
      />

      <business-card :class="['business-card', $mq]" :person="contactPerson" />
    </mq-layout>

    <mq-layout mq="desktop">
      <product-hero product="business" />

      <section class="product-main-grid-wrapper">
        <product-body
          class="main-grid-body1"
          headerPhraseKey="BusinessFirstBodyHeading"
          :body="[
            { phraseKey: 'BusinessFirstBodyText1' },
            { phraseKey: 'BusinessFirstBodyText2' },
            { phraseKey: 'BusinessFirstBodyText3' },
            { phraseKey: 'BusinessFirstBodyText4' },
          ]"
        />

        <feature-list
          class="main-grid-body2"
          headingPhraseKey="WhyAxCryptBusiness"
          :list="businessFeatureList"
        />

        <div class="product-try-it-for-free-desktop-wrapper business">
          <product-try-it-for-free-cta product="business" />
          <product-try-it-for-free product="business" />
        </div>
      </section>

      <product-business-big-team-cta />

      <section class="business-after-trial-wrapper">
        <product-body
          class="grid-body2"
          headerPhraseKey="BusinessAfterTrialHeading"
          :body="[
            { phraseKey: 'BusinessAfterTrialBodyText1' },
            { phraseKey: 'BusinessAfterTrialBodyText2' },
          ]"
        />
        <img src="@/assets/view/product/what-happens-1.png" alt="" />
        <img src="@/assets/view/product/what-happens-2.png" alt="" />

        <div class="business-contact-wrapper">
          <product-body
            headerPhraseKey="ContactHeading"
            :body="[{ phraseKey: 'BusinessContactBodyText' }]"
          />

          <business-card
            :class="['business-card', $mq]"
            :person="contactPerson"
          />
        </div>
      </section>
    </mq-layout>
  </main>
</template>

<script>
import ProductHero from '@/components/product/ProductHero';
import ProductBody from '@/components/product/ProductBody';
import ProductTryItForFree from '@/components/product/ProductTryItForFree';
import ProductTryItForFreeCta from '@/components/product/ProductTryItForFreeCta';
import FeatureList from '@/components/FeatureList';
import ProductBusinessBigTeamCta from '@/components/product/ProductBusinessBigTeamCta';
import BusinessCard from '@/components/BusinessCard';
import businessFeatureList from '@/data/product/business-feature-list';

export default {
  components: {
    ProductHero,
    ProductBody,
    ProductTryItForFree,
    ProductTryItForFreeCta,
    FeatureList,
    ProductBusinessBigTeamCta,
    BusinessCard,
  },

  data() {
    return {
      businessFeatureList,

      contactPerson: {
        src: '/team-photos/angelique-150x150.png',
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

.business-after-trial-wrapper {
  display: grid;
  grid: 1fr 1fr / 1fr 1fr;
  margin: 2rem 0;
  align-items: center;
  justify-items: center;
  max-width: 1300px;
  margin: auto;

  img {
    width: 400px;
  }
}

.business-card {
  &.mobile {
    margin: 0 0 $margin-mobile $margin-mobile;
  }
  &.desktop {
    margin: 0 0 $margin-desktop $margin-desktop;
  }
}
</style>
