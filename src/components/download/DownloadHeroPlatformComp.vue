<template>
  <article :class="`download-hero-platform-wrapper ${$mq}`">
    <h1 :class="`download-hero-heading ${$mq}`">
      {{ $t(headingPhraseKey) }}
    </h1>

    <dash-list-comp :list="sellingPoints" />

    <primary-button-comp
      :class="`download-hero-platform-download-button ${$mq}`"
      phraseKey="DownloadLinkLabel"
      size="small"
      color="black"
      path="#"
    />
  </article>
</template>

<script>
import PrimaryButtonComp from '../PrimaryButtonComp';
import DashListComp from '../DashListComp';

export default {
  props: {
    headingPhraseKey: String,
    sellingPoints: Array, //with phraseKeys
  },

  components: {
    PrimaryButtonComp,
    DashListComp,
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/downloadView.scss';

.download-hero-platform-wrapper {
  background-color: rgba($color: $light-green, $alpha: 0.7);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.download-hero-platform-download-button {
  text-transform: uppercase;
  align-self: center;
}
</style>
