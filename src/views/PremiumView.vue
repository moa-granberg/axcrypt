<template>
  <main>
    <product-hero-comp />
    <product-body-comp headerPhraseKey="PremiumFirstBodyHeading" bodyPhraseKey="PremiumFirstBodyText" />
    <product-try-it-for-free-comp />
    <product-body-comp headerPhraseKey="PremiumSecondBodyHeading" bodyPhraseKey="PremiumSecondBodyText" />
    <product-premium-business-cta-comp />
    <product-body-comp headerPhraseKey="PremiumThirdBodyHeading" bodyPhraseKey="PremiumThirdBodyText" />
  </main>
</template>

<script>
import ProductHeroComp from '@/components/product/ProductHeroComp';
import ProductBodyComp from '@/components/product/ProductBodyComp';
import ProductTryItForFreeComp from '@/components/product/ProductTryItForFreeComp';
import ProductPremiumBusinessCtaComp from '@/components/product/ProductPremiumBusinessCtaComp';

export default {
  components: {
    ProductHeroComp,
    ProductBodyComp,
    ProductTryItForFreeComp,
    ProductPremiumBusinessCtaComp,
  }
}
</script>
