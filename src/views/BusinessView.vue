<template>
  <main>
<product-hero-comp product="business" />
  </main>
</template>

<script>
import ProductHeroComp from '@/components/product/ProductHeroComp';

export default {
  components: {
    ProductHeroComp,
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';


</style>