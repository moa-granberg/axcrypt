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
  padding: 24px 0;
}

.download-try-cta-heading {
  font-size: 0.875rem;
  font-weight: 400;
  max-width: 170px;
  margin: 0 0 24px 0;

  span {
    font-weight: 600;
    color: $green;
  }
}
</style>
