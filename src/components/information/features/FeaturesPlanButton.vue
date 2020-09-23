<template>
  <button :class="[{ active }, 'plan-button', plan, $mq]">
    <p :class="['plan-button-label body-text', $mq]" v-html="$t(phraseKey)" />
  </button>
</template>

<script>
export default {
  props: {
    plan: String,
    phraseKey: String,
    active: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.plan-button {
  opacity: 0.5;
  border: 1px solid $gray;
  border-radius: 2px;
  transition: opacity 0.1s;
  outline: none;
  cursor: pointer;

  &.active {
    opacity: 1;
  }

  &.free {
    background-color: $gray;
  }

  &.premium {
    background-color: $dark-green;
  }

  &.business {
    background-color: $black;
  }

  &.mobile {
    width: 100px;
    height: 40px;
  }

  &.desktop {
    width: 150px;
    height: 40px;
  }
}

.plan-button-label {
  color: $white;
  margin: auto;
  text-transform: uppercase;
  font-family: $standard-font;
  font-weight: 600;
  text-shadow: $standard-text-shadow;
}
</style>
