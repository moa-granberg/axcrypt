<template>
  <section :class="'product-body-wrapper ' + $mq">
    <h1 :class="'product-body-header heading-medium-green ' + $mq">
      {{ $t(headerPhraseKey) }}
    </h1>
    <div :class="'product-body-text body-text ' + $mq">
      <p
        v-for="item of body"
        :key="item.phraseKey"
        v-html="
          item.url ? $t(item.phraseKey, { url: item.url }) : $t(item.phraseKey)
        "
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    headerPhraseKey: String,
    body: Array, //obj with string & ?url
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
