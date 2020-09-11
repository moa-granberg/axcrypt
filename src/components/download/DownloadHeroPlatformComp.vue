<template>
  <article :class="`download-hero-platform-wrapper ${$mq}`">
    <h1 :class="`download-hero-heading ${$mq}`">
      {{ $t(headingPhraseKey) }}
    </h1>

    <dash-list-comp :list="sellingPoints" />

    <a
      :href="downloadUrl"
      :class="`standard-button small black download-hero-platform-download-button ${$mq}`"
    >
      <slot />{{ $t('DownloadLinkLabel') }} AxCrypt
    </a>
  </article>
</template>

<script>
import DashListComp from '../DashListComp';

export default {
  props: {
    headingPhraseKey: String,
    sellingPoints: Array, //with phraseKeys
    downloadUrl: String,
  },

  components: {
    DashListComp,
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/downloadView.scss';

.download-hero-platform-wrapper {
  flex-grow: 1;
  background-color: rgba($color: $light-green, $alpha: 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000000;

  &.mobile {
    padding: 24px;
  }

  &.desktop {
    padding: 80px;
  }
}

.download-hero-platform-download-button {
  align-self: center;
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
