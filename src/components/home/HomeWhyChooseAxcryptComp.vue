<template>
  <section :class="`home-why-choose-axcrypt-wrapper ${$mq}`">
    <h1 :class="`home-why-choose-axcrypt-heading ${$mq}`">
      {{$t('WhyChooseAxcrypt')}}
    </h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      homeSellingPointItems: [
        {
          src: 'shield_256.svg',
          headingPhraseKey: 'HomeSellingPointStrongEncryptionHeading',
          paragraphPhraseKey: 'HomeSellingPointStrongEncryptionBody',
        },
        {
          src: 'cloud.svg',
          headingPhraseKey: 'HomeSellingPointCloudStorageAwarenessHeading',
          paragraphPhraseKey: 'HomeSellingPointCloudStorageAwarenessBody',
        },
        {
          src: 'globe.svg',
          headingPhraseKey: 'HomeSellingPointMultilingualHeading',
          paragraphPhraseKey: 'HomeSellingPointMultilingualBody',
        },
        {
          src: 'loop_key.svg',
          headingPhraseKey: 'HomeSellingPointCollaborationHeading',
          paragraphPhraseKey: 'HomeSellingPointCollaborationBody',
        },
        {
          src: 'key_folder.svg',
          headingPhraseKey: 'HomeSellingPointPasswordManagementHeading',
          paragraphPhraseKey: 'HomeSellingPointPasswordManagementBody',
        },
        {
          src: 'axcrypt_mobile.svg',
          headingPhraseKey: 'HomeSellingPointAxcryptMobileHeading',
          paragraphPhraseKey: 'HomeSellingPointAxcryptMobileBody',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>