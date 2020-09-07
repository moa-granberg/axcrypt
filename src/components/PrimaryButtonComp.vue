<template>
  <button :class="`primary-btn ${size} ${$mq}`">
    {{ $t(phraseKey) }}
  </button>
</template>

<script>
export default {
  props: {
    phraseKey: String,
    size: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.primary-btn {
  background-color: $light-green;
  color: $white;
  font-weight: 400;
  font-family: $standard-font;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  &.small {
    padding: 10px 23px;

    &.mobile {
      font-size: 0.875rem;
    }

    &.desktop {
      font-size: 1.125rem;
    }
  }

  &.large {
    padding: 20px 50px;

    &.mobile {
      font-size: 1.125rem;
    }

    &.desktop {
      font-size: 1.5rem;
    }
  }
}
</style>
