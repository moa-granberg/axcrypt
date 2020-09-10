<template>
  <section :class="`download-try-cta-wrapper ${$mq}`">
    <h1
      :class="`download-try-cta-heading ${$mq}`"
      v-html="$t('DownloadTryCtaHeading')"
    ></h1>
    <try-buttons-comp />
  </section>
</template>

<script>
import TryButtonsComp from './TryButtonsComp';

export default {
  components: {
    TryButtonsComp,
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.download-try-cta-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.mobile {
    padding: 24px 0;
  }

  &.desktop {
    padding: 72px 0;
  }
}

.download-try-cta-heading {
  font-weight: 400;
  text-align: center;

  &.mobile {
    font-size: 0.875rem;
    max-width: 170px;
    margin: 0 0 24px 0;
  }

  &.desktop {
    font-size: 1.5rem;
    max-width: 280px;
    margin: 0 0 44px 0;
  }

  span {
    font-weight: 600;
    color: $green;
  }
}
</style>
