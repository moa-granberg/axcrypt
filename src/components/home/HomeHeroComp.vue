<template>
  <section :class="`home-hero-wrapper ${$mq}`">
    <div :class="`home-hero-review-wrapper`">
      <h1 :class="`home-hero-heading ${$mq}`">
        {{ $t('HomeHeroHeading') }}
      </h1>
      <h2 :class="`home-hero-subheading ${$mq}`">
        {{ $t('HomeHeroSubheading') }}
      </h2>
      <h3 :class="`home-hero-under-subheading ${$mq}`">
        {{ $t('HomeHeroUnderSubheading') }}
      </h3>
    </div>
    <div :class="`home-hero-try-links-wrapper ${$mq}`">
      <router-link
        to="/premium-trial"
        :class="`home-hero-try-premium-wrapper home-hero-try-wrapper ${$mq}`"
      >
        <h1 :class="`home-hero-try-preheading ${$mq}`">
          {{ $t('HomeHeroTryPremiumPreHeading') }}
        </h1>
        <h2 :class="`home-hero-try-heading ${$mq}`">
          {{ $t('HomeHeroTryPremiumHeading') }}
        </h2>
      </router-link>
      <router-link
        to="/business-trial"
        :class="`home-hero-try-business-wrapper home-hero-try-wrapper ${$mq}`"
      >
        <h1 :class="`home-hero-try-preheading ${$mq}`">
          {{ $t('HomeHeroTryBusinessPreHeading') }}
        </h1>
        <h2 :class="`home-hero-try-heading ${$mq}`">
          {{ $t('HomeHeroTryBusinessHeading') }}
        </h2>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {};
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
  /* background-position: top; */
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
    font-size: 1.5rem;
  }
  &.desktop {
    max-width: 40rem;
    font-size: 3rem;
  }
}

.home-hero-subheading {
  font-weight: 300;
  &.mobile {
    font-size: 0.875rem;
    margin: 0 0 10px 0;
  }
  &.desktop {
    margin: 1rem 0 0.5rem 0;
    font-size: 1.5rem;
  }
}

.home-hero-under-subheading {
  margin: 0 0 17px 0;
  &.mobile {
    font-size: 0.75rem;
  }
  &.desktop {
    font-size: 1.125rem;
  }
}

.home-hero-try-links-wrapper {
  display: flex;

  &.desktop {
    max-width: 1000px;
    justify-content: center;
    margin: auto;
  }
}

.home-hero-try-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: $white;
  &.mobile {
    width: 50%;
  }
  &.desktop {
    position: relative;
    top: 30px;
    width: 29rem;
    height: 14rem;
  }
}

.home-hero-try-premium-wrapper {
  background-color: rgba(72, 119, 44, 0.7);
}

.home-hero-try-business-wrapper {
  background-color: rgba(0, 0, 0, 0.7);
}

.home-hero-try-preheading {
  font-weight: 300;
  margin: 0 0 10px 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &.mobile {
    font-size: 0.875rem;
  }
  &.desktop {
    font-size: 1.125rem;
  }
}

.home-hero-try-heading {
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  &.mobile {
    font-size: 1.125rem;
  }
  &.desktop {
    font-size: 1.875rem;
  }
}
</style>
