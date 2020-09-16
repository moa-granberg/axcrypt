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

export default {
  components: {
    Carousel,
    Slide,
    HomeWhatOthersSayCarouselSlide,
  },

  data() {
    return {
      whatOthersSayCarouselItems: [
        {
          src: 'pc-mag.png',
          alt: 'PC Mag Logo',
          quote:
            'AxCrypt makes everything about encryption simple, so you shouldn’t be surprised to learn that it even makes PKI exchange of secure data simple (…) For these reasons, AxCrypt joins CertainSafe as an Editors’ Choice for encryption.',
          signature: '- PC MAG, 2016, 2017, 2018, 2019 & 2020',
        },
        {
          src: 'tricks-era.png',
          alt: 'Tricks Era Logo',
          quote:
            'It is the best and well-known encryption tool that is perfect to encrypt any files on your computer.',
          signature: '- TRICKS ERA, 2018',
        },
        {
          src: 'tech-radar.png',
          alt: 'Tech Radar Logo',
          quote: 'AxCrypt is a good bet if you want something reliable.',
          signature: '- TECHRADAR.PRO, 2018, 2019 & 2020',
        },
        {
          src: 'zero-network.png',
          alt: 'Zero Network Logo',
          quote:
            'It keeps your files secure which is not so difficult because AxCrypt makes it easier.',
          signature: '- ZERONETWORK, 2018',
        },
        {
          src: 'windows-central.png',
          alt: 'Windows Central Logo',
          quote:
            'The best encryption service available by subscription is AxCrypt.',
          signature: '- WINDOWS CENTRAL, 2017',
        },
        {
          src: 'cbr.png',
          alt: 'CBR Logo',
          quote: 'The product is widely considered robust.',
          signature: '- CBR, 2017',
        },
        {
          src: 'softpedia.png',
          alt: 'Softpedia Logo',
          quote:
            'AxCrypt is a software that enables you to easily encrypt files and folders. It’s essential when you are sharing your computer with multiple users and want to maintain your privacy.',
          signature: '- SOFTPEDIA, 2016',
        },
        {
          src: 'lifehacker.png',
          alt: 'Lifehacker Logo',
          quote:
            'It’s really easy to use and easy to integrate into your workflow, thanks to its shell support. If you’re eager for more options, it also has a ton of command line options, so you can fire up the command prompt in Windows and perform more complex actions—or multiple actions at once.',
          signature: '- LIFEHACKER, 2015',
        },
        {
          src: 'download-3k.png',
          alt: 'Download 3K Logo',
          quote:
            'If you need to compress, encrypt, decrypt or shred files, AxCrypt is a powerful solution. With a host of features that can be easily accessed in any part of the Windows operating system, this application is easily the top choice amongst free file encryption software.',
          signature: '- DOWNLOAD 3K, 2012',
        },
        {
          src: 'find-my-soft.png',
          alt: 'FindmySoft Logo',
          quote:
            'AxCrypt is a free and easy to use security software solution that will ensure nobody has access to your private, sensitive information.',
          signature: '- FINDMYSOFT, 2012',
        },
      ],
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
    margin: 0 clamp(10rem, 25vw, 20rem) 2rem 0;
  }
}
</style>
