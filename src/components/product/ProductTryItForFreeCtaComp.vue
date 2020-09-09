<template>
  <article :class="`product-try-it-for-free-cta-wrapper ${$mq} ${product}`">
    <h1 :class="'product-try-it-for-free-cta-heading ' + $mq">
      {{ $t('ProductTryItForFreeHeading') }}
    </h1>
    <h2 :class="'product-try-it-for-free-cta-subheading ' + $mq">
      {{ $t('ProductTryItForFreeSubheading') }}
    </h2>
    <primary-button-comp
      phraseKey="ProductTryItForFreeButtonLabel"
      size="large"
      :path="product === 'premium' ? '/premium-trial' : '/business-trial'"
    />
  </article>
</template>

<script>
import PrimaryButtonComp from '@/components/PrimaryButtonComp';

export default {
  props: {
    product: String,
  },

  components: {
    PrimaryButtonComp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-try-it-for-free-cta-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 29px 0;
  color: $white;

  &.mobile {
    &.premium {
      background: linear-gradient(
        to bottom,
        rgba(73, 119, 44, 0.7) 0%,
        rgba(116, 144, 98, 0.9) 45%,
        rgba(116, 144, 98, 0.9) 55%,
        rgba(72, 119, 44, 0.7) 100%
      );
    }
    &.business {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.7) 45%,
        rgba(0, 0, 0, 0.8) 65%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }
}

.product-try-it-for-free-cta-heading {
  margin: 0;
  font-weight: 300;

  &.mobile {
    font-size: 1.5rem;
  }

  &.desktop {
    font-size: 2rem;
  }
}

.product-try-it-for-free-cta-subheading {
  margin: 10px;
  font-weight: 300;

  &.mobile {
    font-size: 1.125rem;
  }

  &.desktop {
    font-size: 1.5rem;
  }
}
</style>
