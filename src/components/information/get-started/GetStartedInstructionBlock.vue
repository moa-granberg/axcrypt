<template>
  <article :class="`instruction-block-wrapper ${$mq}`">
    <mq-layout mq="mobile">
      <h1 :class="`heading-small ${$mq}`">
        {{ $t(data.heading) }}
      </h1>

      <p :class="`body-text ${$mq}`" v-html="$t(data.ingress)" />

      <iframe
        :class="`iframe ${$mq}`"
        :title="data.videoTitle"
        :src="data.videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      <ol :class="`instructions-wrapper ${$mq}`">
        <li v-for="item of data.list" :key="item">
          <p :class="`body-text ${$mq}`" v-html="$t(item)" />
        </li>
      </ol>
    </mq-layout>

    <mq-layout mq="desktop">
      <div class="instruction-wrapper-desktop">
        <h1 :class="`heading-small ${$mq}`">
          {{ $t(data.heading) }}
        </h1>

        <p :class="`body-text ${$mq}`" v-html="$t(data.ingress)" />

        <ol :class="`instructions-wrapper ${$mq}`">
          <li v-for="item of data.list" :key="item">
            <p :class="`body-text ${$mq}`" v-html="$t(item)" />
          </li>
        </ol>
      </div>

      <iframe
        :class="`iframe ${$mq}`"
        :title="data.videoTitle"
        :src="data.videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </mq-layout>
  </article>
</template>

<script>
export default {
  props: {
    data: {
      heading: String,
      ingress: String,
      videoUrl: String,
      videoTitle: String,
      list: Array, // Strings
    },
  },
};
</script>

<style></style>
