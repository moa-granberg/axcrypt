<template>
  <section :class="`home-get-started-wrapper ${$mq}`">
    <h1 :class="`home-get-started-heading heading-medium ${$mq}`">
      {{ $t('HomeGetStartedHeading') }}
    </h1>

    <div :class="`home-get-started-list-video-wrapper ${$mq}`">
      <home-get-started-list />

      <div :class="`home-get-started-video-wrapper ${$mq}`">
        <iframe
          :class="`home-get-started-video ${$mq}`"
          title="How to use AxCrypt"
          src="https://www.youtube.com/embed/jyixJ03qmkg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <i :class="`home-get-started-video-description body-text ${$mq}`">{{
          $t('HomeGetStartedYoutubeDescription')
        }}</i>
      </div>
    </div>

    <primary-button
      :class="`home-get-started-button ${$mq}`"
      phraseKey="GetStartedLinkLabel"
      size="large"
      color="dark-green"
      path="/get-started"
    />
  </section>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';
import HomeGetStartedList from '@/components/home/HomeGetStartedList';

export default {
  components: {
    PrimaryButton,
    HomeGetStartedList,
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
  margin: 0 0 2rem 0;
}

.home-get-started-list-video-wrapper {
  display: flex;
  align-items: center;
  &.mobile {
    flex-direction: column;
  }
  &.desktop {
    margin: 0 0 2rem 0;
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
    width: calc(16rem * 2);
    height: calc(9rem * 2);
  }
}

.home-get-started-video-description {
  font-weight: 600;

  &.mobile {
    margin: 0 0 2rem 0;
    text-align: center;
  }
}
</style>
