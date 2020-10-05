<template>
  <section :class="['requirements-wrapper', $mq]">
    <p :class="['requirements-table-text body-text', $mq]">
      {{ $t('RequirementsTableDescription') }}
    </p>

    <standard-table
      :headings="headings"
      :itemList="itemList"
      :class="['requirements-table', $mq]"
    />

    <article :class="['requirements-note-wrapper', $mq]">
      <p :class="['body-text', $mq]">
        <strong>{{ $t('NoteLabel') }}: </strong>{{ $t('RequirementsNoteText') }}
      </p>
    </article>

    <h1 :class="['requirements-linux-heading heading-medium-green', $mq]">
      Linux
    </h1>
    <p :class="['requirements-linux-text body-text', $mq]">
      {{ $t('RequirementsLinuxText') }}
    </p>
  </section>
</template>

<script>
import StandardTable from '@/components/StandardTable';

export default {
  components: {
    StandardTable,
  },

  data() {
    return {
      headings: [`${this.$t('OperatingSystemsLabel')}`, 'AxCrypt 2.x'],
      itemList: [
        [`${this.$t('Windows95-NTLabel')}`, false],
        [`${this.$t('Windows2000-XPLabel')}`, false],
        [`${this.$t('Windows2008-10Label')}`, true],
        ['Mac OS X', true],
        ['Linux', false],
        ['iOS', true],
        ['Android', true],
        ['Windows Phone', false],
      ],
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.requirements-wrapper {
  max-width: $max-content-width;

  &.mobile {
    padding: $margin-mobile;
  }

  &.desktop {
    padding: 0 24px 0 0;
    margin: $margin-top-aside-content auto;
  }
}

.requirements-table-text {
  @include no-margin-padding;
}

.requirements-table > li {
  grid: 1fr / 3fr 1fr !important;
}

.requirements-note-wrapper {
  @include note-wrapper-yellow;
}

.requirements-linux-heading {
  margin: $margin-medium-heading;
}

.requirements-linux-text {
  @include no-margin-padding;
}
</style>
