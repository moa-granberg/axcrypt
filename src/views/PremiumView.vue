<template>
  <main>
    <product-hero-comp />
    <product-body-comp />
    <product-try-it-for-free-comp />
    <product-second-body-comp />
    <product-premium-business-cta-comp />
    <product-more-information-comp />
  </main>
</template>

<script>
import ProductHeroComp from '@/components/product/ProductHeroComp';
import ProductBodyComp from '@/components/product/ProductBodyComp';
import ProductTryItForFreeComp from '@/components/product/ProductTryItForFreeComp';
import ProductSecondBodyComp from '@/components/product/ProductSecondBodyComp';
import ProductPremiumBusinessCtaComp from '@/components/product/ProductPremiumBusinessCtaComp';
import ProductMoreInformationComp from '@/components/product/ProductMoreInformationComp';

export default {
  components: {
    ProductHeroComp,
    ProductBodyComp,
    ProductTryItForFreeComp,
    ProductSecondBodyComp,
    ProductPremiumBusinessCtaComp,
    ProductMoreInformationComp
  }
}
</script>
