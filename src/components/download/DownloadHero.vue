<template>
  <section :class="`download-hero-wrapper ${$mq}`">
    <download-nav
      :activePlatform="activePlatform"
      v-on:switchPlatform="switchPlatform"
    />

    <div :class="`download-desktop-hero-subwrapper ${$mq}`">
      <download-hero-platform
        :headingPhraseKey="platformHeadingPhraseKey"
        :sellingPoints="sellingPoints"
        :downloadUrl="platformDownloadPath"
      >
        <component :is="childComponent" />
      </download-hero-platform>

      <download-hero-mobile />
    </div>
  </section>
</template>

<script>
import DownloadNav from '@/components/download/DownloadNav.vue';
import DownloadHeroPlatform from '@/components/download/DownloadHeroPlatform.vue';
import DownloadHeroMobile from '@/components/download/DownloadHeroMobile.vue';
import AppleIcon from '@/components/download/AppleIcon';
import WindowsIcon from '@/components/download/WindowsIcon';

export default {
  components: {
    DownloadNav,
    DownloadHeroPlatform,
    DownloadHeroMobile,
    AppleIcon,
    WindowsIcon,
  },

  data() {
    return {
      activePlatform: 'macOS', //generate
    };
  },

  computed: {
    sellingPoints() {
      const fullList = [
        'DownloadHeroListOpenSecured',
        'DownloadHeroListSecureAny',
        'DownloadHeroListRightClick',
        'DownloadHeroListDoubleClick',
        'DownloadHeroListShareKeys',
        'DownloadHeroListSecuredFolders',
        'DownloadHeroListMultilingualSupport',
      ];

      return this.activePlatform === 'Windows'
        ? fullList
        : fullList.filter(key => key !== 'DownloadHeroListRightClick');
    },

    childComponent() {
      return this.activePlatform === 'Windows' ? 'windows-icon' : 'apple-icon';
    },

    platformHeadingPhraseKey() {
      return this.activePlatform === 'Windows'
        ? 'DownloadHeroHeadingWindows'
        : 'DownloadHeroHeadingMac';
    },

    platformDownloadPath() {
      return this.activePlatform === 'Windows'
        ? 'https://www.axcrypt.net/downloads/4519/'
        : 'https://www.axcrypt.net/downloads/7568/';
    },
  },

  methods: {
    switchPlatform(platform) {
      this.activePlatform = platform;
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.download-hero-wrapper {
  background-color: $gray;
  background-position: top;

  &.mobile {
    background-image: url('~@/assets/hero-imgs/people-mobile.png');
    background-size: cover;
  }

  &.desktop {
    background-image: url('~@/assets/hero-imgs/people-desktop.png');
    background-size: auto 100vh;
  }
}

.download-desktop-hero-subwrapper {
  &.desktop {
    display: flex;
  }
}
</style>
