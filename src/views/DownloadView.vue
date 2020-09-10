<template>
  <main>
    <download-hero-comp />
    <download-try-cta-comp />
  </main>
</template>

<script>
import DownloadHeroComp from '@/components/download/DownloadHeroComp.vue';
import DownloadTryCtaComp from '@/components/download/DownloadTryCtaComp.vue';

export default {
  components: {
    DownloadHeroComp,
    DownloadTryCtaComp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>
