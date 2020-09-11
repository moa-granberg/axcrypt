<template>
  <main>
    <download-hero-comp />
    <download-try-cta-comp />
    <download-information-comp />
  </main>
</template>

<script>
import DownloadHeroComp from '@/components/download/DownloadHeroComp.vue';
import DownloadTryCtaComp from '@/components/download/DownloadTryCtaComp.vue';
import DownloadInformationComp from '@/components/download/DownloadInformationComp.vue';

export default {
  components: {
    DownloadHeroComp,
    DownloadTryCtaComp,
    DownloadInformationComp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>
