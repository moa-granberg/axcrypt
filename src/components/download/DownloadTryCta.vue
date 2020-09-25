<template>
  <section :class="`download-try-cta-wrapper ${$mq}`">
    <h1
      :class="`download-try-cta-heading heading-medium ${$mq}`"
      v-html="$t('DownloadTryCtaHeading')"
    ></h1>

    <div :class="`download-try-cta-button-wrapper ${$mq}`">
      <try-links :subheading="true" />
    </div>
  </section>
</template>

<script>
import TryLinks from '@/components/TryLinks';

export default {
  components: {
    TryLinks,
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.download-try-cta-wrapper {
  @include center-column;

  &.mobile {
    padding: $margin-mobile 0;
  }

  &.desktop {
    padding: 72px 0;
  }
}

.download-try-cta-heading {
  font-weight: 400;
  text-align: center;
  max-width: 280px;

  &.mobile {
    margin: 0 0 $margin-mobile 0;
  }

  &.desktop {
    margin: 0 0 44px 0;
  }

  span {
    font-weight: 600;
    color: $green;
  }
}

.download-try-cta-button-wrapper {
  &.mobile {
    width: 90%;
    height: 100px;
    margin: 0 2px;
  }

  &.desktop {
    width: 1000px;
    height: 200px;
  }
}
</style>
