<template>
  <section :class="['wrapper', $mq]">
    <article :class="['awards-heading-wrapper', $mq]">
      <h1 :class="['heading', $mq]">{{ $t('AwardsLabel') }}</h1>
      <div :class="['award-logos-wrapper', $mq]">
        <a v-for="award of awards" :key="award.src" :href="award.href">
          <img
            :src="
              require(`@/assets/view/about/awards-and-reviews/${award.src}`)
            "
            :alt="award.src.split('.png')[0]"
          />
        </a>
      </div>
    </article>

    <article :class="['reviews-heading-wrapper', $mq]">
      <h1 :class="['heading', $mq]">{{ $t('ReviewsLabel') }}</h1>
      <div :class="['reviews-wrapper', $mq]">
        <div
          v-for="review of reviews"
          :key="review.src"
          :class="['review-wrapper', $mq]"
        >
          <img
            :class="['review-logo', $mq]"
            :src="
              require(`@/assets/view/about/awards-and-reviews/${review.src}`)
            "
            :alt="review.src.split('.png')[0]"
          />
          <div :class="['quote-wrapper', $mq]">
            <img
              :class="['quotation-mark', $mq]"
              src="@/assets/view/about/awards-and-reviews/quotation-mark.png"
              alt="quotation mark"
            />
            <blockquote :class="['quote', $mq]">
              {{ $t(review.phraseKey) }}
            </blockquote>
          </div>
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

<style lang="scss">
@import '@/scss/variables.scss';
</style>
