<template>
  <div
    v-if="$mq === 'mobile'"
    :class="`pricing-product-body-feature-toggle ${$mq}`"
    @click="handleClick"
  >
    <p v-if="showFeatureList">
      {{ $t('HideFeaturesLabel') }}
    </p>
    <p v-else>
      {{ $t('WhatsIncludedLabel') }}
    </p>

    <img
      class="pricing-product-body-feature-toggle-icon"
      :class="[{ up: showFeatureList }]"
      src="@/assets/icons/keyboard_arrow_down.svg"
      alt="drop_down"
    />
  </div>
</template>

<script>
export default {
  props: {
    showFeatureList: Boolean,
  },

  methods: {
    handleClick() {
      this.$emit('toggleFeatureList');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.pricing-product-body-feature-toggle {
  @include center-row;
  cursor: pointer;

  p {
    font-size: 0.875rem;
    font-style: italic;
  }
}

.pricing-product-body-feature-toggle-icon {
  margin: 0 0 0 4px;

  &.up {
    transform: rotate(180deg);
  }
}
</style>
