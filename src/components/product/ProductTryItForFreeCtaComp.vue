<template>
  <article :class="'product-try-it-for-free-cta-wrapper ' + $mq">
    <h1 :class="'product-try-it-for-free-cta-heading ' + $mq">{{ $t('ProductTryItForFreeHeading') }}</h1>
    <h2 :class="'product-try-it-for-free-cta-subheading ' + $mq">{{ $t('ProductTryItForFreeSubheading') }}</h2>
    <button :class="'product-try-it-for-free-cta-button ' + $mq">{{ $t('ProductTryItForFreeButtonLabel') }}</button>
  </article>
</template>

<script>
export default {};
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
    background: linear-gradient(
      to bottom,
      rgba(73, 119, 44, 0.7) 0%,
      rgba(116, 144, 98, 0.9) 45%,
      rgba(116, 144, 98, 0.9) 55%,
      rgba(72, 119, 44, 0.7) 100%
    );
  }
}

.product-try-it-for-free-cta-heading {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 300;
}

.product-try-it-for-free-cta-subheading {
  margin: 10px;
  font-size: 1.125rem;
  font-weight: 300;
}

.product-try-it-for-free-cta-button {
  font-size: 1.125rem;
  font-family: $standard-font;
  color: $white;
  background-color: $light-green;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  padding: 18px 50px;
}
</style>
