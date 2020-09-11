<template>
  <section :class="`download-hero-wrapper ${$mq}`">
    <download-nav-comp
      :activePlatform="activePlatform"
      v-on:switchPlatform="switchPlatform"
    />

    <div :class="`download-desktop-hero-subwrapper ${$mq}`">
      <download-hero-platform-comp
        :headingPhraseKey="platformHeadingPhraseKey"
        :sellingPoints="sellingPoints"
        :downloadUrl="platformDownloadPath"
      >
        <component :is="childComponent" />
      </download-hero-platform-comp>

      <download-hero-mobile-comp />
    </div>
  </section>
</template>

<script>
import DownloadNavComp from '@/components/download/DownloadNavComp.vue';
import DownloadHeroPlatformComp from '@/components/download/DownloadHeroPlatformComp.vue';
import DownloadHeroMobileComp from '@/components/download/DownloadHeroMobileComp.vue';
import AppleIconComp from '@/components/download/AppleIconComp';
import WindowsIconComp from '@/components/download/WindowsIconComp';

export default {
  components: {
    DownloadNavComp,
    DownloadHeroPlatformComp,
    DownloadHeroMobileComp,
    AppleIconComp,
    WindowsIconComp,
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
      return this.activePlatform === 'Windows'
        ? 'windows-icon-comp'
        : 'apple-icon-comp';
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
.download-hero-wrapper {
  background-size: cover;
  background-position: bottom;

  &.mobile {
    background-image: url('~@/assets/view/download/download_hero_mobile.png');
  }

  &.desktop {
    background-image: url('~@/assets/view/download/download_hero_desktop.png');
  }
}

.download-desktop-hero-subwrapper {
  &.desktop {
    display: flex;
  }
}
</style>
