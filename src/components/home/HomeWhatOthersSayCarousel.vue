<template>
  <carousel
    :class="`home-what-others-say-carousel ${$mq}`"
    :per-page="1"
    paginationActiveColor="#86b96e"
    paginationColor="#a9a9a9"
    :paginationSize="8"
    :paginationPadding="6"
    :autoplay="true"
    :autoplayTimeout="15000"
  >
    <slide v-for="item of whatOthersSayCarouselItems" :key="item.src">
      <home-what-others-say-carousel-slide :item="item" />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import HomeWhatOthersSayCarouselSlide from '@/components/home/HomeWhatOthersSayCarouselSlide';
import whatOthersSayCarouselItems from '@/data/home/home-carousel-items';

export default {
  components: {
    Carousel,
    Slide,
    HomeWhatOthersSayCarouselSlide,
  },

  data() {
    return {
      whatOthersSayCarouselItems,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home-what-others-say-carousel {
  &.mobile {
    max-width: 20rem;
    margin: auto;
  }

  &.desktop {
    max-width: 25rem;
  }
}
</style>
