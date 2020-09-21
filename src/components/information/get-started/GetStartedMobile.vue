<template>
  <section :class="['get-started-mobile-wrapper', $mq]">
    <h1 :class="['get-started-mobile-heading heading-jumbo', $mq]">
      {{ $t(headingPhraseKey) }}
    </h1>
    <p :class="['body-text', $mq]">{{ $t(textPhraseKey1) }}</p>
    <p :class="['body-text', $mq]">{{ $t(textPhraseKey2) }}</p>
    <p :class="['body-text', $mq]">{{ $t(textPhraseKey3) }}</p>
    <p :class="['body-text', $mq]" v-html="$t(textPhraseKey4)" />

    <article
      :class="['get-started-mobile-instruction-wrapper', $mq]"
      v-for="item of instructionList"
      :key="item.headingPhraseKey"
    >
      <div :class="['get-started-mobile-instruction-img-wrapper', $mq]">
        <img
          :class="['get-started-mobile-img', $mq]"
          :src="require(`@/assets/view/get-started/${item.src}`)"
          alt=""
        />
        <h3 :class="['get-started-mobile-img-heading', $mq]">
          {{ $t(item.imgHeadingPhraseKey) }}
        </h3>
        <p :class="['get-started-mobile-img-text body-text', $mq]">
          {{ $t(item.imgTextPhraseKey) }}
        </p>
      </div>

      <div :class="['get-started-mobile-instruction-text-wrapper', $mq]">
        <h2
          :class="[
            'get-started-mobile-instruction-heading heading-medium',
            $mq,
          ]"
          v-if="$mq === 'desktop'"
        >
          {{ $t(item.headingPhraseKey) }}
        </h2>
        <p :class="['body-text', $mq]">{{ $t(item.textPhraseKey) }}</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      headingPhraseKey: 'MobileAppLabel',
      textPhraseKey1: 'GetStartedMobileText1',
      textPhraseKey2: 'GetStartedMobileText2',
      textPhraseKey3: 'GetStartedMobileText3',
      textPhraseKey4: 'GetStartedMobileText4',
      instructionList: [
        {
          headingPhraseKey: 'DownloadMobileHeading',
          textPhraseKey: 'GetStartedAxcryptMobileText',
          src: 'axcrypt-mobile.png',
          imgHeadingPhraseKey: 'DownloadMobileHeading',
          imgTextPhraseKey: 'GetStartedAxcryptMobileImageText',
        },
        {
          headingPhraseKey: 'GetStartedAccessSecuredHeading',
          textPhraseKey: 'GetStartedAccessSecuredText',
          src: 'access-secured.png',
          imgHeadingPhraseKey: 'GetStartedAccessSecuredHeading',
          imgTextPhraseKey: 'GetStartedAccessSecuredImageText',
        },
        {
          headingPhraseKey: 'GetStartedEasyAccessHeading',
          textPhraseKey: 'GetStartedEasyAccessText',
          src: 'easy-access.png',
          imgHeadingPhraseKey: 'GetStartedEasyAccessHeading',
          imgTextPhraseKey: 'GetStartedEasyAccessImageText',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.get-started-mobile-wrapper {
  &.mobile {
    padding: 24px;
  }

  &.desktop {
    padding: 34px;
  }
}

.get-started-mobile-heading {
  @include no-margin-padding;
  font-weight: 400;
}

.get-started-mobile-instruction-wrapper {
  padding: 3rem 0 0 0;

  &.desktop {
    display: grid;
    grid: 1fr / 1fr 2fr;
  }
}

.get-started-mobile-instruction-img-wrapper {
  @include center-column;
  text-align: center;
}

.get-started-mobile-img {
  width: 200px;
}

.get-started-mobile-img-heading {
  margin: 12px 0 0 0;
  font-weight: 400;
}

.get-started-mobile-img-text {
  @include no-margin-padding;
  font-weight: 300;
}

.get-started-mobile-instruction-text-wrapper {
  max-width: 600px;

  &.mobile {
    margin: auto;
  }
}

.get-started-mobile-instruction-heading {
  font-weight: 400;
  color: $green;
}
</style>
