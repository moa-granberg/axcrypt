<template>
  <section :class="['text-view-wrapper', $mq]">
    <p :class="['description', $mq]" v-html="$t('ReleaseNotesDescription')" />

    <article :class="$mq" v-for="note of releaseNotes" :key="note.heading">
      <h1 :class="$mq">{{ note.heading }}</h1>
      <p :class="$mq">{{ note.summary }}</p>
      <ul :class="$mq" v-if="note.changeLog">
        <li :class="$mq" v-for="code of note.changeLog" :key="code">
          <p :class="$mq">{{ code }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import releaseNotes from '@/data/information/release-notes/data';

export default {
  data() {
    return {
      releaseNotes,
    };
  },
};
</script>
