<template>
  <section :class="['job-position-wrapper text-view-wrapper', $mq]">
    <div :class="['position-headings-wrapper', $mq]">
      <h1 :class="['position-heading heading-jumbo', $mq]">
        {{ position.position }}
      </h1>
      <h2 :class="['position-heading heading-medium', $mq]">
        {{ position.location }}
      </h2>
    </div>

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
        :class="['apply-button', $mq]"
        phraseKey="ApplyNowLabel"
        size="small"
        :path="`/about/jobs/application/${position.id}`"
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

    <article :class="['skills-and-experience-wrapper', $mq]">
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

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.job-position-wrapper {
  > article:last-of-type {
    padding-bottom: 0;
  }

  &.mobile {
    max-width: $max-text-width;
  }

  &.desktop {
    display: grid;
    grid: auto / 1fr 1fr;
    gap: $margin-desktop;
    grid-template-areas:
      'headings headings'
      'about about';
  }
}

.position-headings-wrapper {
  grid-area: headings;

  &.mobile {
    margin: 0 0 $margin-mobile 0;
  }

  &.desktop {
    margin: 0 0 $margin-desktop 0;
  }
}

.position-heading {
  @include no-margin-padding;
  text-align: center;
  color: $green;
  font-weight: 400;
}

.about-wrapper {
  grid-area: about;
  @include center-column;
  align-items: flex-start;
}

.apply-button {
  align-self: center;

  &.desktop {
    margin: $margin-desktop 0 0 0;
  }
}
</style>
