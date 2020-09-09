<template>
  <router-link :class="`primary-btn ${size} ${$mq} ${color}`" :to="path">
    {{ $t(phraseKey) }}
  </router-link>
</template>

<script>
export default {
  props: {
    phraseKey: String,
    size: String,
    color: String,
    path: String,
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
  text-decoration: none;

  &.small {
    padding: 10px 23px;

    &.mobile {
      font-size: 0.875rem;
    }

    &.desktop {
      font-size: 1.125rem;
      padding: 20px 50px;
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

  &.dark {
    background-color: $dark-green;
  }
}
</style>
