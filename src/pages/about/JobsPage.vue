<template>
  <section :class="['jobs-wrapper', $mq]">
    <article
      v-for="job of jobPositions"
      :key="job.id"
      :class="['job-article', $mq]"
    >
      <h1 :class="['job-heading heading-medium', $mq]">{{ job.position }}</h1>
      <h2 :class="['job-subheading heading-small', $mq]">{{ job.location }}</h2>
      <p :class="['job-description body-text', $mq]">{{ job.summary }}</p>
      <primary-button
        :class="['job-button', $mq]"
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
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>
