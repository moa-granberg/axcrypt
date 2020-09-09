<template>
  <section :class="`home-why-choose-axcrypt-wrapper ${$mq}`">
    <h1 :class="`home-why-choose-axcrypt-heading ${$mq}`">
      {{ $t('WhyChooseAxcrypt') }}
    </h1>
    <article
      :class="`home-why-choose-axcrypt-selling-points-items-wrapper ${$mq}`"
    >
      <div
        :class="`home-why-choose-axcrypt-selling-points-item ${$mq}`"
        v-for="item of homeSellingPointItems"
        :key="item.src"
      >
        <img
          :class="`home-why-choose-axcrypt-selling-points-item-img ${$mq}`"
          :src="require(`@/assets/view/home/${item.src}`)"
        />

        <h1 :class="`home-why-choose-axcrypt-selling-points-item-heading`">
          {{ $t(item.headingPhraseKey) }}
        </h1>

        <p
          :class="`home-why-choose-axcrypt-selling-points-item-paragraph ${$mq}`"
        >
          {{ $t(item.paragraphPhraseKey) }}
        </p>
      </div>
    </article>
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home-why-choose-axcrypt-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(6, 9, 3, 0.9);
  padding: 30px 0;
}

.home-why-choose-axcrypt-heading {
  font-size: 1.125rem;
  color: $white;
  font-weight: 400;
}

.home-why-choose-axcrypt-selling-points-items-wrapper {
  display: grid;
  grid: 1fr 1fr 1fr / 1fr 1fr;
}

.home-why-choose-axcrypt-selling-points-item {
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 18px 0;
  padding: 0 10px;
}

.home-why-choose-axcrypt-selling-points-item-img {
  height: 50px;
}

.home-why-choose-axcrypt-selling-points-item-heading {
  font-size: 0.75rem;
  color: $light-green;
  margin: 0;
  text-align: center;
}

.home-why-choose-axcrypt-selling-points-item-paragraph {
  font-size: 0.5rem;
  color: $white;
  margin: 0;
  max-width: 8rem;
  text-align: center;
}
</style>
