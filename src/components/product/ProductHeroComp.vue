<template>
  <section :class="'product-hero-wrapper ' + $mq">
    <div :class="'product-hero-headings-wrapper ' + $mq">
      <h2 :class="'product-hero-preheading ' + $mq">AxCrypt</h2>
      <h1 :class="'product-hero-heading ' + $mq"> {{$t('PremiumLinkLabel')}} </h1>
      <h3 :class="'product-hero-subheading ' + $mq"> {{$t('ProductHeroSubheading')}} </h3>
    </div>
    <product-try-it-for-free-cta-comp />
  </section>
</template>

<script>
import ProductTryItForFreeCtaComp from './ProductTryItForFreeCtaComp';

export default {
  components: {
    ProductTryItForFreeCtaComp
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';


.product-hero-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  background-image: url('~@/assets/view/premium/premium-mobile-hero.png');
  background-blend-mode: overlay;
  background-size: cover;
  height: 470px;
}

.product-hero-headings-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.product-hero-preheading {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 300;
  color: $white;
}
.product-hero-heading {
  margin: 6px 0 14px 0;
  font-size: 2.5rem;
  color: $light-green;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
}
.product-hero-subheading {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 300;
  font-style: italic;
  color: $white;
}
</style>