<template>
  <section :class="`download-hero-wrapper ${$mq}`">
    <download-nav-comp
      :activePlatform="activePlatform"
      v-on:switchPlatform="switchPlatform"
    />

    <download-hero-platform-comp
      :headingPhraseKey="
        activePlatform === 'Windows'
          ? 'DownloadHeroHeadingWindows'
          : 'DownloadHeroHeadingMac'
      "
      :sellingPoints="sellingPoints"
    />

    <download-hero-mobile-comp />
  </section>
</template>

<script>
import DownloadNavComp from '@/components/download/DownloadNavComp.vue';
import DownloadHeroPlatformComp from '@/components/download/DownloadHeroPlatformComp.vue';
import DownloadHeroMobileComp from '@/components/download/DownloadHeroMobileComp.vue';

export default {
  components: {
    DownloadNavComp,
    DownloadHeroPlatformComp,
    DownloadHeroMobileComp,
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
  background-image: url('~@/assets/view/download/download_hero_mobile.png');
  background-size: cover;
}
</style>
