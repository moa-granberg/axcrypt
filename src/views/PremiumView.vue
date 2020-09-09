<template>
  <main>
    <mq-layout mq="mobile">
      <product-hero-comp product="premium" />

      <product-body-comp
        headerPhraseKey="PremiumFirstBodyHeading"
        bodyPhraseKey="PremiumFirstBodyText"
      />

      <product-try-it-for-free-comp product="premium" />

      <product-body-comp
        headerPhraseKey="PremiumSecondBodyHeading"
        bodyPhraseKey="PremiumSecondBodyText"
      />

      <product-premium-business-cta-comp />

      <product-body-comp
        headerPhraseKey="PremiumThirdBodyHeading"
        bodyPhraseKey="PremiumThirdBodyText"
      />
    </mq-layout>

    <mq-layout mq="desktop">
      <product-hero-comp product="premium" />

      <section class="product-main-grid-wrapper">
        <product-body-comp
          class="main-grid-body1"
          headerPhraseKey="PremiumFirstBodyHeading"
          bodyPhraseKey="PremiumFirstBodyText"
        />

        <div class="product-try-it-for-free-desktop-wrapper premium">
          <product-try-it-for-free-cta-comp product="premium" />
          <product-try-it-for-free-comp product="premium" />
        </div>

        <product-body-comp
          class="main-grid-body2"
          headerPhraseKey="PremiumSecondBodyHeading"
          bodyPhraseKey="PremiumSecondBodyText"
        />
      </section>

      <product-premium-business-cta-comp />

      <section class="premium-third-body-wrapper">
        <product-body-comp
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
import ProductHeroComp from '@/components/product/ProductHeroComp';
import ProductBodyComp from '@/components/product/ProductBodyComp';
import ProductTryItForFreeComp from '@/components/product/ProductTryItForFreeComp';
import ProductTryItForFreeCtaComp from '@/components/product/ProductTryItForFreeCtaComp';
import ProductPremiumBusinessCtaComp from '@/components/product/ProductPremiumBusinessCtaComp';

export default {
  components: {
    ProductHeroComp,
    ProductBodyComp,
    ProductTryItForFreeComp,
    ProductTryItForFreeCtaComp,
    ProductPremiumBusinessCtaComp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/productView.scss';

.premium-third-body-wrapper {
  display: flex;
  justify-content: space-around;

  img {
    margin: 0 0 20px 0;
  }
}
</style>
