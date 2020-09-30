<template>
  <section :class="['job-application-wrapper', $mq]">
    <article :class="['text-wrapper', $mq]">
      <h1 :class="['position-heading heading-jumbo', $mq]">
        {{ position.position }}
      </h1>
      <h2 :class="['position-heading heading-medium', $mq]">
        {{ position.location }}
      </h2>
      <p :class="['body-text', $mq]">
        Thank you for your interest in applying for a job at AxCrypt. Please
        take a minute to fill out the following form. After you have completed
        your application, we will contact you via email.
      </p>
    </article>

    <form></form>
  </section>
</template>

<script>
import jobPositions from '@/data/about/jobs/job-positions';

export default {
  computed: {
    position() {
      return jobPositions.find(
        job => job.id === this.$route.path.split('/about/jobs/application/')[1]
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.job-application-wrapper {
  &.mobile {
    margin: $margin-mobile;
  }

  &.desktop {
    margin: $margin-top-aside-content 0 $margin-desktop 0;
  }
}

.text-wrapper {
  margin: auto;
  max-width: $max-text-width;
}

.position-heading {
  @include no-margin-padding;
  text-align: center;
  color: $green;
  font-weight: 400;
}
</style>
