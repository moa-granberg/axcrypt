<template>
  <section :class="`home-get-started-wrapper ${$mq}`">
    <h1 :class="`home-get-started-heading ${$mq}`">
      {{ $t('HomeGetStartedHeading') }}
    </h1>

    <div :class="`home-get-started-list-video-wrapper ${$mq}`">
      <ul :class="`home-get-started-list ${$mq}`">
        <li
          v-for="item in getStartedListItems"
          :key="item.src"
          data-aos="fade-up"
          :class="`home-get-started-list-item-wrapper ${$mq}`"
        >
          <div :class="`home-get-started-list-item ${$mq}`">
            <img
              :class="`home-get-started-list-item-icon ${$mq}`"
              :src="require(`@/assets/icons/${item.src}`)"
              :alt="item.alt"
            />

            <div :class="`home-get-started-list-item-text-wrapper ${$mq}`">
              <h2 :class="`home-get-started-list-item-text-heading ${$mq}`">
                {{ $t(item.headingPhraseKey) }}
              </h2>

              <p :class="`home-get-started-list-item-text-paragraph ${$mq}`">
                {{ $t(item.paragraphPhraseKey) }}
              </p>
            </div>
          </div>

          <div
            v-if="item.followingDivider"
            data-aos="fade-up"
            :class="`home-get-started-list-divider ${$mq}`"
          ></div>
        </li>
      </ul>
      <div :class="`home-get-started-video-wrapper ${$mq}`">
        <iframe
          :class="`home-get-started-video ${$mq}`"
          title="How to use AxCrypt"
          src="https://www.youtube.com/embed/jyixJ03qmkg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <i :class="`home-get-started-video-description ${$mq}`">{{
          $t('HomeGetStartedYoutubeDescription')
        }}</i>
      </div>
    </div>

    <primary-button-comp
      :class="`home-get-started-button ${$mq}`"
      phraseKey="GetStartedLinkLabel"
      size="large"
      color="dark"
      path="/get-started"
    />
  </section>
</template>

<script>
import PrimaryButtonComp from '@/components/PrimaryButtonComp';

export default {
  components: {
    PrimaryButtonComp,
  },
  data() {
    return {
      getStartedListItems: [
        {
          src: 'cloud_download.svg',
          alt: 'cloud_download',
          headingPhraseKey: 'HomeGetStartedListDownloadHeading',
          paragraphPhraseKey: 'HomeGetStartedListDownloadParagraph',
          followingDivider: true,
        },
        {
          src: 'security_checked.svg',
          alt: 'security_checked',
          headingPhraseKey: 'HomeGetStartedListEncryptHeading',
          paragraphPhraseKey: 'HomeGetStartedListEncryptParagraph',
          followingDivider: true,
        },
        {
          src: 'cloud.svg',
          alt: 'cloud',
          headingPhraseKey: 'HomeGetStartedListShareHeading',
          paragraphPhraseKey: 'HomeGetStartedListShareParagraph',
          followingDivider: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home-get-started-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
}

.home-get-started-heading {
  color: $green;
  font-weight: 400;
  &.mobile {
    font-size: 1.125rem;
    margin: 0 0 2rem 0;
  }
  &.desktop {
    font-size: 1.5rem;
    margin: 0 0 2rem 0;
  }
}

.home-get-started-list-video-wrapper {
  &.desktop {
    display: flex;
    align-items: center;
    margin: 0 0 2rem 0;
  }
}

.home-get-started-list {
  list-style: none;
  padding: 0;
  &.mobile {
    margin: 0 0 2rem 0;
  }
}

.home-get-started-list-item-wrapper {
  display: flex;
  flex-direction: column;
}

.home-get-started-list-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.home-get-started-list-divider {
  border-left: 1px solid #aaa;
  &.mobile {
    height: 2rem;
    margin: 5px 0 5px 22px;
  }
  &.desktop {
    height: 3rem;
    margin: 0.5rem 0 0.5rem 2.15rem;
  }
}

.home-get-started-list-item-icon {
  border: 1px solid #aaa;
  border-radius: 50%;
  &.mobile {
    padding: 10px;
    height: 1.5rem;
  }
  &.desktop {
    padding: 1rem;
    height: 2.25rem;
  }
}

.home-get-started-list-item-text-wrapper {
  &.mobile {
  max-width: 14rem;
  margin: 0 0 0 1rem;
  }
  &.desktop {
    margin: 0 clamp(1rem, 10vw, 15rem) 0 2rem;
  }
}

.home-get-started-list-item-text-heading {
  color: $green;
  margin: 0;
  &.mobile {
    
    font-size: 0.875rem;
  }
  &.desktop {
    font-size: 1.125rem;
  }
}

.home-get-started-list-item-text-paragraph {
  margin: 0;
  &.mobile {
  font-size: 0.6rem;

  }
  &.desktop {
    font-size: 0.75rem;
  }
}

.home-get-started-video-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-get-started-video {
  &.mobile {
    margin: 0 0 0.25rem 0;
  }
  &.desktop {
    width: calc(16rem*2);
    height: calc(9rem*2);
  }
}

.home-get-started-video-description {
  font-weight: 600;
  &.mobile {
    font-size: 0.6rem;
    margin: 0 0 2rem 0;
  }
  &.desktop {
    font-size: 0.75rem;
  }
}
</style>
