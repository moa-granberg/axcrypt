<template>
  <main>
    <mq-layout mq="mobile">
      <product-hero product="premium" :url="trialButtonUrl" />

      <product-body
        headerPhraseKey="PremiumFirstBodyHeading"
        :body="[
          {
            phraseKey: 'PremiumFirstBodyText1',
            url: trialButtonUrl,
          },
          { phraseKey: 'PremiumFirstBodyText2' },
          { phraseKey: 'PremiumFirstBodyText3' },
          { phraseKey: 'PremiumFirstBodyText4' },
          { phraseKey: 'PremiumFirstBodyText5' },
        ]"
      />

      <product-try-it-for-free product="premium" :url="trialButtonUrl" />

      <product-body
        headerPhraseKey="PremiumSecondBodyHeading"
        :body="[
          { phraseKey: 'PremiumSecondBodyText1' },
          { phraseKey: 'PremiumSecondBodyText2' },
        ]"
      />

      <product-premium-business-cta />

      <product-body
        headerPhraseKey="PremiumThirdBodyHeading"
        :body="[
          { phraseKey: 'PremiumThirdBodyText', url: '#/information/features' },
        ]"
      />
    </mq-layout>

    <mq-layout mq="desktop">
      <product-hero product="premium" />

      <section class="product-main-grid-wrapper">
        <product-body
          class="main-grid-body1"
          headerPhraseKey="PremiumFirstBodyHeading"
          :body="[
            {
              phraseKey: 'PremiumFirstBodyText1',
              url: 'https://account.axcrypt.net/en/Home/Purchase',
            },
            { phraseKey: 'PremiumFirstBodyText2' },
            { phraseKey: 'PremiumFirstBodyText3' },
            { phraseKey: 'PremiumFirstBodyText4' },
            { phraseKey: 'PremiumFirstBodyText5' },
          ]"
          :url="trialButtonUrl"
        />

        <div class="product-try-it-for-free-desktop-wrapper premium">
          <product-try-it-for-free-cta
            product="premium"
            :url="trialButtonUrl"
          />
          <product-try-it-for-free product="premium" :url="trialButtonUrl" />
        </div>

        <product-body
          class="main-grid-body2"
          headerPhraseKey="PremiumSecondBodyHeading"
          :body="[
            { phraseKey: 'PremiumSecondBodyText1' },
            { phraseKey: 'PremiumSecondBodyText2' },
          ]"
        />
      </section>

      <product-premium-business-cta />

      <section class="premium-third-body-wrapper">
        <product-body
          headerPhraseKey="PremiumThirdBodyHeading"
          :body="[
            {
              phraseKey: 'PremiumThirdBodyText',
              url: '#/information/features',
            },
          ]"
        />
        <img
          src="@/assets/view/product/more-information.png"
          alt="more information"
        />
      </section>
    </mq-layout>
  </main>
</template>

<script>
import ProductHero from '@/components/product/ProductHero';
import ProductBody from '@/components/product/ProductBody';
import ProductTryItForFree from '@/components/product/ProductTryItForFree';
import ProductTryItForFreeCta from '@/components/product/ProductTryItForFreeCta';
import ProductPremiumBusinessCta from '@/components/product/ProductPremiumBusinessCta';

export default {
  components: {
    ProductHero,
    ProductBody,
    ProductTryItForFree,
    ProductTryItForFreeCta,
    ProductPremiumBusinessCta,
  },

  data() {
    return {
      trialButtonUrl: 'https://account.axcrypt.net/en/Home/Login?purchase=true',
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/productView.scss';

.premium-third-body-wrapper {
  display: flex;
  justify-content: space-around;
  max-width: $max-viewport-width;
  margin: auto;

  img {
    margin: 0 0 20px 0;
  }
}
</style>
