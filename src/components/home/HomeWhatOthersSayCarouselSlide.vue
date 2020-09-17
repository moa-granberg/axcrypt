<template>
  <div :class="`home-what-others-say-carousel-slide ${$mq}`">
    <img
      :class="`home-what-others-say-carousel-slide-img ${$mq}`"
      :src="require(`@/assets/view/home/${item.src}`)"
      :alt="item.alt"
    />
    <h1 :class="`home-what-others-say-carousel-slide-quotation-mark ${$mq}`">
      "
    </h1>
    <blockquote
      :class="`home-what-others-say-carousel-slide-quote body-text ${$mq}`"
    >
      {{ item.quote }}
    </blockquote>
    <p :class="`home-what-others-say-carousel-slide-signature ${$mq}`">
      {{ item.signature }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      src: String,
      alt: String,
      quote: String,
      signature: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home-what-others-say-carousel-slide {
  @include center-column;
}

.home-what-others-say-carousel-slide-img {
  &.mobile {
    margin: 0 0 1rem 0;
    max-height: 40px;
  }

  &.desktop {
    margin: 0 0 1rem 0;
    max-height: 3rem;
  }
}

.home-what-others-say-carousel-slide-quotation-mark {
  align-self: flex-start;
  font-style: italic;
  font-weight: 400;
  margin: 0;

  &.mobile {
    font-size: 2rem;
  }

  &.desktop {
    font-size: 3rem;
  }
}

.home-what-others-say-carousel-slide-quote {
  font-weight: 600;

  &.mobile {
    margin: 0 1rem 1rem 1rem;
  }
}

.home-what-others-say-carousel-slide-signature {
  align-self: flex-end;
  font-size: 0.7rem;
  font-weight: 600;
}
</style>
