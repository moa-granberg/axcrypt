<template>
  <article :class="`download-hero-platform-wrapper ${$mq}`">
    <div :class="`download-hero-platform-inner-wrapper ${$mq}`">
      <h1 :class="`download-hero-heading heading-medium ${$mq}`">
        {{ $t(headingPhraseKey) }}
      </h1>

      <dash-list :list="sellingPoints" />

      <a
        :href="downloadUrl"
        :class="`standard-button small black download-hero-platform-download-button ${$mq}`"
      >
        <slot />{{ $t('DownloadLinkLabel') }} AxCrypt
      </a>
    </div>
  </article>
</template>

<script>
import DashList from '../DashList';

export default {
  props: {
    headingPhraseKey: String,
    sellingPoints: Array, //with phraseKeys
    downloadUrl: String,
  },

  components: {
    DashList,
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/downloadView.scss';
@import '@/scss/standardButton.scss';

.download-hero-platform-wrapper {
  flex-grow: 1;
  background-color: rgba($color: $light-green, $alpha: 0.7);
  color: #000000;
  display: flex;

  &.mobile {
    justify-content: center;
    padding: $margin-mobile;
  }

  &.desktop {
    justify-content: flex-end;
    padding: 80px;
  }
}

.download-hero-platform-inner-wrapper {
  @include center-column;

  &.desktop {
    justify-content: flex-start;
  }
}

.download-hero-platform-download-button {
  text-transform: uppercase;

  &.mobile {
    > div {
      margin: 0 8px 0 0;
    }
  }

  &.desktop {
    margin: 20px 0 0 0;

    > div {
      margin: 0 14px 0 0;
    }
  }
}
</style>
