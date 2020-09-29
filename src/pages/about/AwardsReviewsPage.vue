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
            <div :class="['quote-wrapper', $mq]">
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
export default {
  data() {
    return {
      awards: [
        {
          src: 'award-pcmag.png',
          href:
            'http://uk.pcmag.com/encryption-products/83934/review/axcrypt-premium',
        },
        {
          src: 'award-zwodnik.png',
          href: 'http://www.zwodnik.com/software/windows/axcrypt/',
        },
        {
          src: 'award-programosy.png',
          href: 'http://www.programosy.pl/program,axcrypt.html%20_blank',
        },
        {
          src: 'award-softpedia.png',
          href:
            'http://www.softpedia.com/get/Security/Encrypting/AxCrypt.shtml',
        },
        {
          src: 'award-pcadvisor.png',
          href:
            'http://www.pcadvisor.co.uk/features/software/3290443/five-of-the-best-encryption-tools/',
        },
        {
          src: 'award-maddownload.png',
          href: 'https://maddownload.com/security/axcrypt/',
        },
      ],
      reviews: [
        {
          src: 'review-softpedia.png',
          href:
            'http://www.softpedia.com/get/Security/Encrypting/AxCrypt.shtml',
          phraseKey: 'AwardsReviewsReviewSoftpediaText',
        },
        {
          src: 'review-techradar.png',
          href: 'https://www.techradar.com/news/top-5-best-encryption-tools',
          phraseKey: 'AwardsReviewsReviewTechradarText',
        },
        {
          src: 'review-windowscentral.png',
          href: 'https://www.windowscentral.com/best-encryption-software',
          phraseKey: 'AwardsReviewsReviewWindowscentralText',
        },
        {
          src: 'review-pcmag.png',
          href:
            'http://uk.pcmag.com/encryption-products/83934/review/axcrypt-premium',
          phraseKey: 'AwardsReviewsReviewPcmagText',
        },
        {
          src: 'review-vpncrew.png',
          href: 'https://www.vpncrew.com/axcrypt-review/',
          phraseKey: 'AwardsReviewsReviewVpncrewText',
        },
      ],
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
  grid: 60px 1fr / 1fr;
  place-items: center;
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

.quote-wrapper {
  margin: 12px;
}

.quote {
  text-align: center;
  margin: 0;
  padding: 12px;
}
</style>
