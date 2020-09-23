<template>
  <section :class="['requirements-wrapper', $mq]">
    <p :class="['requirements-table-text body-text', $mq]">
      {{ $t('RequirementsTableDescription') }}
    </p>

    <!-- table -->

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
export default {};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.requirements-wrapper {
  max-width: 900px;

  &.mobile {
    padding: 24px;
  }

  &.desktop {
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
