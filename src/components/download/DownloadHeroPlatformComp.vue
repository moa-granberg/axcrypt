<template>
  <article :class="`download-hero-platform-wrapper ${$mq}`">
    <h1 :class="`download-hero-heading ${$mq}`">
      {{ $t(headingPhraseKey) }}
    </h1>
    <ul :class="`download-hero-platform-selling-points-wrapper ${$mq}`">
      <li
        v-for="phraseKey of sellingPoints"
        :key="phraseKey"
        :class="`download-hero-platform-selling-point-item ${$mq}`"
      >
        <p :class="`download-hero-platform-selling-point-item-dash ${$mq}`">
          -
        </p>
        <p :class="`download-hero-paragraph ${$mq}`">
          {{ $t(phraseKey) }}
        </p>
      </li>
    </ul>
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

export default {
  props: {
    headingPhraseKey: String,
    sellingPoints: Array, //with phraseKeys
  },

  components: {
    PrimaryButtonComp,
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

.download-hero-platform-selling-points-wrapper {
  margin: 0 0 20px 0;
  padding: 0;
  max-width: 600px;
}

.download-hero-platform-selling-point-item {
  list-style: none;
  display: flex;
  margin: 8px 0;
}

.download-hero-platform-selling-point-item-dash {
  margin: 0 10px 0 0;
  font-size: 0.75rem;
}

.download-hero-platform-download-button {
  text-transform: uppercase;
  align-self: center;
}
</style>
