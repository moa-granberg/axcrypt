<template>
  <section :class="`home-what-others-say-wrapper ${$mq}`">
    <h1 :class="`home-what-others-say-heading heading-medium ${$mq}`">
      {{ $t('HomeWhatOthersSayHeading') }}
    </h1>
    <div :class="`home-what-others-say-carousel-awards-wrapper ${$mq}`">
      <home-what-others-say-carousel />

      <div :class="`home-what-others-say-awards-wrapper ${$mq}`">
        <div :class="`home-what-others-say-awards-logos-wrapper ${$mq}`">
          <img
            :class="`home-what-others-say-awards-logo pc-mag ${$mq}`"
            src="@/assets/view/home/pc-mag.png"
            alt="PC Mag Logo"
          />
          <img
            :class="`home-what-others-say-awards-logo softpedia ${$mq}`"
            src="@/assets/view/home/award-softpedia.png"
            alt="Softpedia Award Logo"
          />
        </div>
      </div>
    </div>
    <div
      :class="`home-what-others-say-awards-testimonials-text body-text ${$mq}`"
      v-html="$t('HomeWhatOtherSayTestimonialsText')"
    ></div>
  </section>
</template>

<script>
import HomeWhatOthersSayCarousel from '@/components/home/HomeWhatOthersSayCarousel';

export default {
  components: {
    HomeWhatOthersSayCarousel,
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/fonts.scss';

.home-what-others-say-wrapper {
  background-color: $light-gray;
  padding: 1rem;
}

.home-what-others-say-heading {
  font-weight: 400;
  color: $black;
  text-align: center;

  &.mobile {
    margin: 2rem 0 3rem 0;
  }
}

.home-what-others-say-carousel-awards-wrapper {
  &.desktop {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.home-what-others-say-awards-wrapper {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}
.home-what-others-say-awards-logos-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-what-others-say-awards-logo {
  margin: 0 0.25rem;

  &.pc-mag {
    height: 2.5rem;

    &.desktop {
      height: 3.5rem;
    }
  }

  &.softpedia {
    height: 4rem;

    &.desktop {
      height: 5rem;
    }
  }
}

.home-what-others-say-awards-testimonials-text {
  text-align: center;

  &.mobile {
    margin: 1rem 0 2rem 0;
  }

  &.desktop {
    margin: 0 0 2rem 0;
  }
}

.home-what-others-say-awards-testimonials-text > p > a {
  text-decoration: none;
  color: $dark-green;
}
</style>
