<template>
  <section :class="'product-hero-wrapper ' + $mq">
    <div :class="'product-hero-headings-wrapper ' + $mq">
      <h2 :class="'product-hero-preheading ' + $mq">AxCrypt</h2>
      <h1 :class="'product-hero-heading ' + $mq">
        {{ $t('PremiumLinkLabel') }}
      </h1>
      <h3 :class="'product-hero-subheading ' + $mq">
        {{ $t('ProductHeroSubheading') }}
      </h3>
    </div>

    <product-try-it-for-free-cta-comp v-if="$mq === 'mobile'" />
    <div v-else></div>
  </section>
</template>

<script>
import ProductTryItForFreeCtaComp from './ProductTryItForFreeCtaComp';

export default {
  components: {
    ProductTryItForFreeCtaComp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-hero-wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-size: cover;
  height: 470px;

  &.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url('~@/assets/view/premium/premium-mobile-hero.png');
  }

  &.desktop {
    display: grid;
    grid: 1fr / 1fr 1fr;
    justify-items: flex-end;
    background-image: url('~@/assets/view/premium/premium-desktop-hero.png');
  }
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
  font-weight: 300;
  color: $white;

  &.mobile {
    font-size: 1.5rem;
  }

  &.desktop {
    font-size: 3rem;
  }
}

.product-hero-heading {
  margin: 6px 0 14px 0;
  color: $light-green;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &.mobile {
    font-size: 2.5rem;
  }

  &.desktop {
    font-size: 6.25rem;
    letter-spacing: -4px;
    line-height: 1;
  }
}

.product-hero-subheading {
  margin: 0;
  font-weight: 300;
  font-style: italic;
  color: $white;

  &.mobile {
    font-size: 1.125rem;
  }

  &.desktop {
    font-size: 1.5rem;
  }
}
</style>
