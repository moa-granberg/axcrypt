<template>
  <main :class="`not-found-wrapper ${$mq}`">
    <h1 :class="`not-found-heading ${$mq}`">{{ $t('404Heading') }}</h1>
    <p :class="`not-found-paragraph ${$mq}`">{{ $t('404Text') }}</p>
    <primary-button path="/" phraseKey="BackToHomeButtonLabel" size="large" />
  </main>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';

export default {
  components: {
    PrimaryButton,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.not-found-wrapper {
  @include center-column;

  a {
    text-transform: uppercase;
  }

  &.mobile {
    margin: 25px 0;
    padding: 30px;
  }

  &.desktop {
    margin: $footer-height-desktop/2 0;
    padding: 80px;
  }
}

.not-found-heading {
  @include no-margin-padding;
  color: $green;
}

.not-found-paragraph {
  max-width: 600px;
  margin: 32px 0;
}
</style>
