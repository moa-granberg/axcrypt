<template>
  <router-link :class="`standard-button ${size} ${$mq} ${color}`" :to="path">
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
@import '@/scss/standardButton.scss';
</style>
