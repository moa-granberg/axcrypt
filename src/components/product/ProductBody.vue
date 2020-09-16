<template>
  <section :class="'product-body-wrapper ' + $mq">
    <h1 :class="'product-body-header heading-medium ' + $mq">
      {{ $t(headerPhraseKey) }}
    </h1>
    <div
      :class="'product-body-text body-text ' + $mq"
      v-html="$t(bodyPhraseKey)"
    ></div>
  </section>
</template>

<script>
export default {
  props: {
    headerPhraseKey: String,
    bodyPhraseKey: String,
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/fonts.scss';

.product-body-wrapper {
  margin: 32px;
}

.product-body-header {
  color: $green;
  font-weight: 400;
}

.product-body-text > p > a {
  text-decoration: none;
  color: $dark-green;
}
</style>
