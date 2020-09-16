<template>
  <section :class="`home-hero-wrapper ${$mq}`">
    <div :class="`home-hero-review-wrapper`">
      <h1 :class="`home-hero-heading heading-jumbo ${$mq}`">
        {{ $t('HomeHeroHeading') }}
      </h1>

      <h2 :class="`home-hero-subheading heading-small ${$mq}`">
        {{ $t('HomeHeroSubheading') }}
      </h2>

      <h3 :class="`home-hero-under-subheading body-text-large ${$mq}`">
        {{ $t('HomeHeroUnderSubheading') }}
      </h3>
    </div>
    <div :class="`home-hero-try-links-wrapper ${$mq}`">
      <try-links :transparent="true" />
    </div>
  </section>
</template>

<script>
import TryLinks from '@/components/TryLinks';

export default {
  components: {
    TryLinks,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home-hero-wrapper {
  display: grid;
  grid: 2fr 1fr / 1fr;
  background-size: cover;
  color: $white;
  text-align: center;
  background-position: center;

  &.mobile {
    background-image: url('~@/assets/view/home/home-hero-mobile.png');
    height: 450px;
  }

  &.desktop {
    background-image: url('~@/assets/view/home/home-hero-desktop.png');
    min-height: 500px;
    max-height: 45vh;
  }
}

.home-hero-review-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.home-hero-heading {
  font-weight: 300;
  margin: 0 0 10px 0;

  &.mobile {
    max-width: 20rem;
  }

  &.desktop {
    max-width: 30rem;
  }
}

.home-hero-subheading {
  font-weight: 300;

  &.mobile {
    margin: 0 0 10px 0;
  }

  &.desktop {
    margin: 1rem 0 0.5rem 0;
  }
}

.home-hero-under-subheading {
  margin: 0 0 17px 0;
}

.home-hero-try-links-wrapper {
  &.mobile {
    height: 10rem;
  }

  &.desktop {
    margin: auto;
    position: relative;
    top: 20px;
    width: 58rem;
    height: 12rem;
  }
}
</style>
