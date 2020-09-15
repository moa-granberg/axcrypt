<template>
  <ul class="pricing-product-feature-list-wrapper" :class="[{ show }, $mq]">
    <li :class="`pricing-product-feature-list-item-wrapper ${$mq}`">
      <h1 :class="`pricing-product-feature-list-heading ${$mq}`">
        {{ $t('FeatureLabel') }}
      </h1>

      <h1 :class="`pricing-product-feature-list-heading ${$mq}`">Mac</h1>
      <h1 :class="`pricing-product-feature-list-heading ${$mq}`">PC</h1>
    </li>

    <li
      :class="`pricing-product-feature-list-item-wrapper ${$mq}`"
      v-for="item of featureList"
      :key="item.feature"
    >
      <p>
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
  height: 0;
  overflow: hidden;

  &.show {
    height: auto;
    
    &.mobile {
      padding: 0 14px 6px 14px;
    }
  }

  &.mobile {
    margin: 0 18px;
    background-color: $white;
    border-radius: 5px;
  }

  &.desktop {
    padding: 0 42px 24px 42px;
    margin: 0 4px;
  }
}

.pricing-product-feature-list-item-wrapper {
  display: grid;
  grid: auto / 8fr 1fr 1fr;
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
    gap: 10px;

    p {
      font-size: 0.75rem;
    }

    img {
      height: 14px;
    }
  }

  &.desktop {
    gap: 20px;

    p {
      font-size: 1rem;
    }

    img {
      height: 18px;
    }
  }
}

.pricing-product-feature-list-heading {
  &.mobile {
    font-size: 0.875rem;
  }
  &.desktop {
    font-size: 1.125rem;
  }
}
</style>
