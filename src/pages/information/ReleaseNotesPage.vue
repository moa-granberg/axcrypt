<template>
  <section :class="['text-view-wrapper', $mq]">
    <p
      :class="['description', $mq]"
      v-html="
        $t('ReleaseNotesDescription', {
          bitbucketUrl: 'https://bitbucket.org/axcryptab/axcrypt-net',
          cryptoUrl: '#/information/cryptographic-hashes-of-files',
        })
      "
    />

    <article :class="$mq" v-for="note of releaseNotes" :key="note.heading">
      <h1 :class="$mq">{{ note.heading }}</h1>
      <p :class="$mq">{{ note.summary }}</p>
      <ul :class="$mq" v-if="note.changeLog">
        <li :class="$mq" v-for="code of note.changeLog" :key="code">
          <p :class="$mq">{{ code }}</p>
        </li>
      </ul>
    </article>

    <article :class="$mq">
      <h1 :class="$mq">2018</h1>
      <a href="pdfs/ReleaseNotes2018.pdf" target="_blank">
        {{ $t('ReleaseNotesYearLabel') }} 2018</a
      >
    </article>

    <article :class="$mq">
      <h1 :class="$mq">2017</h1>
      <a href="pdfs/ReleaseNotes2017.pdf" target="_blank">
        {{ $t('ReleaseNotesYearLabel') }} 2017</a
      >
    </article>

    <article :class="$mq">
      <h1 :class="$mq">2016</h1>
      <a href="pdfs/ReleaseNotes2016.pdf" target="_blank">
        {{ $t('ReleaseNotesYearLabel') }} 2016</a
      >
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
