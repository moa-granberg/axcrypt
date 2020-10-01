<template>
  <section :class="'product-body-wrapper ' + $mq">
    <h1 :class="'product-body-header heading-medium-green ' + $mq">
      {{ $t(headerPhraseKey) }}
    </h1>
    <div :class="'product-body-text body-text ' + $mq">
      <p v-html="url ? $t(bodyPhraseKey, { url }) : $t(bodyPhraseKey)" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    headerPhraseKey: String,
    bodyPhraseKey: String,
    url: String,
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.product-body-wrapper {
  @include standard-margin;
}

.product-body-text > p > a {
  text-decoration: none;
  color: $dark-green;
}
</style>
