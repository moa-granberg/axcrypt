<template>
  <section :class="['wrapper', $mq]">
    <article :class="['awards-heading-wrapper', $mq]">
      <h1 :class="['heading-large', $mq]">{{ $t('AwardsLabel') }}</h1>
      <div :class="['award-logos-wrapper', $mq]">
        <a v-for="award of awards" :key="award.src" :href="award.href">
          <img
            :class="['award-logo', $mq]"
            :src="
              require(`@/assets/view/about/awards-and-reviews/${award.src}`)
            "
            :alt="award.src.split('.png')[0]"
          />
        </a>
      </div>
    </article>

    <article :class="['reviews-heading-wrapper', $mq]">
      <h1 :class="['heading-large', $mq]">{{ $t('ReviewsLabel') }}</h1>
      <div :class="['reviews-wrapper', $mq]">
        <div v-for="review of reviews" :key="review.src">
          <a :class="['review-link', $mq]" :href="review.href">
            <img
              :class="['review-logo', $mq]"
              :src="
                require(`@/assets/view/about/awards-and-reviews/${review.src}`)
              "
              :alt="review.src.split('.png')[0]"
            />
            <div>
              <img
                src="@/assets/view/about/awards-and-reviews/quotation-mark.png"
                alt="quotation mark"
              />
              <blockquote :class="['quote body-text-large', $mq]">
                {{ $t(review.phraseKey) }}
              </blockquote>
            </div>
          </a>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import AwardsData from '@/data/about/awards-and-reviews/awards';
import ReviewsData from '@/data/about/awards-and-reviews/reviews';

export default {
  data() {
    return {
      awards: AwardsData,
      reviews: ReviewsData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.wrapper {
  &.mobile {
    padding: $margin-mobile;
  }
  &.desktop {
    padding: $margin-top-aside-content $margin-desktop;
  }
}

.awards-heading-wrapper {
  @include center-column;
  border-bottom: 1px solid rgba($black, 0.25);
}

.heading-large {
  margin: 0 0 $margin-mobile 0;
  font-weight: 400;

  &.mobile {
    margin: 0 0 $margin-mobile 0;
  }

  &.desktop {
    margin: 0 0 $margin-desktop 0;
  }
}

.award-logos-wrapper {
  display: grid;
  grid: 1fr 1fr / 1fr 1fr 1fr;
  place-items: center;

  &.mobile {
    margin: 0 0 $margin-mobile 0;
    width: 100%;
  }

  &.desktop {
    margin: 0 0 $margin-desktop 0;
    width: 75%;
  }
}

.award-logo {
  &.mobile {
    max-height: 80px;
    max-width: 80px;
  }
  &.desktop {
    max-height: 150px;
    max-width: 150px;
  }
}

.reviews-heading-wrapper {
  @include center-column;

  &.mobile {
    margin: $margin-mobile 0 0 0;
  }

  &.desktop {
    margin: $margin-desktop 0 0 0;
  }
}

.reviews-wrapper {
  display: grid;
  align-items: flex-start;

  &.mobile {
    grid: auto / 1fr;
  }

  &.desktop {
    grid: auto / 1fr 1fr 1fr;
    gap: $margin-desktop;
  }
}

.review-link {
  display: grid;
  grid: 40px 1fr / 1fr;
  justify-items: center;

  text-decoration: none;
  color: $gray;

  &.mobile {
    margin: 0 0 $margin-mobile * 2 0;
  }
}

.review-logo {
  max-height: 40px;
  max-width: 100px;
}

.quote {
  text-align: center;
  margin: 0;
  padding: 12px;
}
</style>
