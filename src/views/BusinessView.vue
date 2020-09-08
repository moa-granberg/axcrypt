<template>
  <main>
    <product-hero-comp product="business" />

    <mq-layout mq="mobile">
      <product-body-comp
        headerPhraseKey="BusinessFirstBodyHeading"
        bodyPhraseKey="BusinessFirstBodyText"
      />
      <!-- <product-try-it-for-free-comp /> -->
      <!-- Why AxCrypt Business Comp -->
    </mq-layout>
  </main>
</template>

<script>
import ProductHeroComp from '@/components/product/ProductHeroComp';
import ProductBodyComp from '@/components/product/ProductBodyComp';
// import ProductTryItForFreeComp from '@/components/product/ProductTryItForFreeComp';

export default {
  components: {
    ProductHeroComp,
    ProductBodyComp,
    // ProductTryItForFreeComp,
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';


</style>