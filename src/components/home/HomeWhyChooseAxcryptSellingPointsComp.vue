<template>
  <article
    :class="`home-why-choose-axcrypt-selling-points-items-wrapper ${$mq}`"
  >
    <div
      :class="`home-why-choose-axcrypt-selling-points-item ${$mq}`"
      data-aos="fade-up"
      v-for="item of homeSellingPointItems"
      :key="item.src"
    >
      <img
        :class="`home-why-choose-axcrypt-selling-points-item-img ${$mq}`"
        :src="require(`@/assets/view/home/${item.src}`)"
        :alt="item.alt"
      />

      <div
        :class="`home-why-choose-axcrypt-selling-points-item-text-wrapper ${$mq}`"
      >
        <h1
          :class="`home-why-choose-axcrypt-selling-points-item-heading ${$mq}`"
        >
          {{ $t(item.headingPhraseKey) }}
        </h1>

        <p
          :class="`home-why-choose-axcrypt-selling-points-item-paragraph ${$mq}`"
        >
          {{ $t(item.paragraphPhraseKey) }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      homeSellingPointItems: [
        {
          src: 'shield_256.svg',
          alt: 'shield_256',
          headingPhraseKey: 'HomeSellingPointStrongEncryptionHeading',
          paragraphPhraseKey: 'HomeSellingPointStrongEncryptionBody',
        },
        {
          src: 'cloud.svg',
          alt: 'cloud',
          headingPhraseKey: 'HomeSellingPointCloudStorageAwarenessHeading',
          paragraphPhraseKey: 'HomeSellingPointCloudStorageAwarenessBody',
        },
        {
          src: 'globe.svg',
          alt: 'globe',
          headingPhraseKey: 'HomeSellingPointMultilingualHeading',
          paragraphPhraseKey: 'HomeSellingPointMultilingualBody',
        },
        {
          src: 'loop_key.svg',
          alt: 'loop_key',
          headingPhraseKey: 'HomeSellingPointCollaborationHeading',
          paragraphPhraseKey: 'HomeSellingPointCollaborationBody',
        },
        {
          src: 'key_folder.svg',
          alt: 'key_folder',
          headingPhraseKey: 'HomeSellingPointPasswordManagementHeading',
          paragraphPhraseKey: 'HomeSellingPointPasswordManagementBody',
        },
        {
          src: 'axcrypt_mobile.svg',
          alt: 'axcrypt_mobile',
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

.home-why-choose-axcrypt-selling-points-items-wrapper {
  display: grid;

  &.mobile {
    grid: 1fr 1fr 1fr / 1fr 1fr;
  }

  &.desktop {
    grid: 1fr 1fr / 1fr 1fr 1fr;
    gap: min(3rem, 6rem) clamp(2rem, 6vw, 12rem);
  }
}

.home-why-choose-axcrypt-selling-points-item {
  display: flex;

  &.mobile {
    flex-direction: column;
    align-items: center;
    margin: 18px 0;
    padding: 0 10px;
  }
}

.home-why-choose-axcrypt-selling-points-item-img {
  height: 50px;
}

.home-why-choose-axcrypt-selling-points-item-text-wrapper {
  display: flex;
  flex-direction: column;

  &.mobile {
    align-items: center;
  }

  &.desktop {
    margin: 0 0 0 1rem;
  }
}

.home-why-choose-axcrypt-selling-points-item-heading {
  color: $light-green;
  margin: 0;

  &.mobile {
    text-align: center;
    font-size: 0.75rem;
  }

  &.desktop {
    font-size: clamp(0.875rem, calc(1vw+0.25rem), 1.25rem);
  }
}

.home-why-choose-axcrypt-selling-points-item-paragraph {
  color: $white;
  margin: 0;

  &.mobile {
    text-align: center;
    font-size: 0.5rem;
    max-width: 8rem;
  }

  &.desktop {
    font-size: clamp(0.75rem, 1vw, 0.875rem);
    max-width: 16rem;
  }
}
</style>
