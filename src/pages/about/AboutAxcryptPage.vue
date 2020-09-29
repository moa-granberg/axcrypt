<template>
  <section :class="['about-axcrypt-wrapper', $mq]">
    <article :class="['history-wrapper', $mq]">
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText1') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText2') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText3') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText4') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText5') }}</p>
      <p :class="['body-text', $mq]">{{ $t('AboutAxcryptHistoryText6') }}</p>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.about-axcrypt-wrapper {
  @include standard-margin;

  &.desktop {
    margin-top: $margin-top-aside-content;
  }
}

.history-wrapper {
  &.desktop {
    max-width: $max-content-width;
    margin: auto;
    column-count: 2;
  }

  p:first-of-type {
    margin-top: 0;
  }
}
</style>
