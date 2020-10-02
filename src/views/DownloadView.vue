<template>
  <main>
    <download-hero />
    <download-try-cta />
    <download-information />
  </main>
</template>

<script>
import DownloadHero from '@/components/download/DownloadHero';
import DownloadTryCta from '@/components/download/DownloadTryCta';
import DownloadInformation from '@/components/download/DownloadInformation';

export default {
  components: {
    DownloadHero,
    DownloadTryCta,
    DownloadInformation,
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>
