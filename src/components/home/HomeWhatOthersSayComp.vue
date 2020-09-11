<template>
  <section :class="`home-what-others-say-wrapper ${$mq}`">
    <h1 :class="`home-what-others-say-heading ${$mq}`">
      {{ $t('HomeWhatOthersSayHeading') }}
    </h1>
    <div :class="`home-what-others-say-carousel-awards-wrapper ${$mq}`">
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
        <slide
          v-for="item of whatOthersSayCarouselItems"
          :key="item.src"
          :class="`home-what-others-say-carousel-slide ${$mq}`"
        >
          <img
            :class="`home-what-others-say-carousel-slide-img ${$mq}`"
            :src="require(`@/assets/view/home/${item.src}`)"
            :alt="item.alt"
          />
          <h1
            :class="`home-what-others-say-carousel-slide-quotation-mark ${$mq}`"
          >
            "
          </h1>
          <blockquote
            :class="`home-what-others-say-carousel-slide-quote ${$mq}`"
          >
            {{ item.quote }}
          </blockquote>
          <p :class="`home-what-others-say-carousel-slide-signature ${$mq}`">
            {{ item.signature }}
          </p>
        </slide>
      </carousel>
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
      :class="`home-what-others-say-awards-testimonials-text ${$mq}`"
      v-html="$t('HomeWhatOtherSayTestimonialsText')"
    ></div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
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

<style lang="scss">
@import '@/scss/variables.scss';

.home-what-others-say-wrapper {
  background-color: $light-gray;
  padding: 1rem;
}

.home-what-others-say-heading {
  font-weight: 400;
  color: $black;
  text-align: center;

  &.mobile {
    font-size: 1.125rem;
  }

  &.desktop {
    font-size: 1.5rem;
  }
}

.home-what-others-say-carousel-awards-wrapper {
  &.desktop {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

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

.home-what-others-say-carousel-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    font-size: 0.75rem;
  }

  &.desktop {
    font-size: 0.875rem;
  }
}

.home-what-others-say-carousel-slide-signature {
  align-self: flex-end;
  font-size: 0.7rem;
  font-weight: 600;
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
    font-size: 0.6rem;
  }

  &.desktop {
    margin: 0 0 2rem 0;
    font-size: 0.875rem;
  }
}

.home-what-others-say-awards-testimonials-text > p > a {
  text-decoration: none;
  color: $dark-green;
}
</style>
