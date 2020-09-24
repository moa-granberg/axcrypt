<template>
  <section :class="['requirements-wrapper', $mq]">
    <p :class="['requirements-table-text body-text', $mq]">
      {{ $t('RequirementsTableDescription') }}
    </p>

    <standard-table :headings="headings" :itemList="itemList" />

    <article :class="['requirements-note-wrapper', $mq]">
      <p :class="['body-text', $mq]">
        <strong>{{ $t('NoteLabel') }}: </strong>{{ $t('RequirementsNoteText') }}
      </p>
    </article>

    <h1 :class="['requirements-linux-heading heading-small', $mq]">Linux</h1>
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
      headings: [
        `${this.$t('OperatingSystemsLabel')}`,
        'AxCrypt 1.x',
        'AxCrypt 2.x',
      ],
      itemList: [
        [`${this.$t('Windows95-NTLabel')}`, true, false],
        [`${this.$t('Windows2000-XPLabel')}`, true, false],
        [`${this.$t('Windows2008-10Label')}`, true, true],
        ['Mac OS X', false, true],
        ['Linux', false, false],
        ['iOS', false, true],
        ['Android', false, true],
        ['Windows Phone', false, false],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.requirements-wrapper {
  max-width: 900px;

  &.mobile {
    padding: 24px;
  }

  &.desktop {
    padding: 0 24px 0 0;
    margin: 60px auto;
  }
}

.requirements-table-text {
  @include no-margin-padding;
}

.requirements-note-wrapper {
  @include note-wrapper-yellow;
}

.requirements-linux-heading {
  color: $green;
  font-weight: 400;
}

.requirements-linux-text {
  @include no-margin-padding;
}
</style>
