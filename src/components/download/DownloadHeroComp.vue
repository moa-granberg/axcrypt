<template>
  <section :class="`download-hero-wrapper ${$mq}`">
    <article :class="`download-hero-platform-wrapper ${$mq}`">
      <h1 :class="`download-hero-platform-heading ${$mq}`">
        {{
          $t(
            activePlatform === 'Windows'
              ? 'DownloadHeroHeadingWindows'
              : 'DownloadHeroHeadingMac'
          )
        }}
      </h1>
      <ul
        v-if="activePlatform === 'Windows'"
        :class="`download-hero-platform-selling-point-wrapper ${$mq}`"
      >
        <li
          v-for="phraseKey of sellingPointsWindows"
          :key="phraseKey"
          :class="`download-hero-platform-selling-point-item ${$mq}`"
        >
          {{ $t(phraseKey) }}
        </li>
      </ul>
      <ul
        v-if="activePlatform === 'macOS'"
        :class="`download-hero-platform-selling-point-wrapper ${$mq}`"
      >
        <li
          v-for="phraseKey of sellingPointsMac"
          :key="phraseKey"
          :class="`download-hero-platform-selling-point-item ${$mq}`"
        >
          {{ $t(phraseKey) }}
        </li>
      </ul>
      <primary-button-comp
        phraseKey="DownloadLinkLabel"
        size="large"
        color="black"
        path="#"
      />
    </article>

    <article :class="`download-hero-mobile-wrapper ${$mq}`">
      <div :class="`download-hero-mobile-text-wrapper ${$mq}`">
        <h1 :class="`download-hero-mobile-heading ${$mq}`">
          {{ $t('DownloadMobileHeading') }}
        </h1>
        <p
          :class="`download-hero-mobile-heading ${$mq}`"
          v-html="$t('DownloadMobileBodyText')"
        ></p>
        <img
          :class="`download-hero-mobile-badge ${$mq}`"
          src="@/assets/view/download/google-play-badge.png"
          alt="google play badge"
        />
        <img
          :class="`download-hero-mobile-badge ${$mq}`"
          src="@/assets/view/download/app_store_badge.svg"
          alt="app store badge"
        />
      </div>
      <img
        :class="`download-hero-mobile-img ${$mq}`"
        src="@/assets/view/download/mobile_application.svg"
        alt=""
      />
    </article>
  </section>
</template>

<script>
import PrimaryButtonComp from '../PrimaryButtonComp';

export default {
  props: {
    activePlatform: String,
  },

  components: {
    PrimaryButtonComp,
  },

  data() {
    return {
      sellingPointsWindows: [
        'DownloadHeroListOpenSecured',
        'DownloadHeroListSecureAny',
        'DownloadHeroListRightClick',
        'DownloadHeroListDoubleClick',
        'DownloadHeroListShareKeys',
        'DownloadHeroListSecuredFolders',
        'DownloadHeroListMultilingualSupport',
      ],
      sellingPointsMac: [
        'DownloadHeroListOpenSecured',
        'DownloadHeroListSecureAny',
        'DownloadHeroListDoubleClick',
        'DownloadHeroListShareKeys',
        'DownloadHeroListSecuredFolders',
        'DownloadHeroListMultilingualSupport',
      ],
    };
  },
};
</script>

<style></style>
