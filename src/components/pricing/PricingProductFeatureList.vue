<template>
  <ul class="pricing-product-feature-list-wrapper" :class="[{ show }, $mq]">
    <li :class="`pricing-product-feature-list-item-wrapper ${$mq}`">
      <h1 :class="`body-text-large ${$mq}`">
        {{ $t('FeatureLabel') }}
      </h1>

      <h1 :class="`body-text-large ${$mq}`">Mac</h1>
      <h1 :class="`body-text-large ${$mq}`">PC</h1>
    </li>

    <li
      :class="`pricing-product-feature-list-item-wrapper ${$mq}`"
      v-for="item of featureList"
      :key="item.feature"
    >
      <p :class="`body-text ${$mq}`">
        {{ $t(item.feature) }}
      </p>

      <img v-if="item.mac" src="@/assets/icons/check.svg" alt="check" />
      <img v-else src="@/assets/icons/cross.svg" alt="cross" />

      <img v-if="item.pc" src="@/assets/icons/check.svg" alt="check" />
      <img v-else src="@/assets/icons/cross.svg" alt="cross" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    show: Boolean,
    featureList: Array, // feature: String, mac: Boolean, pc: Boolean
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricing-product-feature-list-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;

  &.show {
    max-height: 700px;
  }

  &.mobile {
    padding: 0 14px;
    margin: 0 $margin-mobile;
    background-color: $white;
    border-radius: 5px;
  }

  &.desktop {
    margin: 0;
    padding: 0 16px 16px 16px;
  }
}

.pricing-product-feature-list-item-wrapper {
  display: grid;
  align-items: center;
  list-style: none;
  justify-items: center;

  :first-child {
    justify-self: flex-start;
  }

  p {
    margin: 8px 0;
  }

  &.mobile {
    grid: auto / 8fr 1fr 1fr;
    gap: 10px;

    img {
      height: 14px;
    }
  }

  &.desktop {
    grid: auto / 6fr 1fr 1fr;

    img {
      height: 16px;
    }
  }
}
</style>
