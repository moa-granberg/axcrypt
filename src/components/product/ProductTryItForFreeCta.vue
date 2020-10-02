<template>
  <article :class="`product-try-it-for-free-cta-wrapper ${$mq} ${product}`">
    <h1 :class="'product-try-it-for-free-cta-heading heading-jumbo ' + $mq">
      {{ $t('ProductTryItForFreeHeading') }}
    </h1>

    <h2 :class="'product-try-it-for-free-cta-subheading heading-medium ' + $mq">
      {{ $t('ProductTryItForFreeSubheading') }}
    </h2>

    <a :class="['standard-button large', $mq]" :href="trialButtonHref">
      {{ $t('ProductTryItForFreeButtonLabel') }}
    </a>
  </article>
</template>

<script>
export default {
  props: {
    product: String,
  },

  computed: {
    trialButtonHref() {
      if (this.product === 'business') {
        return 'https://account.axcrypt.net/en/HomeBusiness/CreateSubscription';
      } else if (this.product === 'premium') {
        return 'https://account.axcrypt.net/en/Home/Login?purchase=true';
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-try-it-for-free-cta-wrapper {
  width: 100%;
  @include center-column;
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
  @include no-margin-padding;
  font-weight: 300;
}

.product-try-it-for-free-cta-subheading {
  margin: 10px;
  font-weight: 300;
}
</style>
