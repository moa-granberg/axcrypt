<template>
  <section :class="`product-hero-wrapper ${$mq} ${product}`">
    <div :class="'product-hero-headings-wrapper ' + $mq">
      <h1 :class="'product-hero-preheading heading-jumbo ' + $mq">AxCrypt</h1>
      <h1 :class="`product-hero-heading ${$mq} ${product}`">
        {{ $t(headingPhraseKey) }}
      </h1>
      <h1 :class="'product-hero-subheading heading-medium ' + $mq">
        {{ $t(subheadingPhraseKey) }}
      </h1>
    </div>

    <product-try-it-for-free-cta
      :product="product"
      :url="url"
      v-if="$mq === 'mobile'"
    />
    <div v-else></div>
  </section>
</template>

<script>
import ProductTryItForFreeCta from './ProductTryItForFreeCta';

export default {
  props: {
    product: String,
    url: String,
  },

  components: {
    ProductTryItForFreeCta,
  },

  computed: {
    headingPhraseKey() {
      return this.product === 'premium'
        ? 'PremiumLinkLabel'
        : 'BusinessLinkLabel';
    },
    subheadingPhraseKey() {
      return this.product === 'premium'
        ? 'PremiumHeroSubheading'
        : 'BusinessHeroSubheading';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-hero-wrapper {
  background-blend-mode: overlay;
  background-size: cover;

  &.premium {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.business {
    background-color: rgba(72, 119, 44, 0.5);
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
    height: 470px;

    &.premium {
      background-image: url('~@/assets/view/product/premium-desktop-hero.png');
    }
    &.business {
      background-image: url('~@/assets/view/product/business-desktop-hero.png');
    }
  }
}

.product-hero-headings-wrapper {
  @include center-column;
  height: 100%;

  &.mobile {
    padding: 50px 0;
  }
}

.product-hero-preheading {
  @include no-margin-padding;
  font-weight: 300;
  color: $white;
}

.product-hero-heading {
  margin: 6px 0 14px 0;
  text-transform: uppercase;
  text-shadow: $standard-text-shadow;

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
    font-size: 5.75rem;
    letter-spacing: -4px;
    line-height: 1;
  }
}

.product-hero-subheading {
  @include no-margin-padding;
  font-weight: 300;
  font-style: italic;
  color: $white;
}
</style>
