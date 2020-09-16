<template>
  <div :class="`pricing-product-read-more-wrapper ${product} ${$mq}`">
    <a v-if="url" :href="url">
      {{ $t(phraseKey) }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    product: String,
    url: String,
    phraseKey: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricing-product-read-more-wrapper {
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 0.875rem;

  &.mobile {
    height: 37px;
    margin: 23px 0 0 0;
  }

  &.desktop {
    height: 42px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    color: $white;
  }

  &.free {
    background-color: #545454;
  }

  &.premium {
    background-color: $dark-green;
  }

  &.business {
    background-color: $black;
  }
}
</style>
