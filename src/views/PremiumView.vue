<template>
  <main>
    <mq-layout mq="mobile">
      <product-hero product="premium" />

      <product-body
        headerPhraseKey="PremiumFirstBodyHeading"
        bodyPhraseKey="PremiumFirstBodyText"
      />

      <product-try-it-for-free product="premium" />

      <product-body
        headerPhraseKey="PremiumSecondBodyHeading"
        bodyPhraseKey="PremiumSecondBodyText"
      />

      <product-premium-business-cta />

      <product-body
        headerPhraseKey="PremiumThirdBodyHeading"
        bodyPhraseKey="PremiumThirdBodyText"
      />
    </mq-layout>

    <mq-layout mq="desktop">
      <product-hero product="premium" />

      <section class="product-main-grid-wrapper">
        <product-body
          class="main-grid-body1"
          headerPhraseKey="PremiumFirstBodyHeading"
          bodyPhraseKey="PremiumFirstBodyText"
        />

        <div class="product-try-it-for-free-desktop-wrapper premium">
          <product-try-it-for-free-cta product="premium" />
          <product-try-it-for-free product="premium" />
        </div>

        <product-body
          class="main-grid-body2"
          headerPhraseKey="PremiumSecondBodyHeading"
          bodyPhraseKey="PremiumSecondBodyText"
        />
      </section>

      <product-premium-business-cta />

      <section class="premium-third-body-wrapper">
        <product-body
          headerPhraseKey="PremiumThirdBodyHeading"
          bodyPhraseKey="PremiumThirdBodyText"
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
