<template>
  <article
    :class="`home-why-choose-axcrypt-selling-points-items-wrapper ${$mq}`"
  >
    <div
      :class="`home-why-choose-axcrypt-selling-points-item ${$mq}`"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
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
          :class="`home-why-choose-axcrypt-selling-points-item-heading body-text-large ${$mq}`"
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
import homeSellingPointItems from '@/data/home/home-selling-points';

export default {
  data() {
    return {
      homeSellingPointItems,
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
  @include no-margin-padding;

  &.mobile {
    text-align: center;
  }
}

.home-why-choose-axcrypt-selling-points-item-paragraph {
  color: $white;
  @include no-margin-padding;

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
