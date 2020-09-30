<template>
  <section :class="['job-position-wrapper text-view-wrapper', $mq]">
    <article :class="['about-wrapper', $mq]">
      <h1 :class="$mq">About the position</h1>
      <p
        v-for="text of position.aboutPosition"
        :key="text"
        :class="['job-position-text']"
      >
        {{ text }}
      </p>
      <primary-button
        phraseKey="Apply Now"
        size="small"
        :path="`/application/${position.id}`"
      />
    </article>

    <article :class="['key-responsibilities-wrapper', $mq]">
      <h1 :class="$mq">Key Responsibilities</h1>
      <ul :class="['list-wrapper', $mq]">
        <li
          v-for="text of position.keyResponsibilities"
          :key="text"
          :class="['list-item', $mq]"
        >
          <p :class="['job-position-text', $mq]">{{ text }}</p>
        </li>
      </ul>
    </article>

    <article :class="['skills-and-experience-wrapper']">
      <h1 :class="$mq">Skills and Experience</h1>
      <ul :class="['list-wrapper', $mq]">
        <li
          v-for="text of position.skillsAndExperience"
          :key="text"
          :class="['list-item', $mq]"
        >
          <p :class="['job-position-text', $mq]">{{ text }}</p>
        </li>
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
