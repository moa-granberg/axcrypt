<template>
  <section :class="['jobs-wrapper', $mq]">
    <article
      v-for="job of jobPositions"
      :key="job.id"
      :class="['job-article', $mq]"
    >
      <h1 :class="['job-heading heading-medium', $mq]">{{ job.position }}</h1>
      <h2 :class="['job-heading body-text-large', $mq]">{{ job.location }}</h2>
      <p :class="['job-description body-text', $mq]">{{ job.summary }}</p>
      <primary-button
        phraseKey="ReadMoreButtonLabel"
        size="small"
        :path="`/about/jobs/${job.id}`"
      />
    </article>
  </section>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';
import jobPositions from '@/data/about/jobs/job-positions';

export default {
  components: {
    PrimaryButton,
  },

  data() {
    return {
      jobPositions,
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.jobs-wrapper {
  @include standard-margin;
  @include center-column;

  &.mobile {
    gap: $margin-mobile * 2;
  }

  &.desktop {
    gap: $margin-desktop * 2;
  }
}

.job-article {
  @include center-column;
}

.job-heading {
  @include no-margin-padding;
  font-weight: 400;
  color: $green;
}

.job-description {
  text-align: center;
  max-width: $max-text-width;

  &.mobile {
    margin: $margin-mobile 0;
  }
  &.desktop {
    margin: $margin-desktop 0;
  }
}
</style>
