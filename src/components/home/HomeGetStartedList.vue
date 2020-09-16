<template>
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
          <h2
            :class="`home-get-started-list-item-text-heading body-text-large ${$mq}`"
          >
            {{ $t(item.headingPhraseKey) }}
          </h2>

          <p
            :class="`home-get-started-list-item-text-paragraph body-text ${$mq}`"
          >
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
</template>

<script>
export default {
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
}

.home-get-started-list-item-text-paragraph {
  margin: 0;
}
</style>
