<template>
  <main>
    <product-hero-comp />

    <mq-layout mq="desktop" class="product-grid-wrapper">
      <product-body-comp
        class="grid-body1"
        headerPhraseKey="PremiumFirstBodyHeading"
        bodyPhraseKey="PremiumFirstBodyText"
      />
      <div class="product-try-it-for-free-desktop-wrapper">
        <product-try-it-for-free-cta-comp />
        <product-try-it-for-free-comp />
      </div>
      <product-body-comp
        class="grid-body2"
        headerPhraseKey="PremiumSecondBodyHeading"
        bodyPhraseKey="PremiumSecondBodyText"
      />
    </mq-layout>

    <mq-layout mq="mobile">
      <product-body-comp
        headerPhraseKey="PremiumFirstBodyHeading"
        bodyPhraseKey="PremiumFirstBodyText"
      />
      <product-try-it-for-free-comp />
      <product-body-comp
        headerPhraseKey="PremiumSecondBodyHeading"
        bodyPhraseKey="PremiumSecondBodyText"
      />
    </mq-layout>

    <product-premium-business-cta-comp />
    <product-body-comp
      headerPhraseKey="PremiumThirdBodyHeading"
      bodyPhraseKey="PremiumThirdBodyText"
    />
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

.product-grid-wrapper {
  display: grid;
  grid-template-columns: repeat(1fr, 4);
  grid-template-areas:
    ' . body1 aside .'
    ' . body2 aside .';
  justify-items: center;
  align-items: center;
}

.grid-body1 {
  grid-area: body1;
  max-width: 600px;
}

.grid-body2 {
  grid-area: body2;
  max-width: 600px;
  align-self: flex-start;
}

.product-try-it-for-free-desktop-wrapper {
  grid-area: aside;
  position: relative;
  top: -225px;
  margin: 0 0 -200px 0;
  width: 450px;
  background: linear-gradient(
    to bottom,
    rgba(33, 80, 6, 0.9) 0%,
    rgba(73, 119, 44, 0.8) 70%,
    rgba(73, 119, 44, 0.7) 100%
  );
}
</style>
