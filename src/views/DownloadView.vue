<template>
  <main>
    <download-nav-comp
      :activePlatform="activePlatform"
      v-on:switchPlatform="switchPlatform"
    />

    <download-hero-comp :activePlatform="activePlatform" />
  </main>
</template>

<script>
import DownloadNavComp from '@/components/download/DownloadNavComp.vue';
import DownloadHeroComp from '@/components/download/DownloadHeroComp.vue';

export default {
  components: {
    DownloadHeroComp,
    DownloadNavComp,
  },

  data() {
    return {
      activePlatform: 'macOS', //generate
    };
  },

  methods: {
    switchPlatform(platform) {
      this.activePlatform = platform;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>
