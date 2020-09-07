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
  /* width: 218px;
  height: 56px; */
  background-color: $light-green;
  color: $white;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: $standard-font;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  /* margin: 28px; */

  &.small {
    padding: 10px 23px;
  }
  &.large {
    padding: 20px 50px;
  }
}
</style>
