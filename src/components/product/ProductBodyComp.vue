<template>
  <section :class="'product-body-wrapper ' + $mq">
    <h1 :class="'product-body-header ' + $mq">
      AxCrypt {{ $t('PremiumLinkLabel') }}
    </h1>
    <div
      :class="'product-body-text ' + $mq"
      v-html="$t('PremiumBodyText')"
    ></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.product-body-wrapper {
  margin: 32px;
}

.product-body-header {
  font-size: 1.125rem;
  color: $green;
  font-weight: 400;
}

.product-body-text {
  font-size: 0.875rem;
}

.product-body-text > p > a {
  text-decoration: none;
  color: $dark-green;
}
</style>
