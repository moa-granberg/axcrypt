<template>
  <router-link to="/premium" :class="'fixed-side-try-for-free-button ' + $mq">
    {{ $t('TryForFreeButtonLabel') }}
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.fixed-side-try-for-free-button {
  position: fixed;
  right: 41px;
  background-color: $dark-green;
  color: $white;
  font-family: $standard-font;
  font-weight: 600;
  text-decoration: none;
  border: 0;
  border-radius: 3px 3px 0 0;
  padding: 12px 15px;
  opacity: 0.95;
  transform-origin: right;
  transform: rotate(-90deg) translate(50%, 50%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  &.mobile {
    bottom: 90px;
  }

  &.desktop {
    bottom: 155px;
  }
}
</style>
