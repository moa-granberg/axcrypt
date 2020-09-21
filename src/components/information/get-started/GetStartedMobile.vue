<template>
  <section>
    <h1 :class="['get-started-mobile-heading heading-medium', $mq]">
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
        <p :class="['body-text', $mq]">{{ $t(item.imgTextPhraseKey) }}</p>
      </div>
      <div :class="['get-started-mobile-instruction-text-wrapper', $mq]">
        <h2 :class="['get-started-mobile-instruction-heading', $mq]">
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
</style>
