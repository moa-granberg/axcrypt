<template>
  <section :class="`product-hero-wrapper ${$mq} ${product}`">
    <div :class="'product-hero-headings-wrapper ' + $mq">
      <h2 :class="'product-hero-preheading ' + $mq">AxCrypt</h2>
      <h1 :class="`product-hero-heading ${$mq} ${product}`">
        {{ $t(headingPhraseKey) }}
      </h1>
      <h3 :class="'product-hero-subheading ' + $mq">
        {{ $t(subheadingPhraseKey) }}
      </h3>
    </div>

    <product-try-it-for-free-cta-comp :product="product" v-if="$mq === 'mobile'" />
    <div v-else></div>
  </section>
</template>

<script>
import ProductTryItForFreeCtaComp from './ProductTryItForFreeCtaComp';

export default {
  props: {
    product: String,
  },

  components: {
    ProductTryItForFreeCtaComp,
  },

  computed: {
    headingPhraseKey(){
      return this.product === 'premium' ? 'PremiumLinkLabel' : 'BusinessLinkLabel';
    },
    subheadingPhraseKey(){ 
      return this.product === 'premium' ? 'PremiumHeroSubheading' : 'BusinessHeroSubheading';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-hero-wrapper {
  background-blend-mode: overlay;
  background-size: cover;
  height: 470px;

  &.premium{
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.business {
    background-color: rgba(72,119,44,0.5);
  }

  &.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &.premium {
      background-image: url('~@/assets/view/product/premium-mobile-hero.png');
    }
    &.business {
      background-image: url('~@/assets/view/product/business-mobile-hero.png');
    }
  }

  &.desktop {
    display: grid;
    grid: 1fr / 1fr 1fr;
    justify-items: flex-end;

    &.premium {
      background-image: url('~@/assets/view/product/premium-desktop-hero.png');
    }
    &.business {
      background-image: url('~@/assets/view/product/business-desktop-hero.png');
    }
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
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &.premium {
    color: $light-green;
  }
  &.business {
    color: $black;
  }

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
