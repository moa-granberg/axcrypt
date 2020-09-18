<template>
  <div :class="'annual-monthly-switcher-wrapper ' + $mq">
    <button :class="[{ active }, $mq]" @click="handleClickYearly">
      {{ $t('AnnualMonthlySwitcherAnnualButtonLabel') }}
    </button>
    <button :class="[{ active: !active }, $mq]" @click="handleClickMonthly">
      {{ $t('AnnualMonthlySwitcherMonthlyButtonLabel') }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },

  methods: {
    handleClickMonthly() {
      this.$emit('switchMonthly');
    },

    handleClickYearly() {
      this.$emit('switchYearly');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.annual-monthly-switcher-wrapper {
  button {
    width: 146px;
    height: 35px;
    background-color: $light-gray;
    text-transform: uppercase;
    font-weight: 600;
    border: 2px solid $dark-green;
    cursor: pointer;
    color: $dark-green;

    &:focus {
      outline: none;
    }

    &.active {
      background-color: $dark-green;
      color: $white;
      cursor: auto;
    }

    &:first-of-type {
      border-radius: 2px 0 0 2px;
    }

    &:last-of-type {
      border-radius: 0 2px 2px 0;
    }
  }
}
</style>
