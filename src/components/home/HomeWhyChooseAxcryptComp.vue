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
  &.mobile {
    padding: 30px 0;
  }
  &.desktop {
    padding: 4rem 4rem;
    height: clamp(300px, 38vh, 500px);
  }
}

.home-why-choose-axcrypt-heading {
  color: $white;
  font-weight: 400;
  &.mobile {
    font-size: 1.125rem;
  }
  &.desktop {
    font-size: 1.5rem;
    margin: 0 0 2rem 0;
    padding: 0;
  }
}

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
    font-size: clamp(0.875rem,calc(1vw+0.25rem), 1.25rem);
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
    font-size: clamp(0.75rem,1vw,0.875rem);
    max-width: 16rem;
  }
}
</style>
