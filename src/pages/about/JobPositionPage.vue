<template>
  <section>
    <article>
      <h1></h1>
      <p></p>
      <primary-button path="/#" />
    </article>

    <article>
      <h1></h1>
      <ul>
        <li><p></p></li>
      </ul>
    </article>

    <article>
      <h1></h1>
      <ul>
        <li><p></p></li>
      </ul>
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

  computed: {
    position() {
      return jobPositions.find(
        job => job.id === this.$route.path.split('/about/jobs/')[1]
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
